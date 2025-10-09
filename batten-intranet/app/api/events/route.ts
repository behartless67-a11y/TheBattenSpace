import { NextResponse } from 'next/server';

const ICAL = require('ical.js');

export async function GET() {
  try {
    const UPCOMING_EVENTS_URL = 'https://www.trumba.com/calendars/batten-school-events.ics';
    const KEY_DATES_URL = 'https://www.trumba.com/calendars/fbs-key-dates.ics';

    // Fetch both calendars in parallel
    const [upcomingEventsResponse, keyDatesResponse] = await Promise.all([
      fetch(UPCOMING_EVENTS_URL),
      fetch(KEY_DATES_URL)
    ]);

    if (!upcomingEventsResponse.ok || !keyDatesResponse.ok) {
      throw new Error('Failed to fetch calendar data');
    }

    const [upcomingEventsText, keyDatesText] = await Promise.all([
      upcomingEventsResponse.text(),
      keyDatesResponse.text()
    ]);

    // Parse ICS data
    const upcomingEvents = parseICS(upcomingEventsText);
    const keyDates = parseICS(keyDatesText);

    // Filter to only future events and limit to next 30 days
    const now = new Date();
    const thirtyDaysFromNow = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);

    const filterEvents = (events: any[]) => {
      return events
        .filter(event => {
          const eventDate = new Date(event.start);
          return eventDate >= now && eventDate <= thirtyDaysFromNow;
        })
        .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())
        .slice(0, 10); // Limit to 10 events
    };

    return NextResponse.json({
      upcomingEvents: filterEvents(upcomingEvents),
      keyDates: filterEvents(keyDates)
    }, {
      headers: {
        'Cache-Control': 'public, max-age=3600' // Cache for 1 hour
      }
    });
  } catch (error) {
    console.error('Error fetching events:', error);
    return NextResponse.json({
      error: 'Failed to fetch events',
      upcomingEvents: [],
      keyDates: []
    }, { status: 500 });
  }
}

function parseICS(icsData: string) {
  try {
    const jcalData = ICAL.parse(icsData);
    const comp = new ICAL.Component(jcalData);
    const vevents = comp.getAllSubcomponents('vevent');

    return vevents.map((vevent: any) => {
      const event = new ICAL.Event(vevent);
      return {
        title: event.summary,
        start: event.startDate.toJSDate().toISOString(),
        end: event.endDate ? event.endDate.toJSDate().toISOString() : null,
        location: event.location || '',
        description: event.description || ''
      };
    });
  } catch (error) {
    console.error('Error parsing ICS:', error);
    return [];
  }
}

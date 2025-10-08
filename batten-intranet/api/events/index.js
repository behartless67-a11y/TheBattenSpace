const fetch = require('node-fetch');
const ICAL = require('ical.js');

module.exports = async function (context, req) {
  context.log('Fetching events from Trumba calendars');

  try {
    // Trumba calendar URL (ICS format)
    // Note: Replace webcal:// with https:// for proper fetching
    const KEY_DATES_URL = 'https://www.trumba.com/calendars/fbs-key-dates.ics';

    // Fetch key dates calendar
    const keyDatesResponse = await fetch(KEY_DATES_URL);

    if (!keyDatesResponse.ok) {
      throw new Error('Failed to fetch calendar data');
    }

    const keyDatesText = await keyDatesResponse.text();

    // Parse ICS data
    const keyDates = parseICS(keyDatesText);

    // Filter to only future events and limit to next 30 days
    const now = new Date();
    const thirtyDaysFromNow = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);

    const filterEvents = (events) => {
      return events
        .filter(event => {
          const eventDate = new Date(event.start);
          return eventDate >= now && eventDate <= thirtyDaysFromNow;
        })
        .sort((a, b) => new Date(a.start) - new Date(b.start))
        .slice(0, 10); // Limit to 10 events
    };

    context.res = {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600' // Cache for 1 hour
      },
      body: {
        upcomingEvents: filterEvents(keyDates), // Using same calendar for both for now
        keyDates: filterEvents(keyDates)
      }
    };
  } catch (error) {
    context.log.error('Error fetching events:', error);

    context.res = {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        error: 'Failed to fetch events',
        upcomingEvents: [],
        keyDates: []
      }
    };
  }
};

function parseICS(icsData) {
  try {
    const jcalData = ICAL.parse(icsData);
    const comp = new ICAL.Component(jcalData);
    const vevents = comp.getAllSubcomponents('vevent');

    return vevents.map(vevent => {
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

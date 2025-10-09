const fetch = require('node-fetch');
const ICAL = require('ical.js');

module.exports = async function (context, req) {
  context.log('Fetching events from Trumba calendars');

  try {
    // Trumba calendar URLs (ICS format)
    // Note: Replace webcal:// with https:// for proper fetching
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
        upcomingEvents: filterEvents(upcomingEvents),
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

function decodeHtmlEntities(text) {
  if (!text) return text;
  return text
    .replace(/&quot;/g, '"')
    .replace(/&#34;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#(\d+);/g, (match, dec) => String.fromCharCode(dec));
}

function parseICS(icsData) {
  try {
    const jcalData = ICAL.parse(icsData);
    const comp = new ICAL.Component(jcalData);
    const vevents = comp.getAllSubcomponents('vevent');

    return vevents.map(vevent => {
      const event = new ICAL.Event(vevent);
      return {
        title: decodeHtmlEntities(event.summary),
        start: event.startDate.toJSDate().toISOString(),
        end: event.endDate ? event.endDate.toJSDate().toISOString() : null,
        location: decodeHtmlEntities(event.location || ''),
        description: decodeHtmlEntities(event.description || '')
      };
    });
  } catch (error) {
    console.error('Error parsing ICS:', error);
    return [];
  }
}

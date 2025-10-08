import { NextResponse } from 'next/server';
import ICAL from 'ical.js';

function decodeHtmlEntities(text: string): string {
  const entities: Record<string, string> = {
    '&#39;': "'",
    '&quot;': '"',
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&#x27;': "'",
    '&#x2F;': '/',
    '&#8217;': "'",  // Right single quotation mark
    '&#8216;': "'",  // Left single quotation mark
    '&#8220;': '"',  // Left double quotation mark
    '&#8221;': '"',  // Right double quotation mark
    '&#8211;': '–',  // En dash
    '&#8212;': '—',  // Em dash
    '&nbsp;': ' ',   // Non-breaking space
  };

  return text.replace(/&#?\w+;/g, (match) => entities[match] || match);
}

export async function GET() {
  try {
    const icsUrl = 'https://www.trumba.com/calendars/batten-school-events.ics';

    const response = await fetch(icsUrl);
    const icsData = await response.text();

    const jcalData = ICAL.parse(icsData);
    const comp = new ICAL.Component(jcalData);
    const vevents = comp.getAllSubcomponents('vevent');

    const now = new Date();

    interface EventData {
      title: string;
      start: Date;
      end: Date;
      location: string;
      description: string;
    }

    const upcomingEvents = vevents
      .map((vevent) => {
        const event = new ICAL.Event(vevent);
        return {
          title: decodeHtmlEntities(event.summary || ''),
          start: event.startDate.toJSDate(),
          end: event.endDate.toJSDate(),
          location: decodeHtmlEntities(event.location || ''),
          description: decodeHtmlEntities(event.description || '')
        };
      })
      .filter((event: EventData) => new Date(event.start) >= now)
      .sort((a: EventData, b: EventData) => new Date(a.start).getTime() - new Date(b.start).getTime())
      .slice(0, 6);

    return NextResponse.json(upcomingEvents);
  } catch (error) {
    console.error('Error fetching events:', error);
    return NextResponse.json({ error: 'Failed to fetch events' }, { status: 500 });
  }
}

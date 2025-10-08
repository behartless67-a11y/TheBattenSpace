'use client';

import { useEffect, useState } from 'react';

interface Event {
  title: string;
  start: string;
  location: string;
}

export function UpcomingEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [keyDates, setKeyDates] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch('/api/events').then((res) => res.json()),
      fetch('/api/key-dates').then((res) => res.json())
    ])
      .then(([eventsData, keyDatesData]) => {
        setEvents(eventsData);
        setKeyDates(keyDatesData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading events:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center py-8">
        <p className="text-white/70">Loading events...</p>
      </div>
    );
  }

  if (events.length === 0 && keyDates.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-white/70">No upcoming events</p>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true
    });
  };

  // Combine all events and sort by date
  const allEvents = [...events, ...keyDates]
    .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime());

  return (
    <div className="w-full">
      {allEvents.length === 0 ? (
        <p className="text-white/70">No upcoming events</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
          {allEvents.map((event, index) => (
            <div key={index} className="pb-6 border-b-2 border-white/40 h-full">
              <h4 className="font-bold mb-3 text-lg leading-tight">{event.title}</h4>
              <p className="text-base font-semibold opacity-90">
                {formatDate(event.start)} • {formatTime(event.start)}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

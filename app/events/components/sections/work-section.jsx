'use client';

import { useReveal } from '../../hooks/use-reveal';
import { eventsContent } from '../../../resources/index.js';
import { useEffect, useState } from 'react';

export function WorkSection() {
  const { ref, isVisible } = useReveal(0.3);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Fetch events from API route
        const response = await fetch('/api/events');
        
        if (response.ok) {
          const data = await response.json();
          // Sort by date and take first 3
          const sortedEvents = data
            .filter(event => new Date(event.start) >= new Date())
            .sort((a, b) => new Date(a.start) - new Date(b.start))
            .slice(0, 3);
          setEvents(sortedEvents);
        } else {
          // Fallback: show placeholder events
          setEvents([
            {
              id: '1',
              title: 'Upcoming Workshop',
              start: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
            },
            {
              id: '2',
              title: 'IEEE SoutheastCon Competition',
              start: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
            },
            {
              id: '3',
              title: 'Career Networking Event',
              start: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000).toISOString(),
            },
          ]);
        }
      } catch (error) {
        // Fallback events
        setEvents([
          {
            id: '1',
            title: 'Upcoming Workshop',
            start: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
          },
          {
            id: '2',
            title: 'IEEE SoutheastCon Competition',
            start: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
          },
          {
            id: '3',
            title: 'Career Networking Event',
            start: new Date(Date.now() + 21 * 24 * 60 * 60 * 1000).toISOString(),
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
  };

  return (
    <section
      ref={ref}
      className="flex h-screen w-screen shrink-0 snap-start items-center px-6 pt-20 md:px-12 md:pt-0 lg:px-16"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div
          className={`mb-12 transition-all duration-700 md:mb-16 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
          }`}
        >
          <h2 className="mb-2 font-sans text-5xl font-light tracking-tight text-foreground md:text-6xl lg:text-7xl">
            {eventsContent.featured.title}
          </h2>
          <p className="font-mono text-sm text-foreground/60 md:text-base">{eventsContent.featured.subtitle}</p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {loading ? (
            <div className="font-mono text-sm text-foreground/60">Loading events...</div>
          ) : events.length === 0 ? (
            <div className="font-mono text-sm text-foreground/60">No upcoming events</div>
          ) : (
            events.map((event, i) => (
              <ProjectCard key={event.id || i} event={event} index={i} isVisible={isVisible} formatDate={formatDate} formatTime={formatTime} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ event, index, isVisible, formatDate, formatTime }) {
  const getRevealClass = () => {
    if (!isVisible) {
      return index % 2 === 0 ? '-translate-x-16 opacity-0' : 'translate-x-16 opacity-0';
    }
    return 'translate-x-0 opacity-100';
  };

  return (
    <div
      className={`group flex items-center justify-between border-b border-foreground/10 py-6 transition-all duration-700 hover:border-foreground/20 md:py-8 ${getRevealClass()}`}
      style={{
        transitionDelay: `${index * 150}ms`,
        marginLeft: index % 2 === 0 ? '0' : 'auto',
        maxWidth: index % 2 === 0 ? '85%' : '90%',
      }}
    >
      <div className="flex items-baseline gap-4 md:gap-8">
        <span className="font-mono text-sm text-foreground/30 transition-colors group-hover:text-foreground/50 md:text-base">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div>
          <h3 className="mb-1 font-sans text-2xl font-light text-foreground transition-transform duration-300 group-hover:translate-x-2 md:text-3xl lg:text-4xl">
            {event.title}
          </h3>
          <p className="font-mono text-xs text-foreground/50 md:text-sm">
            {formatDate(event.start)} at {formatTime(event.start)}
          </p>
        </div>
      </div>
    </div>
  );
}

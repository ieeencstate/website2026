import { NextResponse } from 'next/server';
import { eventsContent } from '../../resources/index.js';

export async function GET() {
  try {
    const calendarId = eventsContent.calendar.calendarId;
    
    // Try to fetch from Google Calendar iCal feed
    const icalUrl = `https://calendar.google.com/calendar/ical/${encodeURIComponent(calendarId)}/public/basic.ics`;
    
    try {
      const response = await fetch(icalUrl);
      const icalData = await response.text();
      
      // Parse iCal data
      const events = parseICal(icalData);
      
      return NextResponse.json(events);
    } catch (error) {
      console.error('Error fetching iCal:', error);
      
      // Return empty array or fallback events
      return NextResponse.json([]);
    }
  } catch (error) {
    console.error('Error in events API:', error);
    return NextResponse.json([], { status: 500 });
  }
}

function parseICal(icalData) {
  const events = [];
  const lines = icalData.split('\n');
  let currentEvent = null;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (line === 'BEGIN:VEVENT') {
      currentEvent = {};
    } else if (line === 'END:VEVENT' && currentEvent) {
      if (currentEvent.start && currentEvent.title) {
        events.push({
          id: currentEvent.uid || `event-${events.length}`,
          title: currentEvent.title,
          start: currentEvent.start,
          end: currentEvent.end || currentEvent.start,
          description: currentEvent.description || '',
          location: currentEvent.location || '',
        });
      }
      currentEvent = null;
    } else if (currentEvent) {
      if (line.startsWith('SUMMARY:')) {
        currentEvent.title = line.substring(8).trim();
      } else if (line.startsWith('DTSTART')) {
        const dateStr = line.includes(':') ? line.split(':')[1] : '';
        currentEvent.start = parseICalDate(dateStr);
      } else if (line.startsWith('DTEND')) {
        const dateStr = line.includes(':') ? line.split(':')[1] : '';
        currentEvent.end = parseICalDate(dateStr);
      } else if (line.startsWith('DESCRIPTION:')) {
        currentEvent.description = line.substring(12).trim();
      } else if (line.startsWith('LOCATION:')) {
        currentEvent.location = line.substring(9).trim();
      } else if (line.startsWith('UID:')) {
        currentEvent.uid = line.substring(4).trim();
      }
    }
  }
  
  // Filter future events and sort by date
  const now = new Date();
  return events
    .filter(event => new Date(event.start) >= now)
    .sort((a, b) => new Date(a.start) - new Date(b.start));
}

function parseICalDate(dateStr) {
  // iCal dates are typically in format: YYYYMMDDTHHMMSSZ or YYYYMMDD
  if (!dateStr) return new Date().toISOString();
  
  // Handle timezone-aware dates
  if (dateStr.includes('T') && dateStr.length >= 15) {
    const year = dateStr.substring(0, 4);
    const month = dateStr.substring(4, 6);
    const day = dateStr.substring(6, 8);
    const hour = dateStr.substring(9, 11) || '00';
    const minute = dateStr.substring(11, 13) || '00';
    const second = dateStr.substring(13, 15) || '00';
    
    return new Date(`${year}-${month}-${day}T${hour}:${minute}:${second}`).toISOString();
  } else if (dateStr.length === 8) {
    // Date only
    const year = dateStr.substring(0, 4);
    const month = dateStr.substring(4, 6);
    const day = dateStr.substring(6, 8);
    return new Date(`${year}-${month}-${day}`).toISOString();
  }
  
  return new Date().toISOString();
}


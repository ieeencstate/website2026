"use client";

import { useState, useEffect } from "react";
import {
  Heading,
  Text,
  Column,
  Row,
  Card,
  Button,
  Badge,
} from "@once-ui-system/core";
import { Container } from "../components/Container";
import { Section } from "../components/Section";

// Sample events data - In production, this would come from Google Calendar API
const sampleEvents = [
  {
    id: 1,
    title: "Weekly ExCom Meeting",
    date: "2024-10-14",
    time: "3:00 PM - 4:00 PM",
    location: "Engineering Building II, Room 2311",
    description: "Weekly executive committee meeting to discuss upcoming events and chapter business.",
    type: "meeting",
    recurring: true,
  },
  {
    id: 2,
    title: "OPS 2 Lecture: PCB Design & Manufacturing",
    date: "2024-10-15",
    time: "5:10 PM - 6:30 PM", 
    location: "Engineering Building II, Room 1021",
    description: "Technical workshop covering PCB design fundamentals, manufacturing processes, and 3D CAD integration.",
    type: "workshop",
    recurring: false,
  },
  {
    id: 3,
    title: "Duke Energy Industry Event",
    date: "2024-10-18",
    time: "6:00 PM - 8:00 PM",
    location: "Hunt Library, Room 4100",
    description: "Join Duke Energy representatives for insights into the energy industry and career opportunities.",
    type: "industry",
    recurring: false,
  },
  {
    id: 4,
    title: "Robotics Project Build Session",
    date: "2024-10-20",
    time: "2:00 PM - 5:00 PM",
    location: "Makerspace, Hunt Library",
    description: "Hands-on session working on robotics projects. Bring your ideas and let's build something amazing!",
    type: "project",
    recurring: false,
  },
  {
    id: 5,
    title: "Weekly ExCom Meeting",
    date: "2024-10-21",
    time: "3:00 PM - 4:00 PM",
    location: "Engineering Building II, Room 2311", 
    description: "Weekly executive committee meeting to discuss upcoming events and chapter business.",
    type: "meeting",
    recurring: true,
  },
  {
    id: 6,
    title: "IEEE Student Branch General Meeting",
    date: "2024-10-25",
    time: "7:00 PM - 8:30 PM",
    location: "Engineering Building II, Room 1021",
    description: "Monthly general meeting for all IEEE members. Pizza will be provided!",
    type: "general",
    recurring: false,
  },
];

const eventTypes = [
  { key: "all", label: "All Events", color: "neutral" },
  { key: "meeting", label: "Meetings", color: "blue" },
  { key: "workshop", label: "Workshops", color: "green" },
  { key: "industry", label: "Industry", color: "purple" },
  { key: "project", label: "Projects", color: "orange" },
  { key: "general", label: "General", color: "red" },
];

function getEventTypeColor(type: string) {
  const eventType = eventTypes.find(t => t.key === type);
  return eventType?.color || "neutral";
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { 
    weekday: "long", 
    year: "numeric", 
    month: "long", 
    day: "numeric" 
  });
}

function isUpcoming(dateString: string) {
  const eventDate = new Date(dateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return eventDate >= today;
}

export default function Events() {
  const [filter, setFilter] = useState("all");
  const [events, setEvents] = useState(sampleEvents);

  const filteredEvents = events.filter(event => 
    filter === "all" || event.type === filter
  );

  const upcomingEvents = filteredEvents.filter(event => isUpcoming(event.date));
  const sortedEvents = upcomingEvents.sort((a, b) => 
    new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <Container padding="l">
      <Column fillWidth padding="0" gap="xl">
        {/* Hero Section */}
        <Section padding="xl">
          <Column 
            maxWidth="xl" 
            gap="l" 
            align="center"
            style={{ textAlign: "center", margin: "0 auto" }}
          >
            <Heading variant="display-strong-xl" className="nc-state-red">
              Events & Calendar
            </Heading>
            <Text
              variant="heading-default-l"
              onBackground="neutral-weak"
              wrap="balance"
              align="center"
              style={{ maxWidth: "700px", margin: "0 auto" }}
            >
              Stay connected with the IEEE community at NC State. Join us for technical workshops, industry talks, networking events, and project sessions.
            </Text>
          </Column>
        </Section>

        {/* Google Calendar Integration Note */}
        <Section padding="xl">
          <Column maxWidth="xl" style={{ margin: "0 auto" }}>
            <Card padding="l" background="surface" border="neutral-alpha-weak" className="feature-card" style={{ borderRadius: 20 }}>
              <Column gap="m">
                <Row gap="m" align="center">
                  <div style={{ 
                    width: "40px", 
                    height: "40px", 
                    backgroundColor: "var(--ieee-blue, #0066CC)", 
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "16px"
                  }}>
                    📅
                  </div>
                  <Column gap="4">
                    <Heading variant="heading-default-m">
                      Google Calendar Integration
                    </Heading>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      Calendar ID: ncsu.edu_ngl6n4iuvhsd5d3730d3db1os@group.calendar.google.com
                    </Text>
                  </Column>
                </Row>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  Our events are synced with Google Calendar for real-time updates. Subscribe to our calendar to never miss an event!
                </Text>
                <Button
                  href="https://calendar.google.com/calendar/u/0?cid=bmNzdS5lZHVfbmdsNm40aXV2aHNkNWQzNzMwZDNkYjFvc0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
                  variant="secondary"
                  size="s"
                  target="_blank"
                  rel="noopener noreferrer"
                  prefixIcon="globe"
                >
                  Add to Google Calendar
                </Button>
              </Column>
            </Card>
          </Column>
        </Section>

        {/* Event Filters */}
        <Section padding="xl">
          <Column maxWidth="xl" gap="m" style={{ margin: "0 auto" }}>
            <Heading variant="heading-default-m">
              Filter Events
            </Heading>
            <Row gap="s" wrap>
              {eventTypes.map((eventType) => (
                <Button
                  key={eventType.key}
                  variant={filter === eventType.key ? "primary" : "tertiary"}
                  size="s"
                  onClick={() => setFilter(eventType.key)}
                >
                  {eventType.label}
                </Button>
              ))}
            </Row>
          </Column>
        </Section>

        {/* Upcoming Events */}
        <Section padding="xl">
          <Column maxWidth="xl" gap="l" style={{ margin: "0 auto" }}>
            <Heading variant="heading-strong-l" className="nc-state-red">
              {filter === "all" ? "Upcoming Events" : `Upcoming ${eventTypes.find(t => t.key === filter)?.label}`}
            </Heading>

            {sortedEvents.length === 0 ? (
              <Card padding="xl" background="surface" border="neutral-alpha-weak" className="feature-card" style={{ borderRadius: 20 }}>
                <Column gap="m" align="center" style={{ textAlign: "center" }}>
                  <Text variant="heading-default-m" onBackground="neutral-weak">
                    No upcoming events found
                  </Text>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    {filter === "all" 
                      ? "Check back soon for new events or subscribe to our calendar for updates."
                      : `No upcoming ${eventTypes.find(t => t.key === filter)?.label.toLowerCase()} events. Try a different filter.`
                    }
                  </Text>
                  <Button
                    onClick={() => setFilter("all")}
                    variant="tertiary"
                    size="s"
                  >
                    Show All Events
                  </Button>
                </Column>
              </Card>
            ) : (
              <Column gap="m">
                {sortedEvents.map((event) => (
                  <Card key={event.id} padding="l" border="neutral-alpha-weak" className="feature-card" style={{ borderRadius: 20 }}>
                    <Column gap="m">
                      <Row gap="m" align="center" wrap>
                        <Column gap="4" style={{ flex: 1 }}>
                          <Row gap="s" align="center" wrap>
                            <Heading variant="heading-default-m">
                              {event.title}
                            </Heading>
                            <Badge
                              textVariant="label-default-xs"
                              border="neutral-alpha-medium"
                              onBackground="neutral-medium"
                            >
                              {eventTypes.find(t => t.key === event.type)?.label}
                            </Badge>
                            {event.recurring && (
                              <Badge
                                textVariant="label-default-xs"
                                border="neutral-alpha-medium"
                                onBackground="neutral-medium"
                              >
                                Recurring
                              </Badge>
                            )}
                          </Row>
                          <Text variant="body-default-s" onBackground="neutral-weak">
                            {formatDate(event.date)} • {event.time}
                          </Text>
                          <Text variant="body-default-s" onBackground="neutral-weak">
                            📍 {event.location}
                          </Text>
                        </Column>
                      </Row>
                      
                      <Text variant="body-default-m">
                        {event.description}
                      </Text>

                      <Row gap="s">
                        <Button
                          href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.date.replace(/-/g, '')}T${event.time.split(' ')[0].replace(':', '')}00/${event.date.replace(/-/g, '')}T${event.time.split(' - ')[1]?.replace(':', '') || '1800'}00&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`}
                          variant="tertiary"
                          size="s"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Add to Calendar
                        </Button>
                      </Row>
                    </Column>
                  </Card>
                ))}
              </Column>
            )}
          </Column>
        </Section>

        {/* Regular Meeting Schedule */}
        <Section padding="xl">
          <Column maxWidth="xl" gap="l" style={{ margin: "0 auto" }}>
            <Heading variant="heading-strong-l" className="nc-state-red">
              Regular Meetings
            </Heading>
            
            <div className="auto-grid" style={{ width: "100%" }}>
              <Card padding="l" className="grid-card feature-card" style={{ borderRadius: 20 }}>
                <Column gap="m">
                  <Heading variant="heading-default-m" className="ieee-blue">
                    Executive Committee
                  </Heading>
                  <Text variant="body-default-m">
                    <strong>When:</strong> Mondays at 3:00 PM
                  </Text>
                  <Text variant="body-default-m">
                    <strong>Where:</strong> Engineering Building II, Room 2311
                  </Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    Weekly meetings for chapter leadership to plan events and discuss chapter business.
                  </Text>
                </Column>
              </Card>

              <Card padding="l" className="grid-card feature-card" style={{ borderRadius: 20 }}>
                <Column gap="m">
                  <Heading variant="heading-default-m" className="nc-state-red">
                    General Meetings
                  </Heading>
                  <Text variant="body-default-m">
                    <strong>When:</strong> Monthly (check calendar for dates)
                  </Text>
                  <Text variant="body-default-m">
                    <strong>Where:</strong> Engineering Building II, Room 1021
                  </Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    Open to all members. Great opportunity to meet fellow engineers and learn about upcoming activities.
                  </Text>
                </Column>
              </Card>
            </div>
          </Column>
        </Section>

        {/* Call to Action */}
        <Section padding="xl" background="surface" border radius="l">
          <Column 
            maxWidth="l" 
            gap="m"
            align="center"
            style={{ textAlign: "center", margin: "0 auto" }}
          >
            <Heading variant="heading-strong-l">
              Don't Miss Out!
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-weak">
              Stay in the loop with all IEEE at NC State events. Subscribe to our calendar and follow us on social media for the latest updates.
            </Text>
            <Row gap="m" wrap>
              <Card padding="0" style={{ background: "transparent" }}>
                <a 
                  href="https://calendar.google.com/calendar/u/0?cid=bmNzdS5lZHVfbmdsNm40aXV2aHNkNWQzNzMwZDNkYjFvc0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <div className="modern-button" style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "12px 24px",
                    background: "linear-gradient(135deg, var(--accent-background-strong), var(--accent-background-medium))",
                    color: "white",
                    borderRadius: "12px",
                    fontWeight: 600
                  }}>
                    Subscribe to Calendar
                  </div>
                </a>
              </Card>
              <Card padding="0" style={{ background: "transparent" }}>
                <a 
                  href="/contact"
                  style={{ textDecoration: "none" }}
                >
                  <div className="modern-button" style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "12px 24px",
                    background: "transparent",
                    color: "var(--ieee-blue, #0066CC)",
                    border: "2px solid var(--ieee-blue, #0066CC)",
                    borderRadius: "12px",
                    fontWeight: 600
                  }}>
                    Contact Us
                  </div>
                </a>
              </Card>
            </Row>
          </Column>
        </Section>
      </Column>
    </Container>
  );
}

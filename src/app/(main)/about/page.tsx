import {
  Heading,
  Text,
  Column,
  Row,
  Card,
  Button,
  Avatar,
  Meta,
} from "@once-ui-system/core";
import Link from "next/link";
import { meta, baseURL } from "@/resources/once-ui.config";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

// Export metadata for SEO
export const metadata = {
  title: meta.about.title,
  description: meta.about.description,
  openGraph: {
    title: meta.about.title,
    description: meta.about.description,
    url: `${baseURL}${meta.about.path}`,
  },
};

// Student Leaders data
const officers = [
  {
    name: "Mario Rosas",
    position: "President",
    linkedin: "https://linkedin.com/in/mario-rosas", // TODO: Replace with actual LinkedIn
    image: "/images/officers/mario-rosas.jpg", // TODO: Add actual image
  },
  {
    name: "Soumyadeep Chatterjee", 
    position: "Treasurer",
    linkedin: "https://linkedin.com/in/soumyadeep-chatterjee", // TODO: Replace with actual LinkedIn
    image: "/images/officers/soumyadeep-chatterjee.jpg", // TODO: Add actual image
  },
  {
    name: "Jordan Boerger",
    position: "VP - Robotics", 
    linkedin: "https://linkedin.com/in/jordan-boerger", // TODO: Replace with actual LinkedIn
    image: "/images/officers/jordan-boerger.jpg", // TODO: Add actual image
  },
  {
    name: "Scott Burnett",
    position: "VP - Company Outreach",
    linkedin: "https://linkedin.com/in/scott-burnett", // TODO: Replace with actual LinkedIn
    image: "/images/officers/scott-burnett.jpg", // TODO: Add actual image
  },
  {
    name: "Jeffery Lima",
    position: "VP - Company Outreach",
    linkedin: "https://linkedin.com/in/jeffery-lima", // TODO: Replace with actual LinkedIn
    image: "/images/officers/jeffery-lima.jpg", // TODO: Add actual image
  },
  {
    name: "Grayson Morris",
    position: "Webmaster",
    linkedin: "https://linkedin.com/in/grayson-morris", // TODO: Replace with actual LinkedIn
    image: "/images/officers/grayson-morris.jpg", // TODO: Add actual image
  },
  {
    name: "Devin Roberts",
    position: "Secretary",
    linkedin: "https://linkedin.com/in/devin-roberts", // TODO: Replace with actual LinkedIn
    image: "/images/officers/devin-roberts.jpg", // TODO: Add actual image
  },
  {
    name: "Ter Chavez",
    position: "VP - Student Outreach",
    linkedin: "https://linkedin.com/in/ter-chavez", // TODO: Replace with actual LinkedIn
    image: "/images/officers/ter-chavez.jpg", // TODO: Add actual image
  },
];

export default function About() {
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
            About IEEE at NC State
          </Heading>
          <Text
            variant="heading-default-l"
            onBackground="neutral-weak"
            wrap="balance"
            align="center"
            style={{ maxWidth: "800px", margin: "0 auto" }}
          >
            NC State IEEE Student Chapter engages students and fosters connections to companies, providing access to industry knowledge through workshops, talks, and events. Connecting the student body to industry partners fosters innovation and benefits society.
          </Text>
        </Column>
        </Section>

        {/* History Section */}
        <Section padding="xl">
        <Column maxWidth="xl" gap="l" style={{ margin: "0 auto" }}>
          <Row gap="xl" wrap>
            <Column gap="m" style={{ flex: "1", minWidth: "300px" }}>
              <Heading variant="heading-strong-l" className="nc-state-red">
                Our History
              </Heading>
              <Text variant="body-default-l" marginBottom="m">
                The IEEE Student Branch at NC State has a rich history dating back to the early 1900s when electrical engineering students first began organizing professional activities on campus.
              </Text>
              <Text variant="body-default-l" marginBottom="m">
                In 1963, our chapter officially merged with the Institute of Electrical and Electronics Engineers (IEEE), becoming part of the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity.
              </Text>
              <Text variant="body-default-l">
                Since then, we have grown to become one of the most active student organizations in the College of Engineering, consistently participating in competitions, hosting industry events, and connecting students with career opportunities.
              </Text>
            </Column>

            <Column gap="m" style={{ flex: "1", minWidth: "300px" }}>
              <Card padding="l" background="surface" border="neutral-alpha-weak" className="feature-card" style={{ borderRadius: 20 }}>
                <Column gap="m">
                  <Heading variant="heading-default-m" className="ieee-blue">
                    IEEE Mission
                  </Heading>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    "To foster technological innovation and excellence for the benefit of humanity."
                  </Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    IEEE is the world's largest technical professional organization with over 400,000 members in more than 160 countries, dedicated to advancing technology for humanity's benefit.
                  </Text>
                </Column>
              </Card>
            </Column>
          </Row>
        </Column>
        </Section>

        {/* Student Leaders Section */}
        <Section padding="xl">
        <Column maxWidth="xl" gap="l" style={{ margin: "0 auto" }}>
          <Heading variant="heading-strong-l" align="center" className="nc-state-red">
            Student Leaders
          </Heading>
          <Text variant="body-default-l" align="center" onBackground="neutral-weak" marginBottom="l">
            Meet our dedicated student officers who lead the IEEE Student Branch at NC State
          </Text>

          <div className="auto-grid leaders-grid" style={{ width: "100%" }}>
            {officers.map((officer, index) => (
              <Card 
                key={index}
                padding="l" 
                className="grid-card student-leader-card feature-card"
                style={{ textAlign: "center", borderRadius: 20 }}
              >
                <Column gap="m" align="center">
                  {/* Officer Avatar - using placeholder for now */}
                  <div style={{
                    width: "80px",
                    height: "80px", 
                    borderRadius: "50%",
                    backgroundColor: "var(--neutral-alpha-weak)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "24px",
                    color: "var(--neutral-on-background-weak)"
                  }}>
                    {officer.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <Column gap="4" align="center">
                    <Heading variant="heading-default-m">
                      {officer.name}
                    </Heading>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {officer.position}
                    </Text>
                  </Column>
                  <Link 
                    href={officer.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <Button 
                      variant="tertiary" 
                      size="s"
                      prefixIcon="linkedinIn"
                    >
                      LinkedIn
                    </Button>
                  </Link>
                </Column>
              </Card>
            ))}
          </div>
        </Column>
        </Section>

        {/* What We Do Section */}
        <Section padding="xl">
        <Column maxWidth="xl" gap="l" style={{ margin: "0 auto" }}>
          <Heading variant="heading-strong-l" align="center" className="nc-state-red">
            What We Do
          </Heading>
          <div className="auto-grid" style={{ width: "100%" }}>
            <Card padding="l" className="grid-card feature-card" style={{ borderRadius: 20 }}>
              <Column gap="m">
                <div style={{ 
                  width: "50px", 
                  height: "50px", 
                  backgroundColor: "var(--ieee-blue, #0066CC)", 
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "20px"
                }}>
                  🔬
                </div>
                <Heading variant="heading-default-m" align="center">
                  Technical Workshops
                </Heading>
                <Text onBackground="neutral-weak">
                  Hands-on workshops covering cutting-edge technologies, from PCB design and 3D CAD to emerging fields in electrical and computer engineering.
                </Text>
              </Column>
            </Card>

            <Card padding="l" className="grid-card feature-card" style={{ borderRadius: 20 }}>
              <Column gap="m">
                <div style={{ 
                  width: "50px", 
                  height: "50px", 
                  backgroundColor: "var(--nc-state-red, #CC0000)", 
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "20px"
                }}>
                  🏢
                </div>
                <Heading variant="heading-default-m" align="center">
                  Industry Connections
                </Heading>
                <Text onBackground="neutral-weak">
                  Networking events and talks with industry professionals from leading companies, providing insights into career paths and emerging opportunities.
                </Text>
              </Column>
            </Card>

            <Card padding="l" className="grid-card feature-card" style={{ borderRadius: 20 }}>
              <Column gap="m">
                <div style={{ 
                  width: "50px", 
                  height: "50px", 
                  backgroundColor: "var(--ieee-blue, #0066CC)", 
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "20px"
                }}>
                  🏆
                </div>
                <Heading variant="heading-default-m" align="center">
                  Competitions
                </Heading>
                <Text onBackground="neutral-weak">
                  Participation in programming contests, hackathons, and technical competitions that challenge our members and showcase their skills.
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
            Join Our Community
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak">
            Whether you're interested in technical workshops, networking with industry professionals, or participating in competitions, there's a place for you in IEEE at NC State.
          </Text>
          <Row gap="m" wrap>
            <Button
              href="/contact"
              variant="primary"
              size="l"
              prefixIcon="envelope"
            >
              Get In Touch
            </Button>
            <Button
              href="/events"
              variant="secondary"
              size="l"
              prefixIcon="calendar"
            >
              View Events
            </Button>
          </Row>
        </Column>
        </Section>
      </Column>
    </Container>
  );
}
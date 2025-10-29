import {
  Heading,
  Text,
  Column,
  Row,
  Card,
} from "@once-ui-system/core";
import { Container } from "../components/Container";
import { Section } from "../components/Section";

const socialLinks = [
  {
    name: "Facebook",
    icon: "facebook",
    url: "https://www.facebook.com/ieeeNCState",
    description: "Follow us for event updates, photos, and community discussions."
  },
  {
    name: "Twitter",
    icon: "twitter", 
    url: "https://twitter.com/ieeeNCState",
    description: "Get real-time updates and engage with our community."
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    url: "https://www.linkedin.com/company/ieee-nc-state/",
    description: "Connect professionally and explore career opportunities."
  },
  {
    name: "Instagram",
    icon: "instagram",
    url: "https://www.instagram.com/ieee_ncstate/",
    description: "See behind-the-scenes content and event highlights."
  },
  {
    name: "GitHub",
    icon: "github",
    url: "https://github.com/ieee-ncstate",
    description: "Explore our open-source projects and code repositories."
  },
  {
    name: "YouTube",
    icon: "youtube",
    url: "https://www.youtube.com/c/IEEENCState",
    description: "Watch technical presentations and event recordings."
  },
];

function getSocialIcon(platform: string) {
  switch (platform) {
    case "facebook":
      return "📘";
    case "twitter":
      return "🐦";
    case "linkedin":
      return "💼";
    case "instagram":
      return "📸";
    case "github":
      return "👨‍💻";
    case "youtube":
      return "📺";
    default:
      return "🔗";
  }
}

function getSocialColor(platform: string) {
  switch (platform) {
    case "facebook":
      return "#1877F2";
    case "twitter":
      return "#1DA1F2";
    case "linkedin":
      return "#0A66C2";
    case "instagram":
      return "#E4405F";
    case "github":
      return "#181717";
    case "youtube":
      return "#FF0000";
    default:
      return "var(--ieee-blue, #0066CC)";
  }
}

export default function Contact() {
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
              Contact Us
            </Heading>
            <Text
              variant="heading-default-l"
              onBackground="neutral-weak"
              wrap="balance"
              align="center"
              style={{ maxWidth: "700px", margin: "0 auto" }}
            >
              Get in touch with the IEEE Student Branch at NC State. We're here to answer questions, share information, and welcome new members to our community.
            </Text>
          </Column>
        </Section>

        {/* Contact Information */}
        <Section padding="xl">
          <Column maxWidth="xl" gap="l" style={{ margin: "0 auto" }}>
            <Row gap="xl" wrap>
              {/* Primary Contact */}
              <Column gap="m" style={{ flex: "1", minWidth: "300px" }}>
                <Heading variant="heading-strong-l" className="nc-state-red">
                  Primary Contact
                </Heading>
                
                <Card padding="l" border="neutral-alpha-weak" className="feature-card" style={{ borderRadius: 20 }}>
                  <Column gap="m">
                    <Row gap="m" align="center">
                      <div style={{ 
                        width: "50px", 
                        height: "50px", 
                        backgroundColor: "var(--ieee-blue, #0066CC)", 
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "18px"
                      }}>
                        ✉️
                      </div>
                      <Column gap="4">
                        <Heading variant="heading-default-m">
                          Email
                        </Heading>
                        <Text variant="body-default-m">
                          ieeestudentbranch@ncsu.edu
                        </Text>
                      </Column>
                    </Row>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      For general inquiries, membership questions, event information, and partnership opportunities.
                    </Text>
                    
                    <a 
                      href="mailto:ieeestudentbranch@ncsu.edu"
                      style={{ textDecoration: "none" }}
                    >
                      <div
                        className="modern-button"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "10px 20px",
                          background: "linear-gradient(135deg, var(--brand-background-strong), var(--accent-background-strong))",
                          color: "white",
                          borderRadius: "12px",
                          fontSize: "14px",
                          fontWeight: 600,
                          cursor: "pointer"
                        }}
                      >
                        Send Email
                      </div>
                    </a>
                  </Column>
                </Card>
              </Column>

              {/* Mailing Address */}
              <Column gap="m" style={{ flex: "1", minWidth: "300px" }}>
                <Heading variant="heading-strong-l" className="nc-state-red">
                  Mailing Address
                </Heading>
                
                <Card padding="l" border="neutral-alpha-weak" className="feature-card" style={{ borderRadius: 20 }}>
                  <Column gap="m">
                    <Row gap="m" align="center">
                      <div style={{ 
                        width: "50px", 
                        height: "50px", 
                        backgroundColor: "var(--nc-state-red, #CC0000)", 
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                        fontSize: "18px"
                      }}>
                        📍
                      </div>
                      <Column gap="4">
                        <Heading variant="heading-default-m">
                          Office Location
                        </Heading>
                        <Text variant="body-default-m">
                          IEEE Student Branch<br/>
                          Campus Box 7911<br/>
                          Engineering Building II<br/>
                          NC State University<br/>
                          Raleigh, NC 27695-7911
                        </Text>
                      </Column>
                    </Row>
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      Located in the heart of NC State's Centennial Campus engineering district.
                    </Text>
                  </Column>
                </Card>
              </Column>
            </Row>
          </Column>
        </Section>

        {/* Social Media */}
        <Section padding="xl">
          <Column maxWidth="xl" gap="l" style={{ margin: "0 auto" }}>
            <Heading variant="heading-strong-l" className="nc-state-red">
              Connect With Us
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-weak" marginBottom="l">
              Follow us on social media to stay updated with events, activities, and opportunities.
            </Text>

            <div className="auto-grid" style={{ width: "100%" }}>
              {socialLinks.map((social, index) => (
                <Card 
                  key={index}
                  padding="l" 
                  className="grid-card feature-card"
                  border="neutral-alpha-weak"
                  style={{ borderRadius: 20 }}
                >
                  <Column gap="m">
                    <Row gap="m" align="center">
                      <div style={{
                        width: "50px",
                        height: "50px",
                        backgroundColor: getSocialColor(social.icon),
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "20px",
                        color: "white"
                      }}>
                        {getSocialIcon(social.icon)}
                      </div>
                      <Column gap="2">
                        <Heading variant="heading-default-m">
                          {social.name}
                        </Heading>
                      </Column>
                    </Row>
                    
                    <Text variant="body-default-s" onBackground="neutral-weak">
                      {social.description}
                    </Text>

                    <a 
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "10px 20px",
                          backgroundColor: "transparent",
                          color: getSocialColor(social.icon),
                          border: `2px solid ${getSocialColor(social.icon)}`,
                          borderRadius: "12px",
                          fontSize: "14px",
                          fontWeight: 600,
                          cursor: "pointer",
                          transition: "all 0.2s"
                        }}
                        className="contact-social-button modern-button"
                        data-color={getSocialColor(social.icon)}
                      >
                        Follow Us
                      </div>
                    </a>
                  </Column>
                </Card>
              ))}
            </div>
          </Column>
        </Section>

        {/* FAQ Section */}
        <Section padding="xl">
          <Column maxWidth="xl" gap="l" style={{ margin: "0 auto" }}>
            <Heading variant="heading-strong-l" className="nc-state-red">
              Frequently Asked Questions
            </Heading>

            <Column gap="s">
              <Card padding="l" className="feature-card" style={{ borderRadius: 20 }}>
                <Column gap="s">
                  <Heading variant="heading-default-m" className="ieee-blue">
                    How do I join IEEE?
                  </Heading>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    You can join IEEE at both the international level (ieee.org/membership) and locally through our NC State Student Branch. Contact us at ieeestudentbranch@ncsu.edu for local membership information.
                  </Text>
                </Column>
              </Card>

              <Card padding="l" className="feature-card" style={{ borderRadius: 20 }}>
                <Column gap="s">
                  <Heading variant="heading-default-m" className="ieee-blue">
                    When do you meet?
                  </Heading>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    Our Executive Committee meets every Monday at 3:00 PM in Engineering Building II, Room 2311. General meetings are held monthly. Check our events calendar for specific dates and times.
                  </Text>
                </Column>
              </Card>

              <Card padding="l" className="feature-card" style={{ borderRadius: 20 }}>
                <Column gap="s">
                  <Heading variant="heading-default-m" className="ieee-blue">
                    What majors can join?
                  </Heading>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    While IEEE focuses on electrical and computer engineering, we welcome students from all engineering and computer science disciplines who are interested in technology and professional development.
                  </Text>
                </Column>
              </Card>

              <Card padding="l" className="feature-card" style={{ borderRadius: 20 }}>
                <Column gap="s">
                  <Heading variant="heading-default-m" className="ieee-blue">
                    How can my company sponsor or partner with IEEE at NC State?
                  </Heading>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    We offer various sponsorship opportunities for companies interested in connecting with talented engineering students. Contact our VP of Company Outreach or email us for partnership information.
                  </Text>
                </Column>
              </Card>
            </Column>
          </Column>
        </Section>

        {/* Join IEEE */}
        <Section padding="xl" background="surface" border radius="l">
          <Column 
            maxWidth="l" 
            gap="m"
            align="center"
            style={{ textAlign: "center", margin: "0 auto" }}
          >
            <Heading variant="heading-strong-l">
              Ready to Join IEEE?
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-weak">
              Become part of the world's largest technical professional organization and connect with engineers who are advancing technology for humanity.
            </Text>
            <Row gap="m" wrap>
              <Card padding="0" style={{ background: "transparent" }}>
                <a 
                  href="https://ieee.org/membership"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <div className="modern-button" style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "12px 24px",
                    background: "linear-gradient(135deg, var(--brand-background-strong), var(--brand-background-medium))",
                    color: "white",
                    borderRadius: "12px",
                    fontWeight: 600
                  }}>
                    Join IEEE International
                  </div>
                </a>
              </Card>
              <Card padding="0" style={{ background: "transparent" }}>
                <a 
                  href="mailto:ieeestudentbranch@ncsu.edu?subject=Local%20IEEE%20Membership%20Inquiry"
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
                    Join Local Branch
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

import {
  Heading,
  Text,
  Column,
  Row,
  Card,
  Button,
} from "@once-ui-system/core";
import { Container } from "@/components/Container";

export default function Gallery() {
  return (
    <Container padding="l">
      <Column fillWidth padding="l" gap="xl">
        {/* Hero Section */}
        <Column 
          maxWidth="xl" 
          padding="xl" 
          gap="l" 
          align="center"
          style={{ textAlign: "center", margin: "0 auto" }}
        >
          <Heading variant="display-strong-xl" className="nc-state-red">
            Gallery
          </Heading>
          <Text
            variant="heading-default-l"
            onBackground="neutral-weak"
            wrap="balance"
            align="center"
            style={{ maxWidth: "700px", margin: "0 auto" }}
          >
            Capturing memories from our events, workshops, competitions, and community activities at IEEE NC State Student Branch.
          </Text>
        </Column>

        {/* Coming Soon Section */}
        <Column 
          maxWidth="l" 
          padding="xl" 
          background="surface"
          border="neutral-alpha-weak"
          radius="l"
          gap="l"
          align="center"
          style={{ textAlign: "center", margin: "0 auto" }}
        >
          <div style={{ 
            width: "120px", 
            height: "120px", 
            backgroundColor: "var(--ieee-blue, #0066CC)", 
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "48px",
            marginBottom: "16px"
          }}>
            📸
          </div>
          
          <Heading variant="heading-strong-l">
            Coming Soon!
          </Heading>
          
          <Text variant="body-default-l" onBackground="neutral-weak" style={{ maxWidth: "500px" }}>
            We're working on integrating our Google Photos gallery to showcase all the amazing moments from our IEEE events, workshops, and activities.
          </Text>

          <Text variant="body-default-m" onBackground="neutral-weak">
            In the meantime, check out our social media channels for the latest photos and updates from our events.
          </Text>
        </Column>

        {/* What to Expect */}
        <Column maxWidth="xl" gap="l" style={{ margin: "0 auto" }}>
          <Heading variant="heading-strong-l" className="nc-state-red">
            What You'll See
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" marginBottom="m">
            Once our gallery is live, you'll be able to browse photos from these activities:
          </Text>

          <div className="auto-grid" style={{ width: "100%" }}>
            <Card padding="l" className="grid-card">
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
                  🔬
                </div>
                <Heading variant="heading-default-m">
                  Technical Workshops
                </Heading>
                <Text onBackground="neutral-weak">
                  Behind-the-scenes moments from our hands-on workshops covering PCB design, 3D CAD, robotics, and other cutting-edge technologies.
                </Text>
              </Column>
            </Card>

            <Card padding="l" className="grid-card">
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
                  🏢
                </div>
                <Heading variant="heading-default-m">
                  Industry Events
                </Heading>
                <Text onBackground="neutral-weak">
                  Professional networking events, company presentations, and career fair moments with industry partners like Duke Energy and our sponsors.
                </Text>
              </Column>
            </Card>

            <Card padding="l" className="grid-card">
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
                  🏆
                </div>
                <Heading variant="heading-default-m">
                  Competitions
                </Heading>
                <Text onBackground="neutral-weak">
                  Action shots from programming contests, hackathons, design competitions, and our award-winning moments at IEEE SoutheastCon.
                </Text>
              </Column>
            </Card>

            <Card padding="l" className="grid-card">
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
                  🤝
                </div>
                <Heading variant="heading-default-m">
                  Community Events
                </Heading>
                <Text onBackground="neutral-weak">
                  General meetings, social gatherings, team building activities, and the vibrant community that makes IEEE at NC State special.
                </Text>
              </Column>
            </Card>

            <Card padding="l" className="grid-card">
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
                  🎓
                </div>
                <Heading variant="heading-default-m">
                  Awards & Recognition
                </Heading>
                <Text onBackground="neutral-weak">
                  Celebration moments from scholarship presentations, competition victories, and recognition of outstanding student achievements.
                </Text>
              </Column>
            </Card>

            <Card 
              padding="l" 
              style={{ minWidth: "280px", flex: 1 }}
            >
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
                  🛠️
                </div>
                <Heading variant="heading-default-m">
                  Project Sessions
                </Heading>
                <Text onBackground="neutral-weak">
                  Students collaborating on innovative projects, robotics builds, and hands-on learning experiences in our makerspace activities.
                </Text>
              </Column>
            </Card>
          </div>
        </Column>

        {/* Technical Implementation Note */}
        <Column maxWidth="xl" gap="l" style={{ margin: "0 auto" }}>
          <Card padding="l" background="surface" border="neutral-alpha-weak">
            <Column gap="m">
              <Row gap="m" align="center">
                <div style={{ 
                  width: "40px", 
                  height: "40px", 
                  backgroundColor: "var(--neutral-600)", 
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "16px"
                }}>
                  ⚙️
                </div>
                <Column gap="4">
                  <Heading variant="heading-default-m">
                    Google Photos Integration
                  </Heading>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    Technical Implementation Ready
                  </Text>
                </Column>
              </Row>
              <Text variant="body-default-m" onBackground="neutral-weak">
                Our website is architected to seamlessly integrate with Google Photos API for dynamic gallery updates. Once configured, photos will be automatically synced and organized by event categories, making it easy to browse our rich collection of IEEE memories.
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                This implementation will support responsive image loading, lazy loading for performance, and mobile-optimized viewing experiences.
              </Text>
            </Column>
          </Card>
        </Column>

        {/* Current Photo Sources */}
        <Column 
          maxWidth="l" 
          padding="xl" 
          background="surface"
          border="neutral-alpha-weak"
          radius="l"
          gap="m"
          align="center"
          style={{ textAlign: "center", margin: "0 auto" }}
        >
          <Heading variant="heading-strong-l">
            View Our Latest Photos
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak">
            While we prepare the integrated gallery, you can see our latest photos and event updates on social media.
          </Text>
          <Row gap="m" wrap>
            <div>
              <a 
                href="https://www.instagram.com/ieee_ncstate/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "12px 24px",
                    backgroundColor: "#E4405F",
                    color: "white",
                    borderRadius: "8px",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "opacity 0.2s"
                  }}
                  className="gallery-social-button"
                >
                  📸 View on Instagram
                </div>
              </a>
            </div>
            <div>
              <a 
                href="https://www.facebook.com/ieeeNCState"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "12px 24px",
                    backgroundColor: "#1877F2",
                    color: "white",
                    borderRadius: "8px",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "opacity 0.2s"
                  }}
                  className="gallery-social-button"
                >
                  📘 View on Facebook
                </div>
              </a>
            </div>
            <div>
              <a 
                href="/events"
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "12px 24px",
                    backgroundColor: "transparent",
                    color: "var(--ieee-blue, #0066CC)",
                    border: "2px solid var(--ieee-blue, #0066CC)",
                    borderRadius: "8px",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "all 0.2s"
                  }}
                  className="gallery-secondary-button"
                >
                  📅 View Upcoming Events
                </div>
              </a>
            </div>
          </Row>
        </Column>
      </Column>
    </Container>
  );
}
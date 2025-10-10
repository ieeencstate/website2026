import {
  Heading,
  Text,
  Column,
  Row,
  Card,
} from "@once-ui-system/core";
import { Container } from "@/components/Container";
import { Section } from "@/components/Section";

// Sponsors data from requirements
const sponsors = [
  {
    name: "Norfolk Southern",
    industry: "Transportation & Logistics",
    description: "Leading transportation company providing rail and logistics services across the eastern United States.",
    website: "https://norfolksouthern.com",
    logo: "/images/sponsors/norfolk-logo.png", // TODO: Add actual logo
    tier: "Gold",
  },
  {
    name: "International Paper",
    industry: "Forest Products & Packaging",
    description: "Global leader in packaging and pulp manufacturing, driving innovation in sustainable forest products.",
    website: "https://internationalpaper.com",
    logo: "/images/sponsors/international-paper-logo.png", // TODO: Add actual logo
    tier: "Gold",
  },
  {
    name: "Eastman",
    industry: "Advanced Materials & Chemicals",
    description: "Specialty materials company providing innovative solutions across diverse markets globally.",
    website: "https://eastman.com",
    logo: "/images/sponsors/eastman-logo.png", // TODO: Add actual logo
    tier: "Gold",
  },
  {
    name: "Garmin",
    industry: "Technology & Navigation",
    description: "Leading provider of GPS technology and wearable devices for automotive, aviation, marine, and fitness markets.",
    website: "https://garmin.com",
    logo: "/images/sponsors/garmin-logo.png", // TODO: Add actual logo
    tier: "Silver",
  },
  {
    name: "Citi LLC",
    industry: "Financial Services",
    description: "Global financial services company providing banking, investment, and risk management solutions.",
    website: "https://citi.com",
    logo: "/images/sponsors/citi-logo.png", // TODO: Add actual logo
    tier: "Silver",
  },
  {
    name: "Ciena",
    industry: "Network Technology",
    description: "Network strategy and technology company providing adaptive network solutions for telecommunications.",
    website: "https://ciena.com",
    logo: "/images/sponsors/ciena-logo.png", // TODO: Add actual logo
    tier: "Silver",
  },
];

function getSponsorTierColor(tier: string) {
  switch (tier) {
    case "Gold":
      return "#FFD700";
    case "Silver":
      return "#C0C0C0";
    case "Bronze":
      return "#CD7F32";
    default:
      return "var(--ieee-blue, #0066CC)";
  }
}

function getSponsorIcon(industry: string) {
  switch (industry) {
    case "Transportation & Logistics":
      return "🚛";
    case "Forest Products & Packaging":
      return "📦";
    case "Advanced Materials & Chemicals":
      return "⚗️";
    case "Technology & Navigation":
      return "🛰️";
    case "Financial Services":
      return "🏦";
    case "Network Technology":
      return "🌐";
    default:
      return "🏢";
  }
}

export default function Sponsors() {
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
              Our Sponsors
            </Heading>
            <Text
              variant="heading-default-l"
              onBackground="neutral-weak"
              wrap="balance"
              align="center"
              style={{ maxWidth: "700px", margin: "0 auto" }}
            >
              We're grateful for the support of industry leaders who share our commitment to advancing technology and fostering the next generation of engineers.
            </Text>
          </Column>
        </Section>

        {/* Sponsor Value Proposition */}
        <Section padding="xl">
          <Column maxWidth="xl" gap="l" style={{ margin: "0 auto" }}>
          <Heading variant="heading-strong-l" className="nc-state-red">
            Partnership Benefits
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
                  🎯
                </div>
                <Heading variant="heading-default-m">
                  Direct Access to Talent
                </Heading>
                <Text onBackground="neutral-weak">
                  Connect directly with top ECE students at NC State through networking events, career fairs, and technical presentations.
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
                  🤝
                </div>
                <Heading variant="heading-default-m">
                  Industry Collaboration
                </Heading>
                <Text onBackground="neutral-weak">
                  Partner with students on real-world projects, research initiatives, and innovation challenges that benefit both academia and industry.
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
                  📈
                </div>
                <Heading variant="heading-default-m">
                  Brand Visibility
                </Heading>
                <Text onBackground="neutral-weak">
                  Increase your company's visibility among engineering students, faculty, and the broader NC State engineering community.
                </Text>
              </Column>
            </Card>
          </div>
          </Column>
        </Section>

        {/* Current Sponsors */}
        <Section padding="xl">
          <Column maxWidth="xl" gap="l" style={{ margin: "0 auto" }}>
          <Heading variant="heading-strong-l" className="nc-state-red">
            Current Industry Partners
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" marginBottom="l">
            These leading companies support IEEE at NC State through sponsorship, internship opportunities, and collaborative projects.
          </Text>

          <Column gap="m">
            {sponsors.map((sponsor, index) => (
              <Card key={index} padding="l" border="neutral-alpha-weak" className="feature-card" style={{ borderRadius: 20 }}>
                <Row gap="l" wrap style={{ alignItems: "center" }}>
                  {/* Sponsor Logo/Icon */}
                  <div style={{ flex: "0 0 auto" }}>
                    <div style={{
                      width: "80px",
                      height: "80px", 
                      borderRadius: "12px",
                      backgroundColor: "var(--neutral-alpha-weak)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "32px",
                      border: `3px solid ${getSponsorTierColor(sponsor.tier)}`
                    }}>
                      {getSponsorIcon(sponsor.industry)}
                    </div>
                  </div>
                  
                  {/* Sponsor Details */}
                  <Column gap="s" style={{ flex: 1, minWidth: "250px" }}>
                    <Row gap="s" align="center" wrap>
                      <Heading variant="heading-default-l">
                        {sponsor.name}
                      </Heading>
                      <div style={{
                        padding: "4px 12px",
                        backgroundColor: getSponsorTierColor(sponsor.tier),
                        color: sponsor.tier === "Gold" ? "black" : "white",
                        borderRadius: "16px",
                        fontSize: "12px",
                        fontWeight: "bold"
                      }}>
                        {sponsor.tier} Sponsor
                      </div>
                    </Row>
                    
                    <Text variant="body-default-s" onBackground="neutral-weak" weight="strong">
                      {sponsor.industry}
                    </Text>
                    
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {sponsor.description}
                    </Text>

                    <Row gap="s" align="center">
                      <a 
                        href={sponsor.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none" }}
                      >
                        <div className="modern-button" style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "8px",
                          padding: "10px 20px",
                          background: "transparent",
                          color: "var(--ieee-blue, #0066CC)",
                          border: "2px solid var(--ieee-blue, #0066CC)",
                          borderRadius: "12px",
                          fontSize: "14px",
                          fontWeight: 600,
                        }}>
                          Visit Website
                        </div>
                      </a>
                    </Row>
                  </Column>
                </Row>
              </Card>
            ))}
          </Column>
          </Column>
        </Section>

        {/* Sponsorship Tiers */}
        <Column maxWidth="xl" gap="l" style={{ margin: "0 auto" }}>
          <Heading variant="heading-strong-l" className="nc-state-red">
            Sponsorship Opportunities
          </Heading>
          
          <div className="auto-grid" style={{ width: "100%" }}>
            <Card padding="l" className="grid-card" style={{ border: "2px solid #FFD700" }}>
              <Column gap="m">
                <Row gap="s" align="center">
                  <div style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#FFD700",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "black",
                    fontSize: "18px",
                    fontWeight: "bold"
                  }}>
                    🥇
                  </div>
                  <Heading variant="heading-default-m">
                    Gold Sponsorship
                  </Heading>
                </Row>
                
                <Text variant="body-default-m" onBackground="neutral-weak">
                  Premium partnership including:
                </Text>
                
                <Column gap="2">
                  <Text variant="body-default-s">• Logo placement on all materials</Text>
                  <Text variant="body-default-s">• Dedicated networking events</Text>
                  <Text variant="body-default-s">• Priority recruiting access</Text>
                  <Text variant="body-default-s">• Technical presentation opportunities</Text>
                  <Text variant="body-default-s">• Project collaboration support</Text>
                </Column>
              </Column>
            </Card>

            <Card padding="l" className="grid-card" style={{ border: "2px solid #C0C0C0" }}>
              <Column gap="m">
                <Row gap="s" align="center">
                  <div style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#C0C0C0",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "black",
                    fontSize: "18px",
                    fontWeight: "bold"
                  }}>
                    🥈
                  </div>
                  <Heading variant="heading-default-m">
                    Silver Sponsorship
                  </Heading>
                </Row>
                
                <Text variant="body-default-m" onBackground="neutral-weak">
                  Standard partnership including:
                </Text>
                
                <Column gap="2">
                  <Text variant="body-default-s">• Website logo placement</Text>
                  <Text variant="body-default-s">• Event participation</Text>
                  <Text variant="body-default-s">• Recruiting table access</Text>
                  <Text variant="body-default-s">• Newsletter mentions</Text>
                  <Text variant="body-default-s">• Student organization support</Text>
                </Column>
              </Column>
            </Card>

            <Card padding="l" className="grid-card" style={{ border: "2px solid #CD7F32" }}>
              <Column gap="m">
                <Row gap="s" align="center">
                  <div style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "#CD7F32",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "bold"
                  }}>
                    🥉
                  </div>
                  <Heading variant="heading-default-m">
                    Bronze Sponsorship
                  </Heading>
                </Row>
                
                <Text variant="body-default-m" onBackground="neutral-weak">
                  Supporting partnership including:
                </Text>
                
                <Column gap="2">
                  <Text variant="body-default-s">• Website recognition</Text>
                  <Text variant="body-default-s">• Event announcements</Text>
                  <Text variant="body-default-s">• General networking access</Text>
                  <Text variant="body-default-s">• Social media mentions</Text>
                  <Text variant="body-default-s">• Community engagement</Text>
                </Column>
              </Column>
            </Card>
          </div>
        </Column>

        {/* Call to Action */}
        <Section padding="xl" background="surface" border radius="l">
          <Column 
            maxWidth="l" 
            gap="m"
            align="center"
            style={{ textAlign: "center", margin: "0 auto" }}
          >
            <Heading variant="heading-strong-l">
              Partner With Us
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-weak">
              Join our community of industry partners and help shape the future of electrical and computer engineering at NC State University.
            </Text>
            <Row gap="m" wrap>
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
                    background: "linear-gradient(135deg, var(--brand-background-strong), var(--brand-background-medium))",
                    color: "white",
                    borderRadius: "12px",
                    fontWeight: 600
                  }}>
                    Become a Sponsor
                  </div>
                </a>
              </Card>
              <Card padding="0" style={{ background: "transparent" }}>
                <a 
                  href="/about" 
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
                    Learn About IEEE
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
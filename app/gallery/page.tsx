import { Container } from "../components/Container";
import { Section } from "../components/Section";
import React from 'react';

// Helper components to replace once-ui
const Heading = ({ variant, className, children, ...props }: any) => {
  const Tag = variant?.includes('display') ? 'h1' : variant?.includes('heading-strong') ? 'h2' : 'h3';
  const classes = variant?.includes('display-strong-xl') ? 'text-5xl font-bold' :
                  variant?.includes('heading-strong-l') ? 'text-3xl font-bold' :
                  variant?.includes('heading-default-m') ? 'text-xl font-semibold' :
                  variant?.includes('heading-default-s') ? 'text-lg font-semibold' : 'text-2xl font-semibold';
  return React.createElement(Tag, { className: `${classes} ${className || ''}`, ...props }, children);
};

const Text = ({ variant, className, children, style, marginBottom, weight, onBackground, ...props }: any) => {
  const classes = variant?.includes('heading-default-l') ? 'text-2xl' :
                  variant?.includes('body-default-l') ? 'text-lg' :
                  variant?.includes('body-default-m') ? 'text-base' :
                  variant?.includes('body-default-s') ? 'text-sm' :
                  variant?.includes('label-default-s') ? 'text-sm' : 'text-base';
  const mbClass = marginBottom === 'l' ? 'mb-6' : marginBottom === 'm' ? 'mb-4' : marginBottom === 's' ? 'mb-2' : '';
  const weightClass = weight === 'strong' ? 'font-bold' : '';
  return <p className={`${classes} ${mbClass} ${weightClass} ${className || ''}`} style={style} {...props}>{children}</p>;
};

const Column = ({ gap, align, children, style, className, fillWidth, maxWidth, padding, ...props }: any) => {
  const gapClasses = gap === 'xl' ? 'gap-8' : gap === 'l' ? 'gap-6' : gap === 'm' ? 'gap-4' : gap === 's' ? 'gap-2' : 'gap-4';
  const alignClasses = align === 'center' ? 'items-center' : '';
  const widthClass = fillWidth ? 'w-full' : '';
  const maxWidthClass = maxWidth === 'xl' ? 'max-w-4xl' : maxWidth === 'l' ? 'max-w-3xl' : maxWidth === 'm' ? 'max-w-2xl' : '';
  const paddingClass = padding === '0' ? 'p-0' : '';
  return <div className={`flex flex-col ${gapClasses} ${alignClasses} ${widthClass} ${maxWidthClass} ${paddingClass} ${className || ''}`} style={style} {...props}>{children}</div>;
};

const Row = ({ gap, align, wrap, children, style, className, ...props }: any) => {
  const gapClasses = gap === 'xl' ? 'gap-8' : gap === 'l' ? 'gap-6' : gap === 'm' ? 'gap-4' : gap === 's' ? 'gap-2' : 'gap-4';
  const alignClasses = align === 'center' ? 'items-center' : align === 'flex-start' ? 'items-start' : '';
  const wrapClass = wrap ? 'flex-wrap' : '';
  return <div className={`flex ${gapClasses} ${alignClasses} ${wrapClass} ${className || ''}`} style={style} {...props}>{children}</div>;
};

const Card = ({ padding, children, className, style, border, ...props }: any) => {
  const paddingClasses = padding === 'xl' ? 'p-12' : padding === 'l' ? 'p-8' : padding === 'm' ? 'p-6' : padding === 's' ? 'p-4' : padding === '0' ? 'p-0' : 'p-6';
  const borderClass = border ? 'border border-gray-200' : '';
  return <div className={`${paddingClasses} ${borderClass} ${className || ''}`} style={style} {...props}>{children}</div>;
};

export default function Gallery() {
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
        </Section>

        {/* Coming Soon Section */}
        <Section padding="xl" background="surface" border radius="l">
          <Column 
            maxWidth="l" 
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
        </Section>

        {/* What to Expect */}
        <Section padding="xl">
          <Column maxWidth="xl" gap="l" style={{ margin: "0 auto" }}>
            <Heading variant="heading-strong-l" className="nc-state-red">
              What You'll See
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-weak" marginBottom="m">
              Once our gallery is live, you'll be able to browse photos from these activities:
            </Text>

            <div className="auto-grid" style={{ width: "100%" }}>
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
              className="feature-card"
              style={{ minWidth: "280px", flex: 1, borderRadius: 20 }}
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
        </Section>

        {/* Technical Implementation Note */}
        <Section padding="xl">
          <Column maxWidth="xl" gap="l" style={{ margin: "0 auto" }}>
            <Card padding="l" background="surface" border="neutral-alpha-weak" className="feature-card" style={{ borderRadius: 20 }}>
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
        </Section>

        {/* Current Photo Sources */}
        <Section padding="xl" background="surface" border radius="l">
          <Column 
            maxWidth="l" 
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
              <Card padding="0" style={{ background: "transparent" }}>
                <a 
                  href="https://www.instagram.com/ieee_ncstate/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <div className="modern-button" style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "12px 24px",
                    background: "#E4405F",
                    color: "white",
                    borderRadius: "12px",
                    fontWeight: 600
                  }}>
                    📸 View on Instagram
                  </div>
                </a>
              </Card>
              <Card padding="0" style={{ background: "transparent" }}>
                <a 
                  href="https://www.facebook.com/ieeeNCState"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <div className="modern-button" style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "12px 24px",
                    background: "#1877F2",
                    color: "white",
                    borderRadius: "12px",
                    fontWeight: 600
                  }}>
                    📘 View on Facebook
                  </div>
                </a>
              </Card>
              <Card padding="0" style={{ background: "transparent" }}>
                <a 
                  href="/events"
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
                    📅 View Upcoming Events
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

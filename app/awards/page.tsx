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

const Text = ({ variant, className, children, style, marginBottom, weight, ...props }: any) => {
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

const Badge = ({ children, className, style, ...props }: any) => {
  return <span className={`inline-block px-2 py-1 text-xs font-semibold rounded ${className || ''}`} style={style} {...props}>{children}</span>;
};

// Awards data from the requirements
const awards = [
  {
    year: 2019,
    event: "IEEE SoutheastCon Website Competition",
    award: "3rd Place",
    description: "Our website showcased innovative design and comprehensive information about our student chapter.",
    category: "website",
  },
  {
    year: 2018,
    event: "IEEE SoutheastCon T-shirt Competition",
    award: "1st Place",
    description: "Creative design that captured the spirit of IEEE and NC State engineering excellence.",
    category: "design",
  },
  {
    year: 2018,
    event: "IEEE SoutheastCon Hackathon",
    award: "2nd Place",
    description: "Innovative solution developed during the intense 24-hour coding competition.",
    category: "programming",
  },
  {
    year: 2018,
    event: "IEEE SoutheastCon Networking Event",
    award: "3rd Place",
    description: "Outstanding participation and engagement in professional networking activities.",
    category: "networking",
  },
  {
    year: 2017,
    event: "IEEE SoutheastCon Student Website Competition",
    award: "1st Place",
    description: "Exceptional website design and functionality that set the standard for student branch websites.",
    category: "website",
  },
];

// Xtreme programming achievements
const xtremeAchievements = [
  {
    year: "Xtreme 6.0",
    achievement: "#1 in United States, #5 Worldwide",
    description: "Outstanding performance in the 24-hour programming competition, showcasing algorithmic problem-solving skills.",
  },
  {
    year: "Multiple Years",
    achievement: "Top 10 United States",
    description: "Consistent high performance in IEEEXtreme programming competitions over several years.",
  },
];

function getAwardIcon(category: string) {
  switch (category) {
    case "website":
      return "🌐";
    case "design":
      return "🎨";
    case "programming":
      return "💻";
    case "networking":
      return "🤝";
    default:
      return "🏆";
  }
}

function getAwardColor(award: string) {
  if (award.includes("1st")) return "var(--nc-state-red, #CC0000)";
  if (award.includes("2nd")) return "var(--ieee-blue, #0066CC)";
  if (award.includes("3rd")) return "var(--neutral-600)";
  return "var(--neutral-600)";
}

export default function Awards() {
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
            Awards & Achievements
          </Heading>
          <Text
            variant="heading-default-l"
            onBackground="neutral-weak"
            wrap="balance"
            align="center"
            style={{ maxWidth: "700px", margin: "0 auto" }}
          >
            Celebrating our accomplishments in competitions, design challenges, and programming contests that showcase the talent and dedication of IEEE at NC State members.
          </Text>
        </Column>
        </Section>

        {/* IEEE SoutheastCon Awards Timeline */}
        <Section padding="xl">
        <Column maxWidth="xl" gap="l" style={{ margin: "0 auto" }}>
          <Heading variant="heading-strong-l" className="nc-state-red">
            IEEE SoutheastCon Competition Awards
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" marginBottom="l">
            Our participation in IEEE SoutheastCon competitions has consistently demonstrated the excellence of our student chapter.
          </Text>

          <Column gap="m">
            {awards.sort((a, b) => b.year - a.year).map((award, index) => (
              <Card key={index} padding="l" border="neutral-alpha-weak" className="feature-card" style={{ borderRadius: 20 }}>
                <Row gap="l" style={{ alignItems: "flex-start" }}>
                  {/* Award Icon and Year */}
                  <Column gap="s" align="center" style={{ minWidth: "80px" }}>
                    <div style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: getAwardColor(award.award),
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "24px",
                      color: "white"
                    }}>
                      {getAwardIcon(award.category)}
                    </div>
                    <Text variant="label-default-s" weight="strong">
                      {award.year}
                    </Text>
                  </Column>

                  {/* Award Details */}
                  <Column gap="s" style={{ flex: 1 }}>
                    <Row gap="s" align="center" wrap>
                      <Heading variant="heading-default-m">
                        {award.event}
                      </Heading>
                      <Badge
                        textVariant="label-default-xs"
                        border="neutral-alpha-medium"
                        onBackground="neutral-medium"
                        style={{ 
                          backgroundColor: getAwardColor(award.award),
                          color: "white",
                          border: "none"
                        }}
                      >
                        {award.award}
                      </Badge>
                    </Row>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {award.description}
                    </Text>
                  </Column>
                </Row>
              </Card>
            ))}
          </Column>
        </Column>
        </Section>

        {/* IEEEXtreme Programming Achievements */}
        <Section padding="xl">
        <Column maxWidth="xl" gap="l" style={{ margin: "0 auto" }}>
          <Heading variant="heading-strong-l" className="ieee-blue">
            IEEEXtreme Programming Competition
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" marginBottom="l">
            IEEEXtreme is a global 24-hour programming competition where teams solve algorithmic problems. Our chapter has achieved remarkable success in this prestigious contest.
          </Text>

          <Row gap="m" wrap>
            {xtremeAchievements.map((achievement, index) => (
              <Card 
                key={index}
                padding="l" 
                style={{ minWidth: "300px", flex: 1, borderRadius: 20 }}
                border="neutral-alpha-weak"
                className="feature-card"
              >
                <Column gap="m">
                  <Row gap="m" align="center">
                    <div style={{
                      width: "50px",
                      height: "50px",
                      backgroundColor: "var(--ieee-blue, #0066CC)",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                      color: "white"
                    }}>
                      🚀
                    </div>
                    <Column gap="2">
                      <Text variant="label-default-s" weight="strong" className="ieee-blue">
                        {achievement.year}
                      </Text>
                      <Heading variant="heading-default-m">
                        {achievement.achievement}
                      </Heading>
                    </Column>
                  </Row>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    {achievement.description}
                  </Text>
                </Column>
              </Card>
            ))}
          </Row>
        </Column>
        </Section>

        {/* Competition Categories */}
        <Section padding="xl">
        <Column maxWidth="xl" gap="l" style={{ margin: "0 auto" }}>
          <Heading variant="heading-strong-l" className="nc-state-red">
            Competition Categories
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak" marginBottom="l">
            Our diverse achievements span multiple areas of engineering and technology.
          </Text>

          <Row gap="m" wrap>
            <Card 
              padding="l" 
              style={{ minWidth: "250px", flex: 1, borderRadius: 20 }}
              className="feature-card"
            >
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
                  🌐
                </div>
                <Heading variant="heading-default-m">
                  Website Design
                </Heading>
                <Text onBackground="neutral-weak">
                  Creating innovative, user-friendly websites that effectively communicate our chapter&apos;s mission and activities.
                </Text>
                <Badge
                  textVariant="label-default-xs"
                  border="neutral-alpha-medium"
                  onBackground="neutral-medium"
                >
                  1st & 3rd Place
                </Badge>
              </Column>
            </Card>

            <Card 
              padding="l" 
              style={{ minWidth: "250px", flex: 1, borderRadius: 20 }}
              className="feature-card"
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
                  💻
                </div>
                <Heading variant="heading-default-m">
                  Programming
                </Heading>
                <Text onBackground="neutral-weak">
                  Algorithmic problem-solving and software development in competitive programming environments.
                </Text>
                <Badge
                  textVariant="label-default-xs"
                  border="neutral-alpha-medium"
                  onBackground="neutral-medium"
                >
                  Top 10 US Consistently
                </Badge>
              </Column>
            </Card>

            <Card 
              padding="l" 
              style={{ minWidth: "250px", flex: 1, borderRadius: 20 }}
              className="feature-card"
            >
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
                  🎨
                </div>
                <Heading variant="heading-default-m">
                  Creative Design
                </Heading>
                <Text onBackground="neutral-weak">
                  Visual design and branding that captures the essence of engineering innovation and IEEE values.
                </Text>
                <Badge
                  textVariant="label-default-xs"
                  border="neutral-alpha-medium"
                  onBackground="neutral-medium"
                >
                  1st Place T-shirt
                </Badge>
              </Column>
            </Card>

            <Card 
              padding="l" 
              style={{ minWidth: "250px", flex: 1, borderRadius: 20 }}
              className="feature-card"
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
                  🤝
                </div>
                <Heading variant="heading-default-m">
                  Professional Networking
                </Heading>
                <Text onBackground="neutral-weak">
                  Building meaningful connections with industry professionals and fellow engineers.
                </Text>
                <Badge
                  textVariant="label-default-xs"
                  border="neutral-alpha-medium"
                  onBackground="neutral-medium"
                >
                  3rd Place
                </Badge>
              </Column>
            </Card>
          </Row>
        </Column>
        </Section>

        {/* Call to Action */}
        <Section padding="xl" background="surface" border={true} radius="l">
        <Column 
          maxWidth="l" 
          gap="m"
          align="center"
          style={{ textAlign: "center", margin: "0 auto" }}
        >
          <Heading variant="heading-strong-l">
            Be Part of Our Success Story
          </Heading>
          <Text variant="body-default-l" onBackground="neutral-weak">
            Join IEEE at NC State and contribute to our legacy of excellence in competitions, innovation, and professional development.
          </Text>
          <Row gap="m" wrap>
            <Card padding="0" style={{ background: "transparent" }}>
              <a href="/about" style={{ textDecoration: "none" }}>
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
                  Learn About Us
                </div>
              </a>
            </Card>
            <Card padding="0" style={{ background: "transparent" }}>
              <a href="/events" style={{ textDecoration: "none" }}>
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
                  Join Our Events
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

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

const Badge = ({ children, className, style, ...props }: any) => {
  return <span className={`inline-block px-2 py-1 text-xs font-semibold rounded ${className || ''}`} style={style} {...props}>{children}</span>;
};

export default function Scholarship() {
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
              Dr. Stancil/IEEE Scholarship
            </Heading>
            <Text
              variant="heading-default-l"
              onBackground="neutral-weak"
              wrap="balance"
              align="center"
              style={{ maxWidth: "700px", margin: "0 auto" }}
            >
              Recognizing and supporting exceptional ECE students who demonstrate academic excellence, leadership, and commitment to advancing technology for humanity.
            </Text>
          </Column>
        </Section>

        {/* Scholarship Overview */}
        <Section padding="xl">
          <Column maxWidth="xl" gap="l" style={{ margin: "0 auto" }}>
          <Row gap="xl" wrap>
            <Column gap="m" style={{ flex: "1", minWidth: "300px" }}>
              <Heading variant="heading-strong-l" className="nc-state-red">
                About the Scholarship
              </Heading>
              <Text variant="body-default-l" marginBottom="m">
                The annual Dr. Stancil/IEEE Scholarship is a prestigious award that honors outstanding students in the Department of Electrical and Computer Engineering at NC State University.
              </Text>
              <Text variant="body-default-l" marginBottom="m">
                This scholarship recognizes students who not only excel academically but also demonstrate leadership qualities, innovative thinking, and a commitment to making a positive impact in their field and community.
              </Text>
              <Text variant="body-default-l">
                Named in honor of Dr. Stancil's contributions to electrical engineering education and research, this scholarship continues his legacy of fostering the next generation of engineers.
              </Text>
            </Column>

            <Column gap="m" style={{ flex: "1", minWidth: "300px" }}>
              <Card padding="l" background="surface" border="neutral-alpha-weak" className="feature-card" style={{ borderRadius: 20 }}>
                <Column gap="m">
                  <div style={{ 
                    width: "60px", 
                    height: "60px", 
                    backgroundColor: "var(--ieee-blue, #0066CC)", 
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: "24px"
                  }}>
                    🎓
                  </div>
                  <Heading variant="heading-default-m" className="ieee-blue">
                    Scholarship Impact
                  </Heading>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    This scholarship provides financial support to help deserving students focus on their studies and research while reducing the burden of educational expenses.
                  </Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    Recipients join a distinguished group of scholars who represent the future of electrical and computer engineering.
                  </Text>
                </Column>
              </Card>
            </Column>
          </Row>
          </Column>
        </Section>

        {/* Eligibility Criteria */}
        <Section padding="xl">
          <Column maxWidth="xl" gap="l" style={{ margin: "0 auto" }}>
          <Heading variant="heading-strong-l" className="nc-state-red">
            Eligibility Criteria
          </Heading>
          
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
                  fontSize: "18px"
                }}>
                  📚
                </div>
                <Heading variant="heading-default-m">
                  Academic Excellence
                </Heading>
                <Text onBackground="neutral-weak">
                  Demonstrated outstanding academic performance in ECE coursework with a strong GPA and commitment to scholarly achievement.
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
                  fontSize: "18px"
                }}>
                  👥
                </div>
                <Heading variant="heading-default-m">
                  Leadership & Impact
                </Heading>
                <Text onBackground="neutral-weak">
                  Evidence of leadership in academic, professional, or community activities that demonstrate positive impact and influence.
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
                  fontSize: "18px"
                }}>
                  ⚡
                </div>
                <Heading variant="heading-default-m">
                  ECE Enrollment
                </Heading>
                <Text onBackground="neutral-weak">
                  Current enrollment in the Department of Electrical and Computer Engineering at NC State University.
                </Text>
              </Column>
            </Card>
          </div>

          {/* Important Note */}
          <Card padding="l" background="surface" border="neutral-alpha-weak" className="feature-card" style={{ borderRadius: 20 }}>
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
                ℹ️
              </div>
              <Column gap="4">
                <Heading variant="heading-default-s">
                  Important Eligibility Note
                </Heading>
                <Text variant="body-default-m" onBackground="neutral-weak">
                  Current IEEE Student Branch leadership members are excluded from consideration to ensure the scholarship recognizes a broader range of impactful students within the ECE community.
                </Text>
              </Column>
            </Row>
          </Card>
          </Column>
        </Section>

        {/* Recent Recipient */}
        <Section padding="xl">
          <Column maxWidth="xl" gap="l" style={{ margin: "0 auto" }}>
          <Heading variant="heading-strong-l" className="nc-state-red">
            Recent Recipient
          </Heading>

          <Card padding="xl" background="surface" border="neutral-alpha-weak" className="feature-card" style={{ borderRadius: 20 }}>
            <Row gap="l" wrap style={{ alignItems: "center" }}>
              <div style={{ flex: "0 0 auto" }}>
                {/* Recipient Avatar - using placeholder */}
                <div style={{
                  width: "120px",
                  height: "120px", 
                  borderRadius: "50%",
                  backgroundColor: "var(--ieee-blue, #0066CC)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "36px",
                  color: "white"
                }}>
                  ST
                </div>
              </div>
              
              <Column gap="m" style={{ flex: 1 }}>
                <Row gap="s" align="center" wrap>
                  <Heading variant="heading-strong-l">
                    Sara Thornton
                  </Heading>
                  <Badge
                    textVariant="label-default-xs"
                    border="neutral-alpha-medium"
                    onBackground="neutral-medium"
                    style={{ 
                      backgroundColor: "var(--nc-state-red, #CC0000)",
                      color: "white",
                      border: "none"
                    }}
                  >
                    Recent Recipient
                  </Badge>
                </Row>
                
                <Text variant="body-default-l" onBackground="neutral-weak">
                  Sara Thornton exemplifies the qualities we seek in scholarship recipients. Her outstanding academic performance, combined with her leadership in research projects and community service, made her a standout candidate for the Dr. Stancil/IEEE Scholarship.
                </Text>
                
                <Text variant="body-default-m" onBackground="neutral-weak">
                  Sara's work in sustainable energy systems and her commitment to mentoring younger students demonstrate the kind of impactful leadership this scholarship aims to recognize and support.
                </Text>
              </Column>
            </Row>
          </Card>
          </Column>
        </Section>

        {/* Application Process */}
        <Section padding="xl">
          <Column maxWidth="xl" gap="l" style={{ margin: "0 auto" }}>
          <Heading variant="heading-strong-l" className="nc-state-red">
            Application Process
          </Heading>

          <Column gap="s">
            <Card padding="l" className="feature-card" style={{ borderRadius: 20 }}>
              <Row gap="m" align="center">
                <div style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "var(--ieee-blue, #0066CC)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "14px",
                  fontWeight: "bold"
                }}>
                  1
                </div>
                <Column gap="2">
                  <Heading variant="heading-default-s">
                    Application Submission
                  </Heading>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    Submit your application including academic transcripts, personal statement, and letters of recommendation.
                  </Text>
                </Column>
              </Row>
            </Card>

            <Card padding="l" className="feature-card" style={{ borderRadius: 20 }}>
              <Row gap="m" align="center">
                <div style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "var(--ieee-blue, #0066CC)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "14px",
                  fontWeight: "bold"
                }}>
                  2
                </div>
                <Column gap="2">
                  <Heading variant="heading-default-s">
                    Review Process
                  </Heading>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    Applications are reviewed by a committee of faculty and IEEE members based on academic merit, leadership, and impact.
                  </Text>
                </Column>
              </Row>
            </Card>

            <Card padding="l" className="feature-card" style={{ borderRadius: 20 }}>
              <Row gap="m" align="center">
                <div style={{
                  width: "30px",
                  height: "30px",
                  backgroundColor: "var(--ieee-blue, #0066CC)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "14px",
                  fontWeight: "bold"
                }}>
                  3
                </div>
                <Column gap="2">
                  <Heading variant="heading-default-s">
                    Selection & Award
                  </Heading>
                  <Text variant="body-default-m" onBackground="neutral-weak">
                    The selected recipient is announced and recognized at an IEEE event, with the scholarship award presented.
                  </Text>
                </Column>
              </Row>
            </Card>
          </Column>
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
              Apply for the Scholarship
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-weak">
              If you're an ECE student who demonstrates academic excellence and leadership impact, we encourage you to apply for this prestigious scholarship.
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
                    Contact for Application Info
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

"use client";

import {
  Heading,
  Text,
  Button,
  Column,
  Row,
  Card,
  Flex,
  Icon,
} from "@once-ui-system/core";
import Link from "next/link";
import Image from "next/image";
import { Container } from "./components/Container";

export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      width: "100%"
    }}>
      {/* Main content */}
      <Column fillWidth padding="0" gap="0" style={{ width: "100%", maxWidth: "1920px" }}>
      {/* Modern Hero Section with Gradient Background */}
      <Column 
        fillWidth
        padding="xl" 
        gap="xl" 
        align="center"
        className="hero-section"
        style={{ 
          textAlign: "center",
          minHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          background: "linear-gradient(135deg, var(--brand-alpha-weak) 0%, var(--accent-alpha-weak) 50%, var(--surface) 100%)",
          overflow: "hidden"
        }}
      >
        {/* Animated Background Elements */}
        <div className="hero-decoration" style={{
          position: "absolute",
          top: "10%",
          right: "10%",
          width: "200px",
          height: "200px",
          background: "linear-gradient(45deg, var(--accent-alpha-weak), transparent)",
          borderRadius: "50%",
          opacity: 0.3,
          animation: "float 6s ease-in-out infinite"
        }}></div>
        <div className="hero-decoration" style={{
          position: "absolute",
          bottom: "15%",
          left: "5%",
          width: "150px",
          height: "150px",
          background: "linear-gradient(45deg, var(--brand-alpha-weak), transparent)",
          borderRadius: "50%",
          opacity: 0.2,
          animation: "float 8s ease-in-out infinite reverse"
        }}></div>
  <Container padding="0">
  <Column gap="xl" style={{ zIndex: 1, maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          {/* Wordmark on larger screens; compact icon on small screens */}
          <Image
            src="/images/textlogo.png"
            alt="IEEE at NC State"
            width={280}
            height={56}
            priority
            className="brand-wordmark"
            style={{ display: "block", margin: "0 auto", height: 40, width: "auto" }}
          />
          <Image
            src="/images/logo.png"
            alt="IEEE at NC State icon"
            width={64}
            height={64}
            priority
            className="brand-icon"
            style={{ display: "block", margin: "0 auto", borderRadius: 12 }}
          />
          <Column gap="m">
            <Heading variant="display-strong-xl" className="gradient-text" style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              lineHeight: "1.1",
              marginBottom: "0.5rem"
            }}>
              IEEE at NC State
            </Heading>
            <Text variant="heading-default-l" style={{
              background: "linear-gradient(135deg, var(--accent-on-background-strong), var(--brand-on-background-strong))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontSize: "1.5rem",
              fontWeight: "600"
            }}>
              Student Branch • Innovation • Excellence
            </Text>
          </Column>
          <Text
            variant="heading-default-m"
            onBackground="neutral-medium"
            wrap="balance"
            style={{ 
              maxWidth: "700px",
              fontSize: "1.25rem",
              lineHeight: "1.6",
              margin: "0 auto",
              textAlign: "center"
            }}
          >
            Connecting students to industry, fostering innovation through cutting-edge workshops, networking events, and technical excellence. Join the world's largest technical professional organization.
          </Text>
          <Row gap="l" wrap style={{ justifyContent: "center", marginTop: "2rem" }}>
            <Button
              href="/about"
              variant="primary"
              size="l"
              suffixIcon="chevronRight"
              className="modern-button hero-cta"
              style={{
                background: "linear-gradient(135deg, var(--brand-background-strong), var(--brand-background-medium))",
                border: "none",
                padding: "16px 32px",
                fontSize: "1.1rem",
                borderRadius: "16px",
                boxShadow: "0 8px 24px rgba(204, 0, 0, 0.3)"
              }}
            >
              Discover Our Impact
            </Button>
            <Button
              href="/events"
              variant="secondary"
              size="l"
              prefixIcon="calendar"
              className="modern-button"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                padding: "16px 32px",
                fontSize: "1.1rem",
                borderRadius: "16px"
              }}
            >
              Upcoming Events
            </Button>
            <Button
              href="https://ieee.org/membership"
              variant="tertiary"
              size="l"
              target="_blank"
              rel="noopener noreferrer"
              className="modern-button"
              style={{
                background: "transparent",
                border: "2px solid var(--accent-alpha-medium)",
                color: "var(--accent-on-background-strong)",
                padding: "16px 32px",
                fontSize: "1.1rem",
                borderRadius: "16px"
              }}
            >
              Join IEEE
            </Button>
          </Row>
        </Column>
        </Container>
      </Column>
      {/* Modern Features Section */}
      <Column 
        fillWidth 
        padding="xl" 
        gap="xl" 
        style={{ 
          background: "linear-gradient(180deg, transparent 0%, var(--neutral-alpha-weak) 100%)",
          marginTop: "4rem"
        }}
      >
        <Container padding="0">
        <Column gap="xl" style={{ margin: "0 auto", textAlign: "center" }}>
          <Column gap="m" align="center">
            <Text variant="label-default-m" style={{ 
              color: "var(--accent-on-background-strong)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontWeight: "600"
            }}>
              What We Offer
            </Text>
            <Heading variant="display-default-l" align="center" className="gradient-text">
              Excellence in Engineering
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-medium" style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
              Join a community of innovators, researchers, and future leaders in electrical and computer engineering.
            </Text>
          </Column>
          <div className="auto-grid features-grid" style={{ width: "100%" }}>
            <Card 
              padding="xl" 
              className="feature-card"
              style={{ 
                width: "100%",
                textAlign: "center",
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(15px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "24px"
              }}
            >
              <Column gap="l" align="center">
                <div style={{ 
                  width: "80px", 
                  height: "80px", 
                  background: "linear-gradient(135deg, var(--accent-background-strong), var(--accent-background-medium))", 
                  borderRadius: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "32px",
                  boxShadow: "0 8px 24px rgba(0, 102, 204, 0.3)"
                }}>
                  {/* Icon here */}💡
                </div>
                <Column gap="m">
                  <Heading variant="heading-strong-l" className="gradient-text">
                    Technical Excellence
                  </Heading>
                  <Text onBackground="neutral-medium" wrap="balance" style={{ lineHeight: "1.6" }}>
                    Cutting-edge workshops, hackathons, and hands-on projects that push the boundaries of technology and innovation.
                  </Text>
                </Column>
                <Link href="/events" style={{ textDecoration: "none" }}>
                  <Button 
                    variant="secondary" 
                    size="m"
                    className="modern-button"
                    style={{
                      borderRadius: "12px",
                      background: "linear-gradient(135deg, var(--accent-alpha-weak), var(--accent-alpha-medium))",
                      border: "1px solid var(--accent-alpha-medium)"
                    }}
                  >
                    Explore Workshops
                  </Button>
                </Link>
              </Column>
            </Card>
            <Card 
              padding="xl" 
              className="feature-card"
              style={{ 
                width: "100%",
                textAlign: "center",
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(15px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "24px"
              }}
            >
              <Column gap="l" align="center">
                <div style={{ 
                  width: "80px", 
                  height: "80px", 
                  background: "linear-gradient(135deg, var(--brand-background-strong), var(--brand-background-medium))", 
                  borderRadius: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "32px",
                  boxShadow: "0 8px 24px rgba(204, 0, 0, 0.3)"
                }}>
                  {/* Icon here */}🏆
                </div>
                <Column gap="m">
                  <Heading variant="heading-strong-l" className="gradient-text">
                    Award-Winning Team
                  </Heading>
                  <Text onBackground="neutral-medium" wrap="balance" style={{ lineHeight: "1.6" }}>
                    Nationally recognized for our achievements in programming competitions, website contests, and technical innovation.
                  </Text>
                </Column>
                <Link href="/awards" style={{ textDecoration: "none" }}>
                  <Button 
                    variant="secondary" 
                    size="m"
                    className="modern-button"
                    style={{
                      borderRadius: "12px",
                      background: "linear-gradient(135deg, var(--brand-alpha-weak), var(--brand-alpha-medium))",
                      border: "1px solid var(--brand-alpha-medium)"
                    }}
                  >
                    View Achievements
                  </Button>
                </Link>
              </Column>
            </Card>
            <Card 
              padding="xl" 
              className="feature-card"
              style={{ 
                width: "100%",
                textAlign: "center",
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(15px)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "24px"
              }}
            >
              <Column gap="l" align="center">
                <div style={{ 
                  width: "80px", 
                  height: "80px", 
                  background: "linear-gradient(135deg, #FFD700, #FFA500)", 
                  borderRadius: "20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "32px",
                  boxShadow: "0 8px 24px rgba(255, 165, 0, 0.3)"
                }}>
                  {/* Icon here */}🎓
                </div>
                <Column gap="m">
                  <Heading variant="heading-strong-l" className="gradient-text">
                    Scholarship Excellence
                  </Heading>
                  <Text onBackground="neutral-medium" wrap="balance" style={{ lineHeight: "1.6" }}>
                    Supporting outstanding ECE students through the prestigious Dr. Stancil/IEEE Scholarship program.
                  </Text>
                </Column>
                <Link href="/scholarship" style={{ textDecoration: "none" }}>
                  <Button 
                    variant="secondary" 
                    size="m"
                    className="modern-button"
                    style={{
                      borderRadius: "12px",
                      background: "linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 165, 0, 0.3))",
                      border: "1px solid rgba(255, 165, 0, 0.5)"
                    }}
                  >
                    Apply Now
                  </Button>
                </Link>
              </Column>
            </Card>
          </div>
        </Column>
        </Container>
      </Column>
      {/* Modern Call to Action Section */}
      <Column 
        fillWidth
        padding="xl" 
        gap="xl"
        align="center"
        style={{ 
          textAlign: "center",
          background: "linear-gradient(135deg, var(--brand-alpha-weak), var(--accent-alpha-weak))",
          marginTop: "4rem",
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* Background decoration */}
        <div style={{
          position: "absolute",
          top: "-50%",
          right: "-10%",
          width: "300px",
          height: "300px",
          background: "radial-gradient(circle, var(--accent-alpha-weak) 0%, transparent 70%)",
          borderRadius: "50%",
          opacity: 0.3
        }}></div>
        <Container padding="0">
        <Column gap="xl" style={{ zIndex: 1, maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
          <Column gap="m">
            <Text variant="label-default-m" style={{ 
              color: "var(--accent-on-background-strong)",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              fontWeight: "600"
            }}>
              Join the Innovation
            </Text>
            <Heading variant="display-default-l" className="gradient-text">
              Ready to Shape the Future?
            </Heading>
            <Text variant="body-default-l" onBackground="neutral-medium" style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
              Connect with fellow engineers, industry leaders, and cutting-edge technology. 
              Your journey in electrical and computer engineering starts here.
            </Text>
          </Column>
          <Row gap="l" wrap style={{ justifyContent: "center" }}>
            <Button
              href="/contact"
              variant="primary"
              size="l"
              prefixIcon="mail"
              className="modern-button"
              style={{
                background: "linear-gradient(135deg, var(--brand-background-strong), var(--brand-background-medium))",
                border: "none",
                padding: "20px 40px",
                fontSize: "1.1rem",
                borderRadius: "16px",
                boxShadow: "0 8px 24px rgba(204, 0, 0, 0.3)"
              }}
            >
              Get In Touch
            </Button>
            <Button
              href="https://ieee.org/membership"
              variant="secondary"
              size="l"
              prefixIcon="user"
              target="_blank"
              rel="noopener noreferrer"
              className="modern-button"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                padding: "20px 40px",
                fontSize: "1.1rem",
                borderRadius: "16px"
              }}
            >
              Join IEEE Global
            </Button>
          </Row>
        </Column>
        </Container>
      </Column>
      </Column>
    </div>
  );
}

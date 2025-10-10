"use client";

import {
  Flex,
  Text,
  Column,
  Row,
  Button,
} from "@once-ui-system/core";
import Link from "next/link";
import Image from "next/image";
import { social } from "@/resources/once-ui.config";
import { Container } from "./Container";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/events", label: "Calendar" },
  { href: "/awards", label: "Awards" },
  { href: "/scholarship", label: "Scholarship" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/contact", label: "Contact" },
];

const quickLinks = [
  { href: "https://ieee.org/membership", label: "Join IEEE" },
  { href: "https://ieee.org", label: "IEEE.org" },
  { href: "https://ncsu.edu", label: "NC State" },
  { href: "https://ece.ncsu.edu", label: "ECE Department" },
];

function getSocialIcon(platform: string) {
  switch (platform) {
    case "facebook":
      return "\uD83D\uDCD8";
    case "twitter":
      return "\uD83D\uDC26";
    case "linkedin":
      return "\uD83D\uDCBC";
    case "instagram":
      return "\uD83D\uDCF8";
    case "github":
      return "\uD83D\uDC68\u200D\uD83D\uDCBB";
    case "youtube":
      return "\uD83D\uDCFA";
    default:
      return "\uD83D\uDD17";
  }
}

export function Footer() {
  return (
    <Flex
      as="footer"
      background="surface"
      border="neutral-alpha-weak"
      borderStyle="solid"
      fillWidth
      padding="0"
      style={{ borderTop: "1px solid var(--neutral-alpha-weak)", marginTop: "4rem" }}
    >
      <Container padding="l">
        <Column gap="xl">
          {/* Main Footer Content */}
          <Row gap="xl" wrap>
            {/* Branding & Description */}
            <Column gap="m" style={{ flex: "1", minWidth: "280px" }}>
              <Row gap="m" align="center">
                <Image src="/images/textlogo.png" alt="IEEE at NC State" width={180} height={36} className="brand-wordmark" style={{ height: 24, width: "auto" }} />
                <Image src="/images/logo.png" alt="IEEE at NC State icon" width={28} height={28} className="brand-icon" style={{ borderRadius: 6 }} />
              </Row>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Engaging students and fostering connections to companies, providing access to industry knowledge through workshops, talks, and events.
              </Text>
              <Text variant="body-default-xs" onBackground="neutral-weak">
                Connecting the student body to industry partners fosters innovation and benefits society.
              </Text>
            </Column>

            {/* Navigation Links */}
            <Column gap="m" style={{ flex: "0 0 150px" }}>
              <Text variant="label-default-s" weight="strong" className="nc-state-red">
                Navigation
              </Text>
              <Column gap="2">
                {footerLinks.map((link) => (
                  <Link key={link.href} href={link.href} style={{ textDecoration: "none" }}>
                    <Text
                      variant="body-default-xs"
                      onBackground="neutral-weak"
                      className="footer-nav-link"
                      style={{ 
                        cursor: "pointer",
                        transition: "color 0.2s"
                      }}
                    >
                      {link.label}
                    </Text>
                  </Link>
                ))}
              </Column>
            </Column>

            {/* Quick Links */}
            <Column gap="m" style={{ flex: "0 0 180px" }}>
              <Text variant="label-default-s" weight="strong" className="ieee-blue">
                Quick Links
              </Text>
              <Column gap="2">
                {quickLinks.map((link) => (
                  <a 
                    key={link.href} 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <Text
                      variant="body-default-xs"
                      onBackground="neutral-weak"
                      className="footer-link-blue"
                      style={{ 
                        cursor: "pointer",
                        transition: "color 0.2s"
                      }}
                    >
                      {link.label}
                    </Text>
                  </a>
                ))}
              </Column>
            </Column>

            {/* Contact & Social */}
            <Column gap="m" style={{ flex: "1", minWidth: "220px" }}>
              <Text variant="label-default-s" weight="strong" className="nc-state-red">
                Connect With Us
              </Text>
              <Column gap="4">
                <Text variant="body-default-xs" onBackground="neutral-weak">
                  \uD83D\uDCE7 ieeestudentbranch@ncsu.edu
                </Text>
                <Text variant="body-default-xs" onBackground="neutral-weak">
                  \uD83D\uDCCD Engineering Building II<br/>
                  Campus Box 7911<br/>
                  NC State University
                </Text>
              </Column>
              
              {/* Social Media Links */}
              <Row gap="s" wrap>
                {Object.entries(social).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                    aria-label={`Open ${platform} in new tab`}
                  >
                    <div
                      className="footer-social-icon"
                      style={{
                        width: "36px",
                        height: "36px",
                        backgroundColor: "var(--neutral-alpha-weak)",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "14px",
                        cursor: "pointer",
                        transition: "all 0.2s"
                      }}
                    >
                      {getSocialIcon(platform)}
                    </div>
                  </a>
                ))}
              </Row>
            </Column>
          </Row>

          {/* Footer Bottom */}
          <Column gap="s" style={{ borderTop: "1px solid var(--neutral-alpha-weak)", paddingTop: "1rem" }}>
            <Row gap="m" align="center" wrap style={{ justifyContent: "space-between" }}>
              <Text variant="body-default-xs" onBackground="neutral-weak">
                \u00A9 2024 IEEE at NC State Student Branch. All rights reserved.
              </Text>

            </Row>
            
            {/* Website Credits */}
            <Text variant="body-default-xs" onBackground="neutral-weak" align="center">
              Website designers: Ohm Patel (
              <a 
                href="https://ohmptl.com" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: "var(--ieee-blue, #0066CC)", textDecoration: "none" }}
              >
                Portfolio
              </a>
              )
            </Text>
          </Column>
        </Column>
      </Container>
    </Flex>
  );
}
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Flex,
  Text,
  Row,
  Column,
  Button,
} from "@once-ui-system/core";
import { Container } from "./Container";
import { navItems, quickLinks, socialLinks as socialLinksList, contactInfo } from "../resources";

// Theme Toggle Component
function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const saved = localStorage.getItem('data-theme');
    let initial = saved ? (saved === 'dark') : systemPrefersDark;
    setIsDark(initial);
    applyTheme(initial);
  }, []);

  const applyTheme = (dark) => {
    const root = document.documentElement;
    const value = dark ? 'dark' : 'light';
    root.setAttribute('data-theme', value);
    localStorage.setItem('data-theme', value);
  };

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    applyTheme(next);
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle-button"
      style={{
        background: "none",
        border: "2px solid var(--neutral-alpha-medium)",
        borderRadius: "50%",
        width: "40px",
        height: "40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "all 0.3s ease",
        fontSize: "18px",
        backgroundColor: "var(--neutral-alpha-weak)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      title={`Current: ${isDark ? 'Dark' : 'Light'} theme`}
    >
      <span className="display-inline-flex fit position-relative Icon_xs__AfinG" role="presentation" aria-hidden="true">
        {isDark ? (
          <svg stroke="currentColor" fill="white" strokeWidth="0" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z"></path>
          </svg>
        ) : (
          <svg stroke="currentColor" fill="black" strokeWidth="0" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd"></path>
          </svg>
        )}
      </span>
    </button>
  );
}

// Skip to Main Component
function SkipToMain() {
  const handleSkipToMain = (e) => {
    e.preventDefault();
    const mainContent = document.querySelector('main') || document.querySelector('[role="main"]') || document.getElementById('main-content');
    if (mainContent) {
      mainContent.focus();
      mainContent.scrollIntoView();
    }
  };

  return (
    <a
      href="#main-content"
      className="skip-link"
      onClick={handleSkipToMain}
      style={{
        position: "absolute",
        top: "-40px",
        left: "6px",
        background: "var(--nc-state-red, #CC0000)",
        color: "white",
        padding: "8px 16px",
        textDecoration: "none",
        zIndex: 100,
        borderRadius: "4px",
        fontWeight: "bold",
        fontSize: "14px",
        transition: "top 0.2s ease"
      }}
      onFocus={(e) => e.currentTarget.style.top = "6px"}
      onBlur={(e) => e.currentTarget.style.top = "-40px"}
    >
      Skip to main content
    </a>
  );
}

// Social Media Icon Helper
import { getSocialIcon } from "../resources";

// Main Navigation Component
export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Flex
      as="nav"
      fillWidth
      padding="8"
      className="modern-nav"
      aria-label="Primary"
      style={{ 
        position: "sticky", 
        top: 0, 
        zIndex: 50,
        background: "var(--nav-bg, rgba(255, 255, 255, 0.85))",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--nav-border, rgba(0, 0, 0, 0.06))",
      }}
    >
      <Container padding="0">
        <Row align="center" gap="0" style={{ justifyContent: "space-between" }}>
          {/* Logo and brand */}
          <Flex align="center" gap="12">
            <Link href="/" style={{ textDecoration: "none" }} aria-label="Go to home">
              <Flex align="center" gap="12" className="logo-container">
                {/* Wordmark for larger screens */}
                <Image
                  src="/images/textlogo.png"
                  alt="IEEE at NC State"
                  width={200}
                  height={40}
                  priority
                  className="brand-wordmark"
                  style={{ height: 28, width: "auto" }}
                />
                {/* Compact icon for small screens */}
                <Image
                  src="/images/logo.png"
                  alt="IEEE at NC State icon"
                  width={36}
                  height={36}
                  priority
                  className="brand-icon"
                  style={{ borderRadius: 8 }}
                />
              </Flex>
            </Link>
          </Flex>

          {/* Desktop Navigation */}
          <Row 
            gap="4" 
            align="center"
            className="desktop-nav"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  textDecoration: "none",
                  position: "relative",
                  borderRadius: "12px",
                  transition: "all 0.25s cubic-bezier(0.4, 0, 0.2, 1)",
                  background: pathname === item.href 
                    ? "linear-gradient(135deg, var(--accent-alpha-weak), var(--brand-alpha-weak))"
                    : "transparent",
                  color: pathname === item.href 
                    ? "var(--accent-on-background-strong)" 
                    : "var(--neutral-on-background-strong)",
                  border: pathname === item.href 
                    ? "1px solid var(--accent-alpha-medium)" 
                    : "1px solid transparent",
                  padding: "8px 12px"
                }}
                className={pathname === item.href ? "nav-active" : "nav-item"}
                role="button"
              >
                {item.label}
              </Link>
            ))}
            <ThemeToggle />
          </Row>

          {/* Mobile Controls */}
          <Row gap="8" align="center" className="mobile-controls">
            <ThemeToggle />
            <Button
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
              variant="tertiary"
              size="s"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="mobile-menu-btn"
              style={{ 
                display: "flex",
                borderRadius: "10px",
                transition: "transform 0.2s ease",
                transform: isMenuOpen ? "rotate(90deg)" : "rotate(0deg)"
              }}
            >
              ☰
            </Button>
          </Row>
        </Row>

        {/* Enhanced Mobile Navigation Menu */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="mobile-nav-enhanced"
            role="menu"
            style={{ 
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              zIndex: 40,
              background: "var(--nav-mobile-bg, rgba(255, 255, 255, 0.96))",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid var(--nav-border, rgba(0, 0, 0, 0.06))",
              borderRadius: "0 0 16px 16px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: "8px",
              padding: "16px"
            }}
          >
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                style={{ 
                  textDecoration: "none",
                  justifyContent: "center", 
                  borderRadius: "10px",
                  background: pathname === item.href 
                    ? "linear-gradient(135deg, var(--accent-alpha-weak), var(--brand-alpha-weak))"
                    : "transparent",
                  border: "1px solid transparent",
                  transition: "all 0.2s ease",
                  padding: "10px 12px",
                  display: "flex"
                }}
                className="mobile-nav-item"
                role="menuitem"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </Container>
    </Flex>
  );
}

// Footer Component
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
                {navItems.map((link) => (
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
                  ✉️ {contactInfo.email}
                </Text>
                <Text variant="body-default-xs" onBackground="neutral-weak">
                  📍 {contactInfo.addressLines[2]}<br/>
                  {contactInfo.addressLines[1]}<br/>
                  {contactInfo.addressLines[3]}
                </Text>
              </Column>
              
              {/* Social Media Links */}
              <Row gap="s" wrap>
                {socialLinksList.map((social) => (
                  <a
                    key={social.icon}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                    aria-label={`Open ${social.name} in new tab`}
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
                      {getSocialIcon(social.icon)}
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
                © 2024 IEEE at NC State Student Branch. All rights reserved.
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

// Skip to Main Component Export
export { SkipToMain };

"use client";

import { useState } from "react";
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
import { ThemeToggle } from "./ThemeToggle";
import { Container } from "./Container";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/events", label: "Calendar" },
  { href: "/gallery", label: "Gallery" },
  { href: "/awards", label: "Awards" },  
  { href: "/scholarship", label: "Scholarship" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/contact", label: "Contact Us" },
];

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
            style={{ display: "none" }}
            className="desktop-nav"
          >
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} style={{ textDecoration: "none" }}>
                <Button
                  variant="tertiary"
                  size="s"
                  className={pathname === item.href ? "nav-active" : "nav-item"}
                  weight={pathname === item.href ? "strong" : "default"}
                  style={{
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
                >
                  {item.label}
                </Button>
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
              \u2630
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
                style={{ textDecoration: "none" }}
                role="menuitem"
              >
                <Button
                  variant="tertiary"
                  size="m"
                  className="mobile-nav-item"
                  weight={pathname === item.href ? "strong" : "default"}
                  style={{ 
                    justifyContent: "center", 
                    borderRadius: "10px",
                    background: pathname === item.href 
                      ? "linear-gradient(135deg, var(--accent-alpha-weak), var(--brand-alpha-weak))"
                      : "transparent",
                    border: "1px solid transparent",
                    transition: "all 0.2s ease",
                    padding: "10px 12px"
                  }}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </div>
        )}
      </Container>
    </Flex>
  );
}
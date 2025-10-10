"use client";

import { Button } from "@once-ui-system/core";

export function SkipToMain() {
  const handleSkipToMain = (e: React.MouseEvent) => {
    e.preventDefault();
    const mainContent = document.querySelector('main') || document.querySelector('[role="main"]') || document.getElementById('main-content');
    if (mainContent) {
      (mainContent as HTMLElement).focus();
      (mainContent as HTMLElement).scrollIntoView();
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
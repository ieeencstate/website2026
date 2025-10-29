"use client";

import React from "react";
import { Column, Background as Bg, SpacingToken } from "@once-ui-system/core";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  padding?: SpacingToken;
  gap?: SpacingToken;
  background?: "none" | "surface" | "translucent";
  border?: boolean;
  radius?: "s" | "m" | "l" | "xl";
};

export function Section({
  children,
  className,
  padding = "xl",
  gap = "l",
  background = "none",
  border = false,
  radius = "l",
}: SectionProps) {
  return (
    <Column
      as="section"
      className={className}
      fillWidth
      padding={padding}
      gap={gap}
      background={background === "none" ? undefined : "surface"}
      border={border ? "neutral-alpha-weak" : undefined}
      radius={background === "none" && !border ? undefined : radius}
    >
      {children}
    </Column>
  );
}

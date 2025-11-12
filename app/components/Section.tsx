import React from 'react';

type SectionPadding = "s" | "m" | "l" | "xl";

type SectionProps = {
  children: React.ReactNode;
  padding?: SectionPadding;
  background?: string;
  border?: boolean | string;
  radius?: string;
};

export function Section({ 
  children, 
  padding = "xl", 
  background,
  border,
  radius 
}: SectionProps) {
  const paddingClasses = {
    s: "p-4",
    m: "p-6",
    l: "p-8",
    xl: "p-12",
  };
  
  const className = `${paddingClasses[padding] || paddingClasses.xl} ${
    background === "surface" ? "bg-white dark:bg-gray-800" : ""
  } ${border ? "border border-gray-200 dark:border-gray-700" : ""} ${
    radius === "l" ? "rounded-lg" : ""
  }`;
  
  return <section className={className}>{children}</section>;
}



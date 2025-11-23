import React from 'react';

export function Section({ 
  children, 
  padding = "xl", 
  background,
  border,
  radius 
}: { 
  children: React.ReactNode; 
  padding?: string;
  background?: string;
  border?: string;
  radius?: string;
  boolean?: string;
}) {
  const paddingClasses = {
    s: "p-4",
    m: "p-6",
    l: "p-8",
    xl: "p-12",
  };
  
  const className = `${paddingClasses[padding as keyof typeof paddingClasses] || paddingClasses.xl} ${
    background === "surface" ? "bg-white dark:bg-gray-800" : ""
  } ${border ? "border border-gray-200 dark:border-gray-700" : ""} ${
    radius === "l" ? "rounded-lg" : ""
  }`;
  
  return <section className={className}>{children}</section>;
}


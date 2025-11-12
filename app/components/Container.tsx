import React from 'react';

export function Container({ children, padding = "l" }: { children: React.ReactNode; padding?: string }) {
  const paddingClasses = {
    s: "p-4",
    m: "p-6",
    l: "p-8",
    xl: "p-12",
  };
  
  return (
    <div className={`max-w-7xl mx-auto ${paddingClasses[padding as keyof typeof paddingClasses] || paddingClasses.l}`}>
      {children}
    </div>
  );
}


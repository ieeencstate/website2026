"use client";

import React from "react";
import { Column, SpacingToken } from "@once-ui-system/core";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  padding?: SpacingToken;
};

export function Container({ children, className, padding = "0" as SpacingToken }: ContainerProps) {
  return (
    <Column
      as="div"
      className={className}
      fillWidth
      maxWidth="xl"
      padding={padding}
      style={{ margin: "0 auto" }}
    >
      {children}
    </Column>
  );
}

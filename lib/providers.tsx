"use client";
import LightMode from "@/components/custom/light-mode";
import React from "react";
import { ThemeProvider } from "./providers/theme-provider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      {children}
      <LightMode />
    </ThemeProvider>
  );
}

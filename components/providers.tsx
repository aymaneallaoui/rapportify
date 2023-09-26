"use client";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemeProvider
        defaultTheme="light"
        attribute="class"
        enableSystem={true}
      >
        {children}
      </NextThemeProvider>
    </NextUIProvider>
  );
}

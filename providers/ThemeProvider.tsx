"use client";

import { Theme } from "@/types/types";
import { createContext, useState } from "react";

export const ThemeContext = createContext<Theme>({
  theme: "dark",
  reverseTheme: () => {},
});

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const reverseTheme = () => {
    setTheme((prev) => {
      if (prev === "dark") {
        return "light";
      }
      return "dark";
    });
  };
  return (
    <ThemeContext.Provider value={{ theme, reverseTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

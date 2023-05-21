"use client";

import { ThemeContext } from "@/providers/ThemeProvider";
import { Theme } from "@/types/types";
import { useContext } from "react";

export default function RootLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme }: Theme = useContext(ThemeContext);
  return (
    <div
      className={`
      max-w-[550px] sm:max-w-[800px]
      lg:max-w-[1200px] xl:max-w-[1500px] 
      [min-height:100vh] flex flex-col 
      gap-[100px] justify-between bg-white dark:bg-black 
      }
      `}
    >
      {children}
    </div>
  );
}

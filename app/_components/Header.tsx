"use client";

import LinkText from "@/components/LinkText";
import StandardText from "@/components/StandardText";
import { headerLinks } from "@/lib/constants";
import { useContext, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import capitalize from "@/lib/capitalize";
import { ThemeContext } from "@/providers/ThemeProvider";
import Image from "next/image";
import moon from "@/public/moon.png";
import sun from "@/public/sun.png";

export default function LayoutHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname().slice(1);
  const router = useRouter();
  const { theme, reverseTheme } = useContext(ThemeContext);
  return (
    <>
      <header
        className="fixed w-[100%] z-[100] bg-white dark:bg-black flex justify-between 
      border-b border-b-gray-500 items-center"
      >
        <div className="p-2" onClick={() => router.push("/")}>
          <StandardText>NC</StandardText>
        </div>
        <div className="font-bold uppercase">
          <a href="#">
            <StandardText>{capitalize(pathname)}</StandardText>
          </a>
        </div>
        <div className="flex">
          <div
            onClick={() => setIsMenuOpen(true)}
            className="flex items-center p-2 cursor-pointer dark:hover:bg-gray-600 hover:bg-gray-300"
          >
            <StandardText variant={3}>Menu</StandardText>
          </div>
          <div
            onClick={() => reverseTheme()}
            className="p-2 
            dark:hover:bg-gray-600 hover:bg-gray-300
             cursor-pointer flex items-center"
          >
            <StandardText variant={3}>
              {theme === "dark" ? (
                <Image
                  src={moon}
                  alt="moon icon for dark mode"
                  width={20}
                  height={20}
                />
              ) : (
                <Image
                  src={sun}
                  alt="sun icon for light mode"
                  width={20}
                  height={20}
                />
              )}
            </StandardText>
          </div>
        </div>
      </header>
      {isMenuOpen ? (
        <div
          className="fixed top-0 right-0 
        bottom-0 left-0 [background:rgb(0,0,0,0.95)] 
        z-[100] grid place-content-center"
        >
          <div
            className="absolute right-0 p-2 cursor-pointer hover:bg-gray-600"
            onClick={() => setIsMenuOpen(false)}
          >
            <StandardText variant={3}>Close</StandardText>
          </div>
          <div className="flex flex-col items-center">
            {headerLinks.map((link) =>
              link.text === "Contact" ? (
                <LinkText
                  key={link.href}
                  href="#contact"
                  isNativeAnchor
                  anchorProps={{
                    onClick: () => setIsMenuOpen(false),
                  }}
                >
                  <div className="text-white">{link.text}</div>
                </LinkText>
              ) : (
                <LinkText
                  linkProps={{ onClick: () => setIsMenuOpen(false) }}
                  key={link.href}
                  href={link.href}
                >
                  <div className="text-white">{link.text}</div>
                </LinkText>
              )
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}

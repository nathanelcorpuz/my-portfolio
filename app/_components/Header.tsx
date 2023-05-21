"use client";

import LinkText from "@/components/LinkText";
import StandardText from "@/components/StandardText";
import { headerLinks } from "@/lib/constants";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import capitalize from "@/lib/capitalize";

export default function LayoutHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname().slice(1);
  const router = useRouter();
  return (
    <>
      <header
        className="fixed w-[100%] z-[100] bg-black flex justify-between 
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
        <div onClick={() => setIsMenuOpen(true)} className="p-2">
          <StandardText variant={3}>Menu</StandardText>
        </div>
      </header>
      {isMenuOpen ? (
        <div
          className="fixed top-0 right-0 
        bottom-0 left-0 [background:rgb(0,0,0,0.95)] 
        z-[100] grid place-content-center"
        >
          <div
            className="absolute right-0 p-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <StandardText variant={3}>Close</StandardText>
          </div>
          <div className="flex flex-col items-center">
            {headerLinks.map((link) => (
              <LinkText
                linkProps={{ onClick: () => setIsMenuOpen(false) }}
                key={link.href}
                href={link.href}
              >
                {link.text}
              </LinkText>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
}

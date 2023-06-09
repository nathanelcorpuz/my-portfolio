import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";

export default function LinkText({
  children,
  href = "",
  isNativeAnchor,
  anchorProps,
  linkProps,
}: {
  children: React.ReactNode;
  href?: string;
  anchorProps?: AnchorHTMLAttributes<HTMLAnchorElement>;
  linkProps?: Omit<LinkProps, "href">;
  isNativeAnchor?: boolean;
}) {
  if (isNativeAnchor) {
    return (
      <a
        className="uppercase font-light underline underline-offset-8 tracking-widest
        py-2 inline-block
        text-black dark:text-white 
        "
        href={href}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }
  return (
    <Link
      className="uppercase font-light underline underline-offset-8 tracking-widest py-2 block
      text-black dark:text-white 
      "
      {...linkProps}
      href={href}
    >
      {children}
    </Link>
  );
}

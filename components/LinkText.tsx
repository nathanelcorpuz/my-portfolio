import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

export default function LinkText({
  children,
  href,
  isNativeAnchor,
  anchorProps,
  linkProps,
}: {
  children: React.ReactNode;
  href: string;
  anchorProps?: AnchorHTMLAttributes<HTMLAnchorElement>;
  linkProps?: AnchorHTMLAttributes<HTMLAnchorElement>;
  isNativeAnchor?: boolean;
}) {
  if (isNativeAnchor) {
    return (
      <a
        className="uppercase font-light underline underline-offset-8 tracking-widest"
        href={href}
        {...anchorProps}
      >
        {children}
      </a>
    );
  }
  return (
    <Link
      className="uppercase font-light underline underline-offset-8 tracking-widest py-2 block"
      {...linkProps}
      href={href}
    >
      {children}
    </Link>
  );
}

import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

export default function LinkText({
  children,
  href,
  isNativeAnchor,
  anchorProps,
  ...props
}: {
  children: React.ReactNode;
  href: string;
  anchorProps?: AnchorHTMLAttributes<HTMLAnchorElement>;
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
      className="uppercase font-light underline underline-offset-8 tracking-widest py-2"
      {...props}
      href={href}
    >
      {children}
    </Link>
  );
}

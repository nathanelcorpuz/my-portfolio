import Link from "next/link";

export default function LinkText({
  children,
  href,
  ...props
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      className="uppercase font-light underline underline-offset-8 tracking-widest"
      {...props}
      href={href}
    >
      {children}
    </Link>
  );
}

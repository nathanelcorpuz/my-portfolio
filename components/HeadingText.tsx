import { HeadingTextVariant } from "@/types/types";

export default function HeadingText({
  children,
  variant = 1,
}: {
  children: React.ReactNode;
  variant?: HeadingTextVariant;
}) {
  const common = "font-black uppercase";
  if (variant === 2) {
    return <h1 className={`text-xl xl:text-2xl ${common}`}>{children}</h1>;
  }
  return <h1 className={`text-2xl xl:text-5xl ${common}`}>{children}</h1>;
}

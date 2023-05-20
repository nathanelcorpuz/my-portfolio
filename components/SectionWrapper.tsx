import { GapSize } from "@/types/types";

export default function SectionWrapper({
  children,
  gapSize = "sm",
}: {
  children: React.ReactNode;
  gapSize?: GapSize;
}) {
  if (gapSize === "md") {
    return <section className="flex flex-col gap-[50px]">{children}</section>;
  }
  if (gapSize === "lg") {
    return <section className="flex flex-col gap-[100px]">{children}</section>;
  }
  return <section className="flex flex-col gap-[25px]">{children}</section>;
}

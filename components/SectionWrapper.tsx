import { GapSize } from "@/types/types";
import { AllHTMLAttributes } from "react";

export default function SectionWrapper({
  children,
  gapSize = "sm",
  props,
}: {
  children: React.ReactNode;
  gapSize?: GapSize;
  props?: AllHTMLAttributes<HTMLDivElement>;
}) {
  if (gapSize === "md") {
    return (
      <section className="py-[60px] px-4 flex flex-col gap-[30px]" {...props}>
        {children}
      </section>
    );
  }
  if (gapSize === "lg") {
    return (
      <section className="py-[60px] px-4 flex flex-col gap-[60px]" {...props}>
        {children}
      </section>
    );
  }
  return (
    <section className="py-[60px] px-4 flex flex-col gap-[15px]" {...props}>
      {children}
    </section>
  );
}

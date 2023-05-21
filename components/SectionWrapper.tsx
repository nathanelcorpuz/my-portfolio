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
      <section className="p-4 flex flex-col gap-[50px]" {...props}>
        {children}
      </section>
    );
  }
  if (gapSize === "lg") {
    return (
      <section className="p-4 flex flex-col gap-[100px]" {...props}>
        {children}
      </section>
    );
  }
  return (
    <section className="p-4 flex flex-col gap-[25px]" {...props}>
      {children}
    </section>
  );
}

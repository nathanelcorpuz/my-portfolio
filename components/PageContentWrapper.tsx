import { AllHTMLAttributes } from "react";

export default function PageContentWrapper({
  children,
  props,
}: {
  children: React.ReactNode;
  props?: AllHTMLAttributes<HTMLDivElement>;
}) {
  return (
    <div
      className="max-w-[550px]
     lg:max-w-[800px] xl:w-[1000px] mx-auto
     flex flex-col gap-[70px] pt-16"
      {...props}
    >
      {children}
    </div>
  );
}

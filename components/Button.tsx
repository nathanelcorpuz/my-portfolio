import { ButtonVariant } from "@/types/types";
import { ButtonHTMLAttributes } from "react";

export default function Button({
  children,
  variant,
  props,
}: {
  children: React.ReactNode;
  variant?: ButtonVariant;
  props?: ButtonHTMLAttributes<HTMLButtonElement>;
}) {
  if (variant === 2) {
    return (
      <button
        className="px-4 py-2 ms-1
      bg-black dark:bg-white 
      text-white dark:text-black
        font-black uppercase
        text-sm relative group 
        hover:[transform:translateX(-5px)_translateY(5px)]
      "
        {...props}
      >
        {children}
        <span
          className="absolute top-0 right-0 
        bottom-0 left-0
        [transform:translateX(-5px)_translateY(5px)]
        group-hover:[transform:translateX(-0)_translateY(0)]
        border border-black dark:border-white"
        />
      </button>
    );
  }
  return (
    <button
      className="px-6 py-3 ms-1
      bg-black dark:bg-white 
      text-white dark:text-black
      font-black uppercase
      text-lg relative group 
      hover:[transform:translateX(-5px)_translateY(5px)]
    "
      {...props}
    >
      {children}
      <span
        className="absolute top-0 right-0 
      bottom-0 left-0
      [transform:translateX(-5px)_translateY(5px)]
      group-hover:[transform:translateX(-0)_translateY(0)]
      border border-black dark:border-white"
      />
    </button>
  );
}

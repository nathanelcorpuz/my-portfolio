import { ButtonVariant } from "@/types/types";

export default function Button({
  children,
  variant,
  ...props
}: {
  children: React.ReactNode;
  variant?: ButtonVariant;
}) {
  return (
    <button
      className="px-6 py-3 ms-1
    bg-white text-black
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
      border border-white"
      />
    </button>
  );
}

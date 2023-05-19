import { StandardTextVariant } from "@/types/types";

export default function StandardText({
	children,
	variant = 2,
}: {
	children: React.ReactNode;
	variant?: StandardTextVariant;
}) {
	const common = "text-gray-400";
	if (variant === 1) {
		return <p className={`${common}`}>{children}</p>;
	}
	if (variant === 3) {
		return <p className={`${common} text-xs`}>{children}</p>;
	}
	return <p className={`${common} text-sm`}>{children}</p>;
}

import StandardText from "./StandardText";

export default function BulletedListItem({
	children,
	emoji = "✔️",
}: {
	children: React.ReactNode;
	emoji?: string;
}) {
	return (
		<li className="ps-5 list-none relative">
			<StandardText>{children}</StandardText>
			<span className="absolute left-[-8px] top-[-2px]">{emoji}</span>
		</li>
	);
}

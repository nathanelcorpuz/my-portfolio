import StandardText from "./StandardText";

export default function ListItem({ children }: { children: React.ReactNode }) {
	return (
		<li className="ps-5 list-none relative">
			<StandardText>{children}</StandardText>
			<span className="absolute left-[-8px] top-[-2px]">
				✔️
			</span>
		</li>
	);
}

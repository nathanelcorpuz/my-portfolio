export default function SectionWrapper({
	children,
	gap = "30px",
}: {
	children: React.ReactNode;
	gap?: string;
}) {
	return <section className={`flex flex-col gap-[${gap}]`}>{children}</section>;
}

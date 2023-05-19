export default function SectionWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	return <section className="flex flex-col gap-[30px]">{children}</section>;
}

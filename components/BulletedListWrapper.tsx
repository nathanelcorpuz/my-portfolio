export default function BulletedListWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	return <ul className="flex flex-col gap-[10px]">{children}</ul>;
}

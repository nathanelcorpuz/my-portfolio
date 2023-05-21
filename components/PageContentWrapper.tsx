export default function PageContentWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-col gap-[100px]">{children}</div>;
}

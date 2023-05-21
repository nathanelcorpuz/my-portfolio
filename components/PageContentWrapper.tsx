export default function PageContentWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-col gap-[100px] pt-16">{children}</div>;
}

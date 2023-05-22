export default function PageContentWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="max-w-[550px]
     lg:max-w-[800px] xl:max-w-[1000px] mx-auto
     flex flex-col gap-[100px] pt-16"
    >
      {children}
    </div>
  );
}

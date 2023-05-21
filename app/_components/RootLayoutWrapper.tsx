export default function RootLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="
      max-w-[550px] sm:max-w-[800px]
      lg:max-w-[1200px] xl:max-w-[1500px] 
      [min-height:100vh]
      flex flex-col gap-[100px] justify-between"
    >
      {children}
    </div>
  );
}

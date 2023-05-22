export default function RootLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`
      [min-height:100vh] flex flex-col 
      gap-[100px] justify-between bg-white dark:bg-black 
      }
      `}
    >
      {children}
    </div>
  );
}

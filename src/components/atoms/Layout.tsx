export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="p-4 flex justify-center items-center flex-col gap-4">
      {children}
    </main>
  );
};

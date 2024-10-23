export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-red-500 p-4 flex justify-center items-center">
      {children}
    </div>
  );
};

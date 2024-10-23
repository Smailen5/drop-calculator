import { createContext, ReactNode, useContext, useState } from "react";

interface AppContextProps {
  dropRate: number | undefined;
  setDropRate: (drop: number | undefined) => void;
}
const AppContext = createContext<AppContextProps | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider = ({ children }: AppProviderProps) => {
  const [dropRate, setDropRate] = useState<number | undefined>(undefined);

  return (
    <AppContext.Provider value={{ dropRate, setDropRate }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useGlobalContext non può essere usato senza AppProvider");
  }
  return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export { AppProvider, useGlobalContext };

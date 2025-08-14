import { createContext, useContext } from "react";
import { ToastProvider } from "./toast";

export type CubesContextType = {
  apiUrl: string;
  getToken: () => string | null;
  onUnauthorized?: () => void;
};

const CubesContext = createContext<CubesContextType | undefined>(undefined);

export const AppProvider = ({
  children,
  ...values
}: React.PropsWithChildren<CubesContextType>) => {
  return (
    <CubesContext.Provider value={values}>
      <ToastProvider />
      {children}
    </CubesContext.Provider>
  );
};

export const useApp = (): {
  apiUrl: string;
  getToken: () => string | undefined;
  onUnauthorized: () => void;
} => {
  const context = useContext(CubesContext);
  if (!context) {
    throw new Error("useCubesContext must be used within a CubesProvider");
  }

  const resolvedApiUrl = context.apiUrl;

  const safeGetToken = () => {
    const token = context.getToken?.();
    return token ?? undefined;
  };

  return {
    apiUrl: resolvedApiUrl,
    getToken: safeGetToken,
    onUnauthorized: context.onUnauthorized ?? (() => {}),
  };
};

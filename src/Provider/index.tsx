import { AuthProvider } from "./Auth";
import { ReactNode } from "react";

interface ProviderProps {
  children: ReactNode;
}

const Providers = ({ children }: ProviderProps) => {
  return (
    <>
      <AuthProvider>{children}</AuthProvider>
    </>
  );
};

export default Providers;

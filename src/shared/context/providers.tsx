import React from "react";
import ReactQueryProvider from "./providers/ReactQuery.provider";

interface IProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: IProvidersProps) => {
  return <ReactQueryProvider>{children}</ReactQueryProvider>;
};

export default Providers;

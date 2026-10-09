"use client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import React, { useState } from "react";

interface IReactQueryProviderProps {
  children: React.ReactNode;
}

const ReactQueryProvider = ({ children }: IReactQueryProviderProps) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;

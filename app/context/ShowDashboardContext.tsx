"use client";
import { createContext, useContext, useState } from "react";
import { ShowDashboardContextType } from "../assets/tabledata";
import { RootLayoutType } from "../assets/TypeExports";

const ShowDashboardContext = createContext<
  ShowDashboardContextType | undefined
>(undefined);

function ShowDashboardProvider({ children }: RootLayoutType) {
  const [showDashboard, setShowDashboard] = useState(true);

  return (
    <ShowDashboardContext.Provider value={{ showDashboard, setShowDashboard }}>
      {children}
    </ShowDashboardContext.Provider>
  );
}

function useShowDashboard() {
  const context = useContext(ShowDashboardContext);

  if (context === undefined)
    throw new Error("Context was used outside the provider");

  return context;
}

export { ShowDashboardProvider, useShowDashboard };

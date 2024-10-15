"use client";
import { createContext, useContext, useState } from "react";
import {
  RootLayoutType,
  Widget,
  WidgetContextType,
} from "../assets/TypeExports";
import { initialWidgets } from "../assets/tabledata";

const WidgetContext = createContext<WidgetContextType | undefined>(undefined);

function WidgetProvider({ children }: RootLayoutType) {
  const [widgets, setWidgets] = useState<Widget[]>(initialWidgets);

  function addWidget(type: string, custom: string) {
    const newWidget: Widget = {
      id: Date.now(),
      type,
      custom,
    };
    setWidgets((prevWidgets) => [...prevWidgets, newWidget]);
  }

  function removeWidget(id: number) {
    setWidgets((prevWidgets) =>
      prevWidgets.filter((widget) => widget.id !== id)
    );
  }

  return (
    <WidgetContext.Provider
      value={{ widgets, setWidgets, addWidget, removeWidget }}
    >
      {children}
    </WidgetContext.Provider>
  );
}

function useWidget() {
  const context = useContext(WidgetContext);

  if (context === undefined)
    throw new Error("Context was used outside the provider");

  return context;
}

export { WidgetProvider, useWidget };

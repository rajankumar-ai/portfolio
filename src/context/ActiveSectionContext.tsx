import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

type ActiveSectionContextType = {
  activeSection: string;
  setActiveSection: (section: string) => void;
};

const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export function ActiveSectionProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [activeSection, setActiveSection] =
    useState("home");

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (!context) {
    throw new Error(
      "useActiveSectionContext must be used inside ActiveSectionProvider"
    );
  }

  return context;
}
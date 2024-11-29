import React, { createContext, useContext, useState } from "react";

type ContextMenuState = {
  isOpen: boolean;
  position: { x: number; y: number };
  openMenu: (x: number, y: number, identifier: string) => void;
  identifier?: string;
  closeMenu: () => void;
};

const ContextMenuContext = createContext<ContextMenuState | undefined>(
  undefined
);

export function ContextMenuProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [identifier, setIdentifier] = useState<string | undefined>(undefined);

  const openMenu = (x: number, y: number, identifier: string) => {
    setIsOpen(true);
    setPosition({ x, y });
    setIdentifier(identifier);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setIdentifier(undefined);
  };

  return (
    <ContextMenuContext.Provider
      value={{ isOpen, position, openMenu, closeMenu, identifier }}
    >
      {children}
    </ContextMenuContext.Provider>
  );
}

export const useContextMenuState = () => {
  const context = useContext(ContextMenuContext);
  if (!context) {
    throw new Error(
      "useContextMenuState must be used within a ContextMenuProvider"
    );
  }
  return context;
};

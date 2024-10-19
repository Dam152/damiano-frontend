"use client";
import React, { useContext, useState, createContext } from "react";

const MenuContext = createContext();

export default function ContextMenuProvider({ children }) {
  const [open, setIsOpen] = useState(false);

  const value = { open, setIsOpen };
  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}

export const useMenuContext = () => {
  return useContext(MenuContext);
};

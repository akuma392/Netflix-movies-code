import React, { useState, createContext } from "react";
export const Context = createContext();
export const Provider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const value = {
    darkMode,
    setDarkMode,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

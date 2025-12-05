import { createContext } from "react";
export const themes = {
  light: "bg-white text-black",
  dark: "bg-black text-white",
};

export const ThemeContext = createContext(themes.light);

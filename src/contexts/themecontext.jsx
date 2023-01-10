import { createContext, useState } from "react";

export const ThemeContext = createContext({ theme: "", setTheme: () => null });

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => setTheme(theme === "light" ? "dark" : "light");

  const value = { theme, changeTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

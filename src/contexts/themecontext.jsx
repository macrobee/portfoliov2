import { createContext, useState } from "react";

const lightTextColor = "#07004D";
const lightMainColor = "#2D82B7";
const lightBackgroundColor = "#F3DFBF";
const lightNoColor = `#FFFFFF`;
const darkTextColor = "#F3DFBF";
const darkMainColor = "#2D82B7";
const darkBackgroundColor = "#07004D";
const darkNoColor = `#000000`;

const themeColors = {
  light: {
    text: lightTextColor,
    main: lightMainColor,
    background: lightBackgroundColor,
    noColor: lightNoColor,
  },
  dark: {
    text: darkTextColor,
    main: darkMainColor,
    background: darkBackgroundColor,
    noColor: darkNoColor,
  },
};

export const ThemeContext = createContext({
  theme: "",
  changeTheme: () => null,
  currentThemeColors: {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [currentThemeColors, setCurrentThemeColors] = useState(
    themeColors.light
  );

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    theme === "light"
      ? setCurrentThemeColors(themeColors.dark)
      : setCurrentThemeColors(themeColors.light);
  };

  const value = { theme, changeTheme, currentThemeColors };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

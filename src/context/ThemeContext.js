import React from "react";

const ThemeType = {
  LIGHT: "light",
  DARK: "dark",
};
const ThemeContext = React.createContext(ThemeType.DARK);

export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;

export { ThemeType, ThemeContext };

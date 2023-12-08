import { PropTypes } from "prop-types";
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const useThemeContext = () => {
  const contextValue = useContext(ThemeContext);
  if (!contextValue) {
    throw new Error("useNotesContext must be used within a NotesProvider");
  }
  return contextValue;
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );
  localStorage.setItem("theme", theme);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    localStorage.setItem("theme", theme === "dark" ? "light" : "dark");
  };

  const contextValue = {
    theme,
    toggleTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

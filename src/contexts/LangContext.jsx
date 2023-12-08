import { PropTypes } from "prop-types";
import { createContext, useContext, useState } from "react";

const LangContext = createContext();

export const useLangContext = () => {
  const contextValue = useContext(LangContext);
  if (!contextValue) {
    throw new Error("useNotesContext must be used within a NotesProvider");
  }
  return contextValue;
};

export const LangContextProvider = ({ children }) => {
  const [lang, setLang] = useState(
    localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
  );
  localStorage.setItem("lang", lang);

  const toggleLang = () => {
    setLang(lang === "en" ? "id" : "en");
    localStorage.setItem("lang", lang === "en" ? "id" : "en");
  };

  const contextValue = {
    lang,
    toggleLang,
  };

  return (
    <LangContext.Provider value={contextValue}>{children}</LangContext.Provider>
  );
};

LangContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

import React from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./search-bar.module.css";
import { useThemeContext } from "../../contexts/ThemeContext";
import { useLangContext } from "../../contexts/LangContext";

const SearchBar = () => {
  const { lang } = useLangContext();
  const { theme } = useThemeContext();
  const [, setSearchParams] = useSearchParams();

  const text = {
    en: {
      placeholder: "Search by title...",
    },
    id: {
      placeholder: "Cari berdasarkan judul...",
    },
  };

  return (
    <input
      type="text"
      className={styles[`searchBar${theme}`]}
      placeholder={text[lang].placeholder}
      onChange={(e) => {
        setSearchParams({ title: e.target.value });
      }}
    />
  );
};

export default SearchBar;

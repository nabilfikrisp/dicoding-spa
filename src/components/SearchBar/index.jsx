import React from "react";
import { useSearchParams } from "react-router-dom";
import styles from "./search-bar.module.css";

const SearchBar = () => {
  const [, setSearchParams] = useSearchParams();
  return (
    <input
      type="text"
      className={styles.searchBar}
      placeholder="Search by title"
      onChange={(e) => {
        setSearchParams({ title: e.target.value });
      }}
    />
  );
};

export default SearchBar;

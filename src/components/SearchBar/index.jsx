import React from "react";
import { useSearchParams } from "react-router-dom";

const SearchBar = () => {
  const [, setSearchParams] = useSearchParams();
  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Search by title"
      onChange={(e) => {
        setSearchParams({ title: e.target.value });
      }}
    />
  );
};

export default SearchBar;

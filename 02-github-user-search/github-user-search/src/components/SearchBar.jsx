import React from "react";
import Wrapper from "./SearchBar.styled";
import { SearchIcon } from "../assets/icons";

const SearchBar = ({ onSearch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };
  return (
    <Wrapper className="box-bg" onSubmit={handleSubmit}>
      <div className="form-control">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search GitHub username…"
          className="fs-200"
        />
      </div>
      <button className="btn--search bg-primary text-white fs-200">
        Search
      </button>
    </Wrapper>
  );
};

export default SearchBar;

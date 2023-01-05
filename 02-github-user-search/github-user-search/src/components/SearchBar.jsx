import React, { useState } from "react";
import Wrapper from "./SearchBar.styled";
import { SearchIcon } from "../assets/icons";

const SearchBar = ({ onSearch, error }) => {
  const [term, setTerm] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(term);
  };
  return (
    <Wrapper className="box-bg" onSubmit={handleSubmit}>
      <div className="form-control">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search GitHub username…"
          className="fs-200"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        {error.status ? <p>{error.message}</p> : null}
      </div>
      <button className="btn--search bg-primary text-white fs-200">
        Search
      </button>
    </Wrapper>
  );
};

export default SearchBar;

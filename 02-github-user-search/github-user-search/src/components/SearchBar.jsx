import React, { useState } from "react";
import Wrapper from "./SearchBar.styled";
import { SearchIcon } from "../assets/icons";

const SearchBar = ({ onSearch, error, setError }) => {
  const [term, setTerm] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(term);
  };
  return (
    <Wrapper className="box-bg" onSubmit={handleSubmit}>
      <div className="form-control">
        <SearchIcon className="icon" />
        <input
          type="text"
          placeholder="Search GitHub username…"
          className={error.status ? "fs-400 error" : "fs-400"}
          value={term}
          onChange={(e) => {
            setTerm(e.target.value);
            setError({ status: false, message: "" });
          }}
        />
        {error.status ? (
          <p className="error-message fs-100">{error.message}</p>
        ) : null}
      </div>
      <button className="btn--search bg-primary text-white fs-300">
        Search
      </button>
    </Wrapper>
  );
};

export default SearchBar;

import React, { useState } from "react";
import Button from "../UI/Button/Button";
import Wrapper from "./APIForm.styled";
import axios from "axios";

const APIForm = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState([]);

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    onSubmit(inputValue);
    setInputValue("");
  };
  return (
    <Wrapper className="flex-c container" onSubmit={submitHandler}>
      <input
        type="url"
        placeholder="Shorten a link here..."
        required
        value={inputValue}
        onChange={changeHandler}
      />
      <Button className="filled primary fullWidth text-white fs-500">
        Shorten It!
      </Button>
    </Wrapper>
  );
};

export default APIForm;

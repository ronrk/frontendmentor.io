import React from "react";
import Wrapper from "./Navbar.styled";
import { CiLight, CiDark } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { selectValue } from "../../store/slices/countriesSlice";
import { toggleTheme } from "../../store/slices/countriesSlice";

const Navbar = () => {
  const { darkTheme } = useSelector(selectValue);
  const dispatch = useDispatch();

  return (
    <Wrapper className="flex padding-inline-app">
      <h1 className="fs-500 fw-b text-color">Where in the world?</h1>
      {darkTheme ? (
        <button
          className="btn--theme flex fs-400 text-color"
          onClick={() => dispatch(toggleTheme())}
        >
          Light Mode <CiLight className="icon" />
        </button>
      ) : (
        <button
          className="btn--theme flex fs-400 text-color"
          onClick={() => dispatch(toggleTheme())}
        >
          Dark Mode <CiDark className="icon" />
        </button>
      )}
    </Wrapper>
  );
};

export default Navbar;

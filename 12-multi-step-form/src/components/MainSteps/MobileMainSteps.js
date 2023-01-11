import React from "react";
import Wrapper from "./MobileMainSteps.styled";
import { useFormStepContext } from "../../context/stepForm-context";

const MobileMainSteps = () => {
  const { page } = useFormStepContext();

  return (
    <Wrapper>
      <ul className="steps__list">
        <li
          className={
            page === 1 ? "steps__list-item active" : "steps__list-item"
          }
        >
          <span className="item__number">1</span>
        </li>
        <li
          className={
            page === 2 ? "steps__list-item active" : "steps__list-item"
          }
        >
          <span className="item__number">2</span>
        </li>
        <li
          className={
            page === 3 ? "steps__list-item active" : "steps__list-item"
          }
        >
          <span className="item__number">3</span>
        </li>
        <li
          className={
            page === 4 ? "steps__list-item active" : "steps__list-item"
          }
        >
          <span className="item__number">4</span>
        </li>
      </ul>
    </Wrapper>
  );
};

export default MobileMainSteps;

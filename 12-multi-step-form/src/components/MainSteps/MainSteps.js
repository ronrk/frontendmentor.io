import React from "react";
import Wrapper from "./MainSteps.styled";
import { useFormStepContext } from "../../context/stepForm-context";

const MainSteps = () => {
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
          <div className="item__titles">
            <h5>STEP 1</h5>
            <h4>YOUR INFO</h4>
          </div>
        </li>
        <li
          className={
            page === 2 ? "steps__list-item active" : "steps__list-item"
          }
        >
          <span className="item__number">2</span>
          <div className="item__titles">
            <h5>STEP 2</h5>
            <h4>SELECT PLAN</h4>
          </div>
        </li>
        <li
          className={
            page === 3 ? "steps__list-item active" : "steps__list-item"
          }
        >
          <span className="item__number">3</span>
          <div className="item__titles">
            <h5>STEP 3</h5>
            <h4>ADD-ONS</h4>
          </div>
        </li>
        <li
          className={
            page === 4 ? "steps__list-item active" : "steps__list-item"
          }
        >
          <span className="item__number">4</span>
          <div className="item__titles">
            <h5>STEP 4</h5>
            <h4>SUMMARY</h4>
          </div>
        </li>
      </ul>
    </Wrapper>
  );
};

export default MainSteps;

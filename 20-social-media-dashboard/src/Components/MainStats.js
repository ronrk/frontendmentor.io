import React from "react";
import Wrapper from "./MainStats.styled";
import { ReactComponent as IconUp } from "../assets/images/icon-up.svg";
import { ReactComponent as IconDown } from "../assets/images/icon-down.svg";

const MainStats = ({
  icon,
  tagName,
  number,
  type,
  changeNumber,
  changeType,
  className,
}) => {
  return (
    <Wrapper className={className}>
      <div className="icon">
        {icon} <span>{tagName}</span>
      </div>
      <div className="stats">
        <h2>{number}</h2>
        <span>{type}</span>
      </div>
      <div className="change">
        {changeType ? <IconUp /> : <IconDown />}
        <span className={changeType ? "up" : "down"}>{changeNumber} today</span>
      </div>
    </Wrapper>
  );
};

export default MainStats;

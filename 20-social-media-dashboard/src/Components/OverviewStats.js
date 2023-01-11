import React from "react";

import Wrapper from "./OverviewStats.styled";
import { ReactComponent as IconUp } from "../assets/images/icon-up.svg";
import { ReactComponent as IconDown } from "../assets/images/icon-down.svg";

const OverviewStats = ({ label, icon, number, change, changeType }) => {
  return (
    <Wrapper>
      <div className="title">
        <h3>{label}</h3>
        {icon}
      </div>
      <div className="stats">
        <h4>{number}</h4>
        <span className={changeType ? "up" : "down"}>
          {changeType ? <IconUp /> : <IconDown />} {change}%
        </span>
      </div>
    </Wrapper>
  );
};

export default OverviewStats;

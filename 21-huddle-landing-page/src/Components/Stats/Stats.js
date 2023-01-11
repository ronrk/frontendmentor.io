import React from "react";
import Wrapper from "./Stats.styled";
import { ReactComponent as IconCommunity } from "../../assets/images/icon-communities.svg";
import { ReactComponent as IconMessages } from "../../assets/images/icon-messages.svg";

const Stats = () => {
  return (
    <Wrapper>
      <div className="stats__item">
        <IconCommunity className="stats__icon" />
        <h2 className="stats__title">1.4k+</h2>
        <span className="stats__text">Communities Formed</span>
      </div>
      <div className="stats__item">
        <IconMessages className="stats__icon" />
        <h2 className="stats__title">2.7m+</h2>
        <span className="stats__text">Messages Sent</span>
      </div>
    </Wrapper>
  );
};

export default Stats;

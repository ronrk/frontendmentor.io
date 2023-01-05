import React from "react";
import Wrapper from "./Content.styled";
import { LocationIcon } from "../assets/icons";
import { TwitterIcon } from "../assets/icons";
import { WebsiteIcon } from "../assets/icons";
import { CompanyIcon } from "../assets/icons";
import img from "../assets/Oval.png";

const Content = () => {
  return (
    <Wrapper className="box-bg">
      <img className="user-img" src={img} alt="" />
      <div className="user-name">
        <h2 className="fs-400 text-dark">NAME</h2>
        <span className="fs-200 text-primary">@username</span>
      </div>
      <div className="date fs-200 text-light">Date</div>
      <p className="description text-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nihil
        fugit inventore, veniam sed error quibusdam voluptas quis omnis dolorem.
      </p>
      <div className="stats-container app-bg">
        <div className="stats">
          <h3 className="text-light fs-200 fw-l">Repos</h3>
          <p className="text-dark fs-300 fw-b">8</p>
        </div>
        <div className="stats">
          <h3 className="text-light fs-200 fw-l">Followers</h3>
          <p className="text-dark fs-300 fw-b">2133</p>
        </div>
        <div className="stats">
          <h3 className="text-light fs-200 fw-l">Following</h3>
          <p className="text-dark fs-300 fw-b">213</p>
        </div>
      </div>
      <div className="user-info">
        <div className="text-light fs-300">
          <span>
            <LocationIcon className="icon" />
          </span>
          <p>location</p>
        </div>
        <div className="text-light fs-300">
          <span>
            <TwitterIcon className="icon" />
          </span>
          <p>twitter</p>
        </div>
        <div className="text-light fs-300">
          <span>
            <WebsiteIcon className="icon" />
          </span>
          <p>website</p>
        </div>
        <div className="text-light fs-300">
          <span>
            <CompanyIcon className="icon" />
          </span>
          <p>company</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Content;

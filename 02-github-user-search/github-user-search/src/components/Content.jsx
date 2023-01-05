import React from "react";
import Wrapper from "./Content.styled";
import { LocationIcon } from "../assets/icons";
import { TwitterIcon } from "../assets/icons";
import { WebsiteIcon } from "../assets/icons";
import { CompanyIcon } from "../assets/icons";
import img from "../assets/Oval.png";

const Content = ({ loading, user }) => {
  if (loading) {
    return <div>loading...</div>;
  }

  if (!user) {
    return;
  }

  const {
    name,
    login,
    created_at,
    bio,
    followers,
    avatar_url,
    following,
    location,
    public_repos,
    company,
    twitter_username,
    blog,
  } = user;

  const date = new Date(created_at);
  console.log();

  return (
    <Wrapper className="box-bg">
      <img className="user-img" src={img} alt="" />
      <div className="user-name">
        <h2 className="fs-400 text-dark">{name ? name : login}</h2>
        <span className="fs-200 text-primary">@{login}</span>
      </div>
      <div className="date fs-200 text-light">
        {date.toLocaleDateString("en")}
      </div>
      <p className="description text-light">
        {bio
          ? bio
          : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nihil
        fugit inventore, veniam sed error quibusdam voluptas quis omnis dolorem.`}
      </p>
      <div className="stats-container app-bg">
        <div className="stats">
          <h3 className="text-light fs-200 fw-l">Repos</h3>
          <p className="text-dark fs-300 fw-b">{public_repos}</p>
        </div>
        <div className="stats">
          <h3 className="text-light fs-200 fw-l">Followers</h3>
          <p className="text-dark fs-300 fw-b">{followers}</p>
        </div>
        <div className="stats">
          <h3 className="text-light fs-200 fw-l">Following</h3>
          <p className="text-dark fs-300 fw-b">{following}</p>
        </div>
      </div>
      <div className="user-info">
        <div
          className={
            location ? "text-light fs-200" : "text-light fs-200 unavaible"
          }
        >
          <span>
            <LocationIcon className="icon" />
          </span>
          <p>{location || "unavaible"}</p>
        </div>
        <div
          className={
            twitter_username
              ? "text-light fs-200"
              : "text-light fs-200 unavaible"
          }
        >
          <span>
            <TwitterIcon className="icon" />
          </span>
          <p>{twitter_username || "unavaible"}</p>
        </div>
        <div
          className={blog ? "text-light fs-200" : "text-light fs-200 unavaible"}
        >
          <span>
            <WebsiteIcon className="icon" />
          </span>
          <p>{blog || "unavaible"}</p>
        </div>
        <div
          className={
            company ? "text-light fs-200" : "text-light fs-200 unavaible"
          }
        >
          <span>
            <CompanyIcon className="icon" />
          </span>
          <p>{company || "unavaible"}</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Content;

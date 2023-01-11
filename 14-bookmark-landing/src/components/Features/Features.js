import React, { useState } from "react";
import Wrapper from "./Features.styled";
import FeatureArticle from "./FeatureArticle";
import { featuresArticles } from "../../utils";

const Features = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  let activeFeautre = featuresArticles[activeIdx];
  return (
    <Wrapper className="text-center">
      <h2 className="text-dark fs-800">Features</h2>
      <p className="text-light fs-600">
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>
      <ul className="tabs-container flex-c" id="feature">
        <li>
          <a
            href="#feature"
            onClick={() => {
              setActiveIdx(0);
            }}
            className={
              activeIdx === 0
                ? "fs-600 btn tab-btn active "
                : "fs-600 btn tab-btn "
            }
          >
            Simple Bookmarking
          </a>
        </li>
        <li>
          <a
            href="#feature"
            onClick={() => {
              setActiveIdx(1);
            }}
            className={
              activeIdx === 1
                ? "fs-600 btn tab-btn active"
                : "fs-600 btn tab-btn"
            }
          >
            Speedy Searching
          </a>
        </li>
        <li>
          <a
            href="#feature"
            onClick={() => {
              setActiveIdx(2);
            }}
            className={
              activeIdx === 2
                ? "fs-600 btn tab-btn active"
                : "fs-600 btn tab-btn"
            }
          >
            Easy Sharing
          </a>
        </li>
      </ul>
      <FeatureArticle {...activeFeautre} />
    </Wrapper>
  );
};

export default Features;

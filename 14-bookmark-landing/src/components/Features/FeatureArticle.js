import React from "react";
import Button from "../UI/Button";

const FeatureArticle = ({ title, text, img }) => {
  return (
    <div className="feature">
      <div className="bg"></div>
      <img src={img} alt="" />
      <div className="content fs-500">
        <h3 className="text-dark fw-m fs-700">{title}</h3>
        <p className="text-light fs-600">{text}</p>
        <Button className="fs-500 info-btn filled blue">More Info</Button>
      </div>
    </div>
  );
};

export default FeatureArticle;

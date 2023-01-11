import React from "react";

const AdvancedArticle = ({ title, icon, text }) => {
  return (
    <article className="advanced__article bg-white flex-c">
      <div className="advanced__img">
        <img src={icon} alt="" className="advanced__icon" />
      </div>
      <h3 className="text-dark fs-600">{title}</h3>
      <p className="text-light fs-500">{text}</p>
    </article>
  );
};

export default AdvancedArticle;

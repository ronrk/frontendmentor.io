import React from "react";
import Button from "../UI/Button/Button";
import Wrapper from "./APIResults.styled";

const APIResults = ({ links }) => {
  if (!links || links.length === 0) {
    return;
  }

  const clickHandler = (e, idx, link) => {
    console.log(e.target);
    navigator.clipboard.writeText(link);
    e.target.classList.add("copied");
    e.target.innerHTML = "Copied";
    setTimeout(() => {
      e.target.classList.remove("copied");
      e.target.innerHTML = "Copy";
    }, 5000);
  };

  return (
    <Wrapper>
      {links.map((item, idx) => {
        return (
          <div key={idx + item.value} className="shortening-box bg-white flex">
            <span className="fs-600">{item.value}</span>
            <hr />
            <a
              href={item.short}
              target="_blank"
              className="text-primary fs-600"
            >
              {item.short}
            </a>
            <Button
              onClick={(e) => clickHandler(e, idx, item.short)}
              className="filled primary text-white fs-500"
            >
              Copy
            </Button>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default APIResults;

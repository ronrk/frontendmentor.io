import React from "react";
import Wrapper from "./DestinationContent.styled";

const DestinationContent = ({ destination }) => {
  if (!destination) {
    return;
  }
  const { name, distance, travel, description } = destination;
  return (
    <Wrapper className="destination__content flow">
      <h2 className="fs-800 uppercase ff-serif">{name}</h2>
      <p>{description}</p>
      <div className="destination__meta flex">
        <div>
          <h3 className="text-light fs-200 uppercase">AVG. DISTANCE</h3>
          <p className=" ff-serif uppercase">{distance}</p>
        </div>
        <div>
          <h3 className="text-light fs-200 uppercase">Est. travel time</h3>
          <p className=" ff-serif uppercase">{travel}</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default DestinationContent;

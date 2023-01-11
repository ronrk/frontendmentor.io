import React from "react";
import Wrapper from "./CrewContent.styled";

const CrewContent = ({ crewMemeber, className }) => {
  if (!crewMemeber) return;
  const { name, role, bio } = crewMemeber;

  return (
    <Wrapper className={className + " flow"}>
      <header className="flow flow-space--small">
        <h2 className="fs-600 ff-serif uppercase">{role}</h2>
        <p className="fs-700 uppercase ff-serif">{name}</p>
      </header>
      <p>{bio}</p>
    </Wrapper>
  );
};

export default CrewContent;

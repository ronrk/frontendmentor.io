import React from "react";

import Wrapper from "./CTA.styled";

const CTA = () => {
  return (
    <Wrapper className="bg-red pm-3">
      <h2 className="fs-1 text-light fw-m">
        Simplify how your team works today.
      </h2>
      <button className="btn white-btn rounded bg-gray text-red fs-4 fw-b pi-2 pm-1">
        Get Started
      </button>
    </Wrapper>
  );
};

export default CTA;

import React from "react";
import Wrapper from "./MainSection.styled";

const MainSection = () => {
  return (
    <Wrapper className="padding">
      <div className="title">
        <h2 className="text-blue fs-2 fw-b pi-05">
          What’s different about Manage?
        </h2>
        <p className="text-gray fs-5 pi-05 primary-text">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <div className="container">
        <div className="box">
          <h3 className="fs-3 text-blue fw-b bg-red-pale">
            <span className="bg-red text-light pm-05 pi-2 rounded fs-4 fw-m">
              01
            </span>
            Track company-wide progress
          </h3>
          <p className="fs-5 text-gray">
            See how your day-to-day tasks fit into the wider vision. Go from
            tracking progress at the milestone level all the way done to the
            smallest of details. Never lose sight of the bigger picture again.
          </p>
        </div>
        <div className="box">
          <h3 className="fs-3 text-blue fw-b bg-red-pale">
            <span className="bg-red text-light pm-05 pi-2 rounded fs-4 fw-m">
              02
            </span>{" "}
            Advanced built-in reports
          </h3>
          <p className="fs-5 text-gray">
            Set internal delivery estimates and track progress toward company
            goals. Our customisable dashboard helps you build out the reports
            you need to keep key stakeholders informed.
          </p>
        </div>
        <div className="box">
          <h3 className="fs-3 text-blue fw-b bg-red-pale">
            <span className="bg-red text-light pm-05 pi-2 rounded fs-4 fw-m">
              03
            </span>
            Everything you need in one place
          </h3>
          <p className="fs-5 text-gray">
            Stop jumping from one service to another to communicate, store
            files, track tasks and share documents. Manage offers an all-in-one
            team productivity solution.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default MainSection;

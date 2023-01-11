import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "./HomePage.styled";

const HomePage = () => {
  return (
    <Wrapper className="grid-container flow" id="main">
      <div>
        <h1 className="text-light fs-600 ff-sans-conde upperecase letter-spacing-1">
          SO, YOU WANT TO TRAVEL TO
          <span className="text-white fs-900 ff-serif d-block">SPACE</span>
        </h1>

        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div>
        <Link
          to="/design"
          className="btn--explore bg-white text-dark uppercase ff-serif"
        >
          Explore
        </Link>
      </div>
    </Wrapper>
  );
};

export default HomePage;

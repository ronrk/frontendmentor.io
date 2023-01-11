import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import Wrapper from "./TechnologyPage.styled";
import { TechnologyContent } from "../../components";

const TechnologyPage = ({ technology }) => {
  const [technologyQuery, setTechnologyQuery] = useState("");
  const query = useQuery();

  useEffect(() => {
    setTechnologyQuery(query.get("query"));
  }, [query]);

  let activeTechnology = technology?.find((tech) => {
    return tech.name.replaceAll(" ", "").toLowerCase() === technologyQuery;
  });

  console.log(technology);

  return (
    <Wrapper className="grid-container flow" id="main">
      <h1 className="numbered-title">
        <span aria-hidden="true">03</span>space lunch 101
      </h1>
      <picture className="tech__img">
        <source srcSet={activeTechnology?.images.landscape} type="image/webp" />
        <img src={activeTechnology?.images.landscape} alt="technolgy" />
      </picture>
      <div className="numbers-indicators flex">
        <Link
          aria-selected={technologyQuery === "launchvehicle"}
          className="bg-dark btn text-white fs-400 ff-serif"
          to="/technology?query=launchvehicle"
        >
          1
        </Link>
        <Link
          aria-selected={technologyQuery === "spaceport"}
          className="bg-dark btn text-white fs-400 ff-serif"
          to="/technology?query=spaceport"
        >
          2
        </Link>
        <Link
          aria-selected={technologyQuery === "spacecapsule"}
          className="bg-dark btn text-white fs-400 ff-serif"
          to="/technology?query=spacecapsule"
        >
          3
        </Link>
      </div>
      <TechnologyContent
        className="tech__content"
        technology={activeTechnology}
      />
    </Wrapper>
  );
};
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default TechnologyPage;

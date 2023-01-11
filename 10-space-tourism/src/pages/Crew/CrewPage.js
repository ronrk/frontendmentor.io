import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { CrewContent } from "../../components";
import Wrapper from "./CrewPage.styled";

const CrewPage = ({ crew }) => {
  const [crewQuery, setCrewQuery] = useState("");
  const query = useQuery();

  useEffect(() => {
    setCrewQuery(query.get("query"));
  }, [query]);

  let activeCrew = crew?.find((crew) => {
    return crew.role.replaceAll(" ", "").toLowerCase() === crewQuery;
  });

  return (
    <Wrapper className="grid-container flow" id="main">
      <h1 className="numbered-title">
        <span aria-hidden="true">02</span>Meet your crew
      </h1>
      <CrewContent crewMemeber={activeCrew} className="crew__content" />
      <picture className="crew__img">
        <source srcSet={activeCrew?.images.webp} type="image/webp" />
        <img src={activeCrew?.images.png} alt="crew member" />
      </picture>

      <div className="dot-indicators flex">
        <Link
          aria-selected={crewQuery === "commander"}
          to="/crew?query=commander"
        >
          <span className="sr-only">The commander</span>
        </Link>
        <Link
          aria-selected={crewQuery === "missionspecialist"}
          to="/crew?query=missionspecialist"
        >
          <span className="sr-only">The mission spicialist</span>
        </Link>
        <Link aria-selected={crewQuery === "pilot"} to="/crew?query=pilot">
          <span className="sr-only">The pilot</span>
        </Link>
        <Link
          aria-selected={crewQuery === "flightengineer"}
          to="/crew?query=flightengineer"
        >
          <span className="sr-only">The crew engineer</span>
        </Link>
      </div>
    </Wrapper>
  );
};

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default CrewPage;

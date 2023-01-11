import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { DestinationContent } from "../../components";
import Wrapper from "./DestinationPage.styled";

const DestinationPage = ({ destinations }) => {
  const [destinationQuery, setDestinationQuery] = useState("");
  const query = useQuery();
  const navigate = useNavigate();

  useEffect(() => {
    setDestinationQuery(query.get("query"));
  }, [query]);

  let activeDestination = destinations?.find((destination) => {
    return destination.name.toLowerCase() === destinationQuery;
  });

  const handleTabChange = (value) => {
    navigate("/destination?query=" + value);
  };

  return (
    <Wrapper className="grid-container flow ">
      <h1 className="numbered-title fs-500">
        <span aria-hidden="true">01</span>Pick your destination
      </h1>
      <picture className="destination__img">
        <source srcSet={activeDestination?.images.webp} type="image/webp" />
        <img
          src={activeDestination?.images?.png}
          alt={activeDestination?.name}
        />
      </picture>

      <div className="tab-list underline-indicators flex">
        <button
          onClick={() => handleTabChange("moon")}
          aria-selected={destinationQuery === "moon"}
          className="uppercase ff-sans-cond text-light letter-spacing-2"
        >
          Moon
        </button>

        <button
          onClick={() => handleTabChange("mars")}
          aria-selected={destinationQuery === "mars"}
          className="uppercase ff-sans-cond text-light letter-spacing-2"
        >
          mars
        </button>

        <button
          onClick={() => handleTabChange("europa")}
          aria-selected={destinationQuery === "europa"}
          className="uppercase ff-sans-cond text-light letter-spacing-2"
        >
          europa
        </button>

        <button
          onClick={() => handleTabChange("titan")}
          aria-selected={destinationQuery === "titan"}
          className="uppercase ff-sans-cond text-light letter-spacing-2"
        >
          titan
        </button>
      </div>
      <DestinationContent destination={activeDestination} />
    </Wrapper>
  );
};

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

export default DestinationPage;

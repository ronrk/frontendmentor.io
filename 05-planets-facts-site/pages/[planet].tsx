import { GetServerSideProps } from "next";
import { data } from "../src/utils";
import React, { FC, useState } from "react";
import PlanetContent from "../src/components/planet/PlanetContent";
import PlanetImage from "../src/components/planet/PlanetImage";
import PlanetInfo from "../src/components/planet/PlanetInfo";
import PlanetsTabs from "../src/components/planet/PlanetsTabs";
import { IPlanet, TContent } from "../src/types/IPlanet";

import Wrapper from "../styles/PlanetPage.styled";

interface IProp {
  planet: IPlanet;
}

const PlanetPage: FC<IProp> = ({ planet }) => {
  const [curContext, setCurContext] = useState<TContent>("overview");

  const handleTabChange = (id: TContent): void => {
    setCurContext(id);
  };

  if (!planet) {
    return <>Planet invalid</>;
  }

  const { name, content, srcUrl, radius, revolution, rotation, avgTemp } =
    planet;

  return (
    <Wrapper>
      <PlanetImage name={name} curContext={curContext} />
      <PlanetContent
        name={name}
        curContext={curContext}
        context={content[curContext]}
        srcUrl={srcUrl}
      />
      <PlanetsTabs onClick={handleTabChange} curActive={curContext} />
      <PlanetInfo
        radius={radius}
        revolution={revolution}
        rotation={rotation}
        avgTemp={avgTemp}
      />
    </Wrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context.params);
  let props = {};
  const planet = data.find((p) => p.name === context.params?.planet);
  if (planet) {
    props = { planet };
  }

  return {
    props,
  };
};

export default PlanetPage;

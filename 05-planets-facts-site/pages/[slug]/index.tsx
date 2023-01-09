import { GetStaticPaths, GetStaticProps } from "next";
import { data } from "../../src/utils";
import React, { FC, useState } from "react";
import PlanetContent from "../../src/components/planet/PlanetContent";
import PlanetImage from "../../src/components/planet/PlanetImage";
import PlanetInfo from "../../src/components/planet/PlanetInfo";
import PlanetsTabs from "../../src/components/planet/PlanetsTabs";
import { IPlanet, TContent } from "../../src/types/IPlanet";
import classes from "../../styles/PlanetPage.module.css";
import Head from "next/head";

interface IProp {
  planet: IPlanet;
  context: TContent;
}

const PlanetPage: FC<IProp> = ({ planet, context }) => {
  const [curContext, setCurContext] = useState<TContent>("overview");

  const handleTabChange = (id: TContent): void => {
    setCurContext(id);
  };

  if (!planet) {
    return <>Planet invalid</>;
  }

  const { slug, content, srcUrl, radius, revolution, rotation, avgTemp } =
    planet;

  return (
    <>
      <Head>
        <title>{slug}</title>
        <meta name="description" content={content.overview} />
      </Head>
      <section className={`${classes.planet_page} ${slug}`}>
        <PlanetImage name={slug} curContext={curContext} />
        <PlanetContent
          name={slug}
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
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  let props;
  const planet = data.find((p) => p.slug === context.params?.slug);

  if (planet) {
    return {
      props: { planet },
    };
  }

  return {
    props: {},
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: data.map((planet) => ({ params: { slug: planet.slug } })),
    fallback: false,
  };
};

export default PlanetPage;

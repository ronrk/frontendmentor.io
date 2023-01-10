import Head from "next/head";
import Recommended from "../src/components/dashboard/Recommended";
import Trending from "../src/components/dashboard/Trending";

import data from "../data.json";
import { GetStaticProps } from "next";
import { IMedia } from "../src/types/media";
import { FC } from "react";

interface IProps {
  trendingMedia: IMedia[];
  allMedia: IMedia[];
}

const Home: FC<IProps> = ({ trendingMedia, allMedia }) => {
  return (
    <>
      <Head>
        <title></title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <main>
        <h2 className="text-heading-l">Trending</h2>
        <Trending media={trendingMedia} />

        <h2 className="text-heading-l">Recommended for you</h2>
        <Recommended media={allMedia} />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const trendingMedia = data.filter((media) => media.isTrending);
  const allMedia = data;

  return {
    props: { trendingMedia, allMedia },
  };
};

export default Home;

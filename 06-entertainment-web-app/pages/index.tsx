import Head from "next/head";
import Recommended from "../src/components/dashboard/Recommended";
import Trending from "../src/components/dashboard/Trending";
import data from "../data/data.json";
import { GetStaticProps } from "next";
import { IMedia } from "../src/types/media";
import { FC } from "react";
import { getAllMedia } from "../src/utils/media-server-utils";

interface IProps {
  trendingMedia: IMedia[];
  allMedia: IMedia[];
}

const Home: FC<IProps> = ({ allMedia, trendingMedia }) => {
  return (
    <>
      <Head>
        <title></title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>

      <section>
        <h2 className="text-heading-l">Trending</h2>
        <Trending media={data} />
      </section>

      <Recommended media={data} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { allMedia, trendingMedia } = getAllMedia();

    return {
      props: {
        allMedia,
        trendingMedia,
      },
    };
  } catch (error) {
    return {
      props: {
        error: error,
      },
    };
  }
};

export default Home;

import Head from "next/head";
import Recommended from "../src/components/dashboard/Recommended";
import Trending from "../src/components/dashboard/Trending";

import { GetStaticProps } from "next";
import { IMedia } from "../src/types/media";
import { FC } from "react";
import { getAllMedia, getTrendingMedia } from "../src/utils/media-utils";

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

      <section>
        <h2 className="text-heading-l">Trending</h2>
        <Trending media={trendingMedia} />
      </section>

      <Recommended media={allMedia} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const allMedia: IMedia[] = await getAllMedia();
    const trendingMedia: IMedia[] = await getTrendingMedia();
    const sortedMedia = allMedia.sort((m) => (m.isBookmarked ? 1 : -1));
    return {
      props: {
        allMedia: sortedMedia,
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

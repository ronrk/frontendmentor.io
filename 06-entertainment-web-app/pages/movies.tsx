import { GetServerSideProps } from "next";
import React, { FC } from "react";
import MediaGrid from "../src/components/media/MediaGrid";
import { IPageProps } from "../src/types/media";
import { getMediaByCategory } from "../src/utils/media-utils";

const MoviesPage: FC<IPageProps> = ({ media }) => {
  return <MediaGrid media={media} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const moviesMedia = await getMediaByCategory("Movie");

  return {
    props: {
      media: moviesMedia,
    },
  };
};

export default MoviesPage;

import { GetServerSideProps } from "next/types";
import React, { FC } from "react";
import MediaGrid from "../src/components/media/MediaGrid";
import { IPageProps } from "../src/types/media";
import { getMediaByCategory } from "../src/utils/media-utils";

const TvPage: FC<IPageProps> = ({ media }) => {
  return (
    <>
      <h2 className="text-heading-l">TV Series</h2>
      <MediaGrid media={media} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const tvMedia = await getMediaByCategory("TV Series");

  return {
    props: {
      media: tvMedia,
    },
  };
};
export default TvPage;

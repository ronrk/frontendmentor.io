import { GetServerSideProps } from "next";
import React, { FC } from "react";
import MediaGrid from "../src/components/media/MediaGrid";
import { IPageProps } from "../src/types/media";
import { getBookmarkedMedia } from "../src/utils/media-server-utils";

const BookmarkPage: FC<IPageProps> = ({ media }) => {
  return (
    <>
      <h2 className="text-heading-l">Bookmarked</h2>
      <MediaGrid media={media} />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const bookmarkedMedia = getBookmarkedMedia();
  return {
    props: {
      media: bookmarkedMedia,
    },
  };
};

export default BookmarkPage;

import { GetServerSideProps } from "next";
import React, { FC } from "react";
import SingleItem from "../src/components/single-item/SingleItem";
import { IItemDetail } from "../src/types/IItemDetail";

interface IProps {
  galleryItem: IItemDetail | null;
  status: string;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  let props: IProps = {
    galleryItem: null,
    status: "",
  };
  const { id } = context.query;

  try {
    const res = await fetch(`http://localhost:3001/api/gallery?id=${id}`);
    const data = await res.json();

    const { galleryItem } = data;

    props.galleryItem = galleryItem;
  } catch (error) {
    props.galleryItem = null;
    props.status = "error";
    console.log(error);
  }

  return { props };
};

const SlideshowPage: FC<IProps> = ({ galleryItem, status }) => {
  console.log({ galleryItem, status });
  if (!galleryItem) {
    return <></>;
  }

  return <SingleItem galleryItem={galleryItem} />;
};

export default SlideshowPage;

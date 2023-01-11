import Image from "next/image";
import React, { FC } from "react";

interface IProps {
  name: string;
  author: string;
  authorImg: string;
}

const ItemHeader: FC<IProps> = ({ name, author, authorImg }) => {
  return (
    <header>
      <h2>{name}</h2>
      <h3>{author}</h3>
      <Image
        src={authorImg?.replace(".", "") || ""}
        alt={author}
        width={100}
        height={100}
      />
    </header>
  );
};

export default ItemHeader;

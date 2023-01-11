import Image from "next/image";
import React, { FC } from "react";

interface IProps {
  image: string;
  name: string;
}

const ItemImage: FC<IProps> = ({ image, name }) => {
  return (
    <div>
      <Image
        src={image?.replace(".", "") || ""}
        alt={name}
        width={100}
        height={100}
      />
    </div>
  );
};

export default ItemImage;

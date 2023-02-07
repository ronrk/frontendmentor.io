import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";
import LinkIcon from "../../ui/LinkIcon";

interface IProps {
  imageSrc: StaticImageData;
  title: string;
  path: string;
}

const Category: FC<IProps> = ({ imageSrc, title, path }) => {
  return (
    <li className="category flex-col bg-white">
      <div className="image__wrapper">
        <Image src={imageSrc} alt={title} fill />
      </div>
      <h3 className="sub-heading text-black">{title}</h3>
      <LinkIcon path={path} />
    </li>
  );
};

export default Category;

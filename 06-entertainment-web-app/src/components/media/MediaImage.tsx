import Image from "next/image";
import { FC } from "react";
import Wrapper from "./MediaImage.styled";

interface IProps {
  title: string;
  imgSrc: string;
}

const MediaImage: FC<IProps> = ({ title, imgSrc }) => {
  return (
    <Wrapper>
      <Image src={imgSrc} alt={title} width={300} height={300} />
    </Wrapper>
  );
};

export default MediaImage;

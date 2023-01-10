import Image from "next/image";
import { FC } from "react";
import { IMediaImage } from "../../types/media";
import Wrapper from "./MediaImage.styled";

const MediaImage: FC<IMediaImage> = ({ title, imgSrc }) => {
  return (
    <Wrapper className="media_image">
      <Image src={imgSrc} alt={title} fill={true} />
    </Wrapper>
  );
};

export default MediaImage;

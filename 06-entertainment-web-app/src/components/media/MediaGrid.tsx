import React, { FC } from "react";
import { IComponentProps } from "../../types/media";
import MediaItem from "./MediaItem";

import Wrapper from "./MediaGrid.styled";

const MediaGrid: FC<IComponentProps> = ({ media }) => {
  return (
    <Wrapper>
      {media.map((m) => (
        <MediaItem key={m.title} layout={"gallery"} {...m} />
      ))}
    </Wrapper>
  );
};

export default MediaGrid;

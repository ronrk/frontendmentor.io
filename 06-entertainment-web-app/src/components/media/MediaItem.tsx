import React, { FC } from "react";
import { IMedia } from "../../types/media";
import MediaDetails from "./MediaDetails";
import MediaImage from "./MediaImage";

interface IProps {
  media: IMedia;
}

const MediaItem: FC<IProps> = ({ media }) => {
  return (
    <div className="media">
      <MediaDetails {...media} />
      <MediaImage {...media} />
    </div>
  );
};

export default MediaItem;

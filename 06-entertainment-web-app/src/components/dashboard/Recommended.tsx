import { FC } from "react";
import { IMedia } from "../../types/media";
import MediaItem from "../media/MediaItem";
import Wrapper from "./Recommended.styled";

const Recommended: FC<{ media: IMedia[] }> = ({ media }) => {
  console.log(media);
  return (
    <div className="recommended">
      {media.map((m) => (
        <MediaItem key={m.title} media={m} />
      ))}
    </div>
  );
};

export default Recommended;

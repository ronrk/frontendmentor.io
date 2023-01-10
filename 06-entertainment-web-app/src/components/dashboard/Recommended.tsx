import { FC } from "react";
import { IComponentProps } from "../../types/media";
import MediaGrid from "../media/MediaGrid";

const Recommended: FC<IComponentProps> = ({ media }) => {
  console.log(media);
  return (
    <section>
      <h2 className="text-heading-l">Recommended for you</h2>
      <MediaGrid media={media} />
    </section>
  );
};

export default Recommended;

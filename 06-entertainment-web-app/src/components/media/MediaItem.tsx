import React, { FC } from "react";
import { IMediaItemProps } from "../../types/media";
import { IconBookmarkEmpty, IconBookmarkFull, IconPlay } from "../ui/icons";
import MediaActions from "./MediaActions.styled";
import MediaDetails from "./MediaDetails";
import MediaImage from "./MediaImage";
import Wrapper from "./MediaItem.styled";

const MediaItem: FC<IMediaItemProps> = ({
  title,
  imgSrc,
  year,
  category,
  rating,
  isBookmarked,
  isTrending,
  layout,
}) => {
  return (
    <Wrapper className={`media ${layout}`}>
      <MediaImage
        title={title}
        imgSrc={imgSrc}
        year={year}
        category={category}
        rating={rating}
        isBookmarked={isBookmarked}
        isTrending={isTrending}
      />
      <MediaDetails
        title={title}
        category={category}
        rating={rating}
        year={year}
      />
      <MediaActions className="media_actions">
        <button className="btn-bookmark">
          {isBookmarked ? (
            <IconBookmarkFull className="icon" />
          ) : (
            <IconBookmarkEmpty className="icon" />
          )}
        </button>
        <button className="btn-play">
          <IconPlay className="icon" />
          <span className="text-body-m">Play</span>
        </button>
      </MediaActions>
    </Wrapper>
  );
};

export default MediaItem;

import { FC, useRef, useState } from "react";
import { IComponentProps } from "../../types/media";
import MediaItem from "../media/MediaItem";
import Wrapper from "./Trending.styled";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Trending: FC<IComponentProps> = ({ media }) => {
  const [scroll, setScroll] = useState<number>(0);
  const handleClickRight = () => {
    setScroll((prev) => {
      if (prev < -60) {
        return 0;
      }
      return prev - 20;
    });
  };

  const handleClickLeft = () => {
    setScroll((prev) => {
      if (prev >= 0) {
        return 0;
      }
      return prev + 20;
    });
  };

  return (
    <Wrapper className="trending">
      <button className="icon-btn icon-btn-left" onClick={handleClickLeft}>
        <AiOutlineArrowLeft className="icon" />
      </button>

      <div
        className="trending_inner flex"
        id="trending"
        style={{ transform: `translateX(${scroll}%)` }}
      >
        {media.map((m) => (
          <MediaItem layout={"trending"} key={m.title} {...m} />
        ))}
      </div>

      <button className="icon-btn icon-btn-right" onClick={handleClickRight}>
        <AiOutlineArrowRight className="icon" />
      </button>
    </Wrapper>
  );
};

export default Trending;

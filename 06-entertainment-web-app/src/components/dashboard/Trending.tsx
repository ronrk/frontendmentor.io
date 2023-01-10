import { FC } from "react";
import { IMedia } from "../../types/media";
import Wrapper from "./Trending.styled";

interface IProps {
  media: IMedia[];
}

const Trending: FC<IProps> = ({ media }) => {
  console.log(media);
  return <Wrapper className="trending"></Wrapper>;
};

export default Trending;

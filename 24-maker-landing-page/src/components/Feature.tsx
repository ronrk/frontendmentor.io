import { FC } from "react";
import Wrapper from "./Feature.styled";

interface IProps {
  img: string;
  title: string;
  context: string;
}

const Feature: FC<IProps> = ({ img, title, context }) => {
  return (
    <Wrapper className="text-center">
      <div className="image-wrapper bg-secondary">
        <img src={img} alt={title} />
      </div>
      <div className="content">
        {" "}
        <h3 className="fs-500 text-white fw-m line-h-2">{title}</h3>
        <p className="fs-400 text-white-5 line-h-1">{context}</p>
      </div>
    </Wrapper>
  );
};

export default Feature;

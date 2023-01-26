import { FC } from "react";
import StyledLink from "../ui/StyledLink";
import Wrapper from "./Card.styled";

export enum ColorType {
  WHITE = "white",
  PRIMARY = "primary",
  SECONDARY = "secondary",
  RED = "red",
  DARK = "dark",
}

interface IProps {
  type: string;
  price: string;
  title: string;
  listItems: string[];
  color: ColorType;
}

const Card: FC<IProps> = ({ type, price, title, listItems, color }) => {
  const textColor = color === "white" ? "text-dark" : "text-white";

  return (
    <Wrapper color={color}>
      <span className={`type fs-800 fw-b ${textColor}-2 text-h-900`}>
        {type}
      </span>
      <div className="content">
        <h2 className={`fs-900 ${textColor}-2 text-h-900`}>{price}</h2>
        <p className={`fs-600 ${textColor}-2 text-h-800`}>{title}</p>
      </div>
      <ul>
        {listItems.map((item, i) => (
          <li key={i} className={` fs-700 ${textColor}`}>
            {item}
          </li>
        ))}
      </ul>
      <StyledLink
        className="link fs-800"
        to="/register"
        color={color === "white" ? ColorType.SECONDARY : ColorType.WHITE}
        text={color !== "white" ? ColorType.PRIMARY : ColorType.WHITE}
      >
        Try for Free
      </StyledLink>
    </Wrapper>
  );
};

export default Card;

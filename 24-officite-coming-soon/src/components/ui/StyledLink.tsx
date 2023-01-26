import styled from "styled-components";
import { Link } from "react-router-dom";
import { ColorType } from "../Card/Card";

interface IProps {
  color: ColorType;
  text: ColorType.WHITE | ColorType.PRIMARY;
  shadow?: boolean;
}

const StyledLink = styled(Link)<IProps>`
  z-index: 10000;
  text-decoration: none;
  padding: 1rem 3rem;
  background-color: ${({ color }) =>
    color === "primary"
      ? "hsl(var(--clr-primary))"
      : color === "secondary"
      ? "hsl(var(--clr-secondary))"
      : color === "white"
      ? "#fff"
      : ""};
  box-shadow: ${({ shadow }) =>
    shadow ? "0px 25px 25px -10px rgba(63, 91, 194, 0.247159)" : ""};
  color: ${({ text }) =>
    text === "white" ? "#fff" : "hsl(var(--clr-primary))"};
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    filter: brightness(80%) saturate(200%);
  }
`;

export default StyledLink;

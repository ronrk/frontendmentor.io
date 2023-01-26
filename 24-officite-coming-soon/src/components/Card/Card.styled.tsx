import styled from "styled-components";
import { ColorType } from "./Card";
import bg from "../../assets/home/bg-pattern-pricing.svg";

interface IProps {
  color: ColorType;
}

const StyledCard = styled.article<IProps>`
  text-align: center;
  background-color: ${({ color }) =>
    color === "white" ? "#fff" : "hsl(var(--clr-primary))"};
  background-image: ${({ color }) => (color === "white" ? "" : `url(${bg})`)};
  background-position: top;
  background-repeat: no-repeat;
  background-size: contain;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  margin-block: 3rem;
  padding-block: 2rem 3rem;
  border-radius: 9px;

  & ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media screen and (min-width: 750px) {
    text-align: left;
    padding: 2rem;
    justify-items: start;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "type list"
      "content list"
      "link list";

    & ul {
      grid-area: list;
      justify-self: end;
    }
    & .type {
      grid-area: type;
    }
    & .content {
      grid-area: content;
    }
    & .link {
      grid-area: link;
    }
  }
  @media screen and (min-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-block: 2rem 3rem;
    max-width: 30%;
    min-width: 350px;
    aspect-ratio: 0.6;
  }
`;

export default StyledCard;

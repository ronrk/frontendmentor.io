import styled from "styled-components";
import bgLeft from "../assets/images/pattern-rings.svg";
import bgRight from "../assets/images/pattern-circle.svg";

const HeroWrapper = styled.header`
  position: relative;
  margin-block: 2rem;
  &::before {
    content: "";
    width: 100%;
    height: 100%;
    max-width: 550px;
    display: block;
    position: absolute;
    background-image: url(${bgLeft});
    background-repeat: no-repeat;
    /* background-position: -20rem 3rem; */
    background-size: contain;
    left: -20rem;
    top: 2rem;
  }

  &::after {
    background-image: url(${bgRight});
    background-repeat: no-repeat;
    background-size: fill;
    content: "";
    position: absolute;
    top: 30%;
    right: -85%;
    width: 100%;
    height: 100%;
  }
  & picture {
    width: 100%;
    z-index: 3;
    position: relative;
    display: blockx;
  }

  & img {
    display: block;
    width: 60%;
    margin-inline: auto;

    background: linear-gradient(
      180deg,
      rgba(36, 36, 36, 0.0001) 0.65%,
      #242424 100%
    );
  }

  & h1 {
    margin-block: 2rem;
    & span {
      border-bottom: 4px solid hsl(var(--clr-primary));
    }
  }
  & p {
    margin-bottom: 3rem;
    letter-spacing: 2px;
    line-height: 1.3;
  }

  @media screen and (min-width: 700px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 2em;
    padding-block: 4rem;
    & picture {
      order: 2;
      height: 100%;
      width: 50%;
      position: absolute;
      right: 0;
      z-index: 0;

      & img {
        height: 100%;
        width: 100%;
        object-fit: contain;
        background: 0;
      }
    }
    & .content {
      width: 70%;
      text-align: left;
      z-index: 1000;
    }

    &::after {
      top: 70%;
      right: -70%;
    }
  }
`;

export default HeroWrapper;

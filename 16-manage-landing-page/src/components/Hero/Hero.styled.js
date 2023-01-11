import styled from "styled-components";
import bgMobile from "../../images/bg-tablet-pattern.svg";

const HeroWrapper = styled.div`
  background-image: url(${bgMobile});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: 100% -30%;

  overflow: visible;

  text-align: center;

  & .hero__img {
    width: 100%;
    max-width: 400px;
    margin-inline: auto;
  }
  & h1 {
    margin-bottom: 0.3em;
  }
  & p {
    width: 70%;
    margin-inline: auto;
    line-height: 1.5em;
  }

  @media screen and (min-width: 800px) {
    display: flex;
    align-items: center;
    text-align: left;

    & .hero__content {
      order: 0;

      & p {
        margin: 0;
      }
      & .red-btn {
        margin-inline: 0;
      }
    }
    & .hero__img {
      order: 1;
    }
  }
`;

export default HeroWrapper;

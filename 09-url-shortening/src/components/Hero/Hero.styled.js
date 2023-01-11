import styled from "styled-components";

const HeroWrapper = styled.div`
  text-align: center;
  & h1 {
    line-height: 1;
    margin-bottom: 0.3em;
  }

  & .hero__img {
    max-width: 200%;
    transform: translateX(10vw);
    margin-block: -3em 2.5em;
  }
  & p {
    line-height: 1.6;
  }

  & button {
    margin-top: 1.5em;
  }

  @media screen and (min-width: 850px) {
    display: flex;
    align-items: center;
    gap: 2rem;
    text-align: left;
    justify-content: space-between;
    & .content {
      /* order: 0; */
      max-width: 50ch;
    }
    & .hero__img {
      transform: translate(0);
      order: 2;
      max-width: 100%;
      width: 50%;
      margin: 0;
    }
  }
`;

export default HeroWrapper;

import styled from "styled-components";

const HeroWrapper = styled.header`
  display: grid;
  grid-template-rows: 50% 50%;
  justify-items: start;
  row-gap: 3.5rem;

  @media screen and (min-width: 700px) {
    grid-template-rows: 60vh;
    grid-template-columns: 60% 40%;
  }

  & .hero__img {
    width: 100%;
    min-height: 100%;
    max-height: 100%;
    object-fit: fill;
    grid-row: 1/2;
    grid-column: 1/-1;

    @media screen and (min-width: 700px) {
      grid-column: 1/1;
      grid-row: 1/3;
      width: 100%;
      height: auto;
    }
  }

  & .slider {
    grid-row: 1/2;
    grid-column: 1/-1;
    align-self: end;
    justify-self: end;

    @media screen and (min-width: 700px) {
      grid-column: 1/2;
      grid-row: 2/3;
      align-self: end;
      justify-content: end;
    }
  }

  & .hero__content {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.7em;

    & p {
      margin-bottom: 1.8rem;
    }

    button {
      letter-spacing: 0.6em;
      align-items: center;
    }

    @media screen and (min-width: 700px) {
      grid-column: 2/3;
      grid-row: 1/-1;
      align-self: center;
      margin-top: 4rem;
      /* justify-self: center; */

      & p {
        margin-top: 2rem;
      }
    }
  }
`;

export default HeroWrapper;

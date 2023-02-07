import styled from "styled-components";

const HeroWrapper = styled.header`
  padding-block: 3rem 6rem;
  & .hero {
    display: grid;
    grid-template-columns: min-content 1fr;

    & .image__wrapper {
      width: 100%;
      aspect-ratio: 1.5;
      z-index: 1;
      mix-blend-mode: difference;
      justify-self: flex-end;
    }
    & .content {
      grid-row: 1/2;
      grid-column: 1/2;
      z-index: 10;
      justify-content: center;
      align-items: flex-start;

      & p {
        max-width: 40ch;
      }
    }
  }

  @media screen and (max-width: 1250px) {
    & .hero {
      grid-template-columns: 1fr;
      align-items: center;
      justify-content: center;
      & .image__wrapper {
        grid-column: 1/2;
        grid-row: 1/2;
        height: 100%;
        aspect-ratio: 1.5;
        min-width: 100%;
        justify-self: stretch;
      }
      & .content {
        padding: 1rem;
        text-align: center;
        grid-column: 1/2;
        grid-row: 1/2;
        z-index: 222;
        background-color: transparent;
        align-items: center;

        & p {
          max-width: 50%;
        }
      }
    }
  }
`;

export default HeroWrapper;

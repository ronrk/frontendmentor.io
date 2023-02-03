import styled from "styled-components";

const HeroWrapper = styled.header`
  padding-block: 3rem 6rem;
  & .container {
    display: grid;
    grid-template-columns: min-content 1fr;

    & .image__wrapper {
      width: 100%;
      aspect-ratio: 2;
      z-index: 1;
      mix-blend-mode: difference;

      & img {
      }
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
`;

export default HeroWrapper;

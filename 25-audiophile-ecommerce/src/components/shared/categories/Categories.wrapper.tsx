import styled from "styled-components";

const CategoriesWrapper = styled.section`
  margin-block: 15rem 7rem;
  & ul {
    justify-content: space-evenly;
  }

  & .category {
    position: relative;
    padding: 4rem 1rem 1rem;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    --gap: 0.5rem;
    aspect-ratio: 3;

    & .image__wrapper {
      position: absolute;
      top: -6rem;
      width: 150px;
      max-width: 80%;
      aspect-ratio: 1;
    }
  }

  @media screen and (max-width: 850px) {
    & .category {
      padding: 1rem 2rem;
    }
  }
  @media screen and (max-width: 600px) {
    margin-block: 10rem 5rem;
    min-width: 100%;
    & ul {
      flex-direction: column;
      align-items: stretch;
      min-width: 100%;
      & li {
        min-width: 100%;
      }
    }
    & .category {
      margin-block: 3rem;
      padding: 0;
    }
  }
`;

export default CategoriesWrapper;

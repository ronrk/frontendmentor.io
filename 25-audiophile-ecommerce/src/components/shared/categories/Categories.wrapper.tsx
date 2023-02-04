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
      top: -5rem;
      width: 150px;
      aspect-ratio: 1;
    }
  }
`;

export default CategoriesWrapper;

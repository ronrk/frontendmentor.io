import styled from "styled-components";

const RelativeProductsWrapper = styled.section`
  justify-content: space-evenly;
  align-items: baseline;
  --gap: 0;
  & .product {
    align-items: center;
    --gap: 1rem;
    & .image__wrapper {
      width: 20vw;
      max-width: 500px;
      aspect-ratio: 1;
    }
  }
`;

export default RelativeProductsWrapper;

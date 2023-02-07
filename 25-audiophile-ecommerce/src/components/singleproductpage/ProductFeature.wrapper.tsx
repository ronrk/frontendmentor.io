import styled from "styled-components";

const ProductFeatureWrapper = styled.section`
  /* justify-content: space-between; */
  --gap: 5rem;
  & .features {
    max-width: 60%;
  }
  & .in-box {
    --gap: 1rem;
    & li {
      align-items: center;
      justify-content: flex-start;
    }
  }
  @media screen and (max-width: 650px) {
    flex-direction: column;
    align-self: flex-start;
    & .features {
      max-width: 100%;
    }
  }
`;
export default ProductFeatureWrapper;

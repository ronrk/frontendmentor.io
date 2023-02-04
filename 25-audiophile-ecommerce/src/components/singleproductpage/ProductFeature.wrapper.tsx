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
`;
export default ProductFeatureWrapper;

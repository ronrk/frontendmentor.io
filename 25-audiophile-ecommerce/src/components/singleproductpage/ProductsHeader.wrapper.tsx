import styled from "styled-components";

const ProductHeaderWrapper = styled.header`
  margin-top: 5rem;
  justify-content: space-between;
  --gap: 6rem;
  & .image__wrapper {
    width: 50%;
    aspect-ratio: 1;
  }

  & .content {
    align-self: center;
    align-items: center;
    max-width: 50%;
  }

  & .actions {
    --gap: 1.5rem;

    & .quantity-actions {
      padding: 1rem 2rem;

      align-items: center;
      justify-content: space-around;
      --gap: 2.5rem;
      & button {
      }
      & p {
      }
    }
  }
`;

export default ProductHeaderWrapper;

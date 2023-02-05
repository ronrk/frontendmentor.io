import styled from "styled-components";

const CheckoutCartWrapper = styled.aside`
  align-self: start;
  padding: 1rem;
  border-radius: 6px;

  & .cart__item {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    align-items: center;
    gap: 0.5rem;
    & .image__wrapper {
      width: 80px;
      aspect-ratio: 1;
      border-radius: 7px;
      & img {
        border-radius: 7px;
      }
    }
  }
  & .totals-row {
    justify-content: space-between;
    align-items: center;
  }
`;

export default CheckoutCartWrapper;

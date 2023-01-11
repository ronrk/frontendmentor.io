import styled from "styled-components";

const CartItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  grid-template-rows: repeat(2, min-content);
  align-items: center;
  column-gap: 1rem;
  & .product_img {
    display: block;
    height: 5rem;
    width: 5rem;
    grid-column: 1/2;
    grid-row: 1/3;
    border-radius: 3px;
  }

  & .title {
    grid-column: 2/3;
    grid-row: 1/2;
    color: var(--text-light);
    font-size: 1.4rem;
  }

  & .price {
    grid-column: 2/3;
    grid-row: 2/3;
    color: var(--text-light);
    font-size: 1.3rem;
    letter-spacing: 0.3px;

    & .total-price {
      font-weight: 700;
      color: var(--text-dark);
      font-size: 1.5rem;
    }
  }

  & .btn-remove {
    grid-column: 3/4;
    grid-row: 1/3;

    &:hover {
      & svg {
        & path {
          fill: var(--orange);
        }
      }
    }
  }
`;

export default CartItemWrapper;

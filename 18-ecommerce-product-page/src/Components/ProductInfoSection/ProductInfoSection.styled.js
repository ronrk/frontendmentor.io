import styled from "styled-components";

const ProductInfoSectionWrapper = styled.div`
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 50%;
  @media screen and (max-width: 850px) {
    width: 100%;
    align-items: stretch;
    padding: 0 3rem;
  }

  & .product-info__description {
    font-size: 1.6rem;
    color: var(--text-light);
    max-width: 60ch;
    line-height: 1.3;
  }

  & .product-info__price {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(2, min-content);
    grid-template-rows: repeat(2, min-content);
    align-items: center;
    gap: 0.7rem;
    column-gap: 2rem;
    margin-bottom: 3rem;

    @media screen and (max-width: 850px) {
      display: flex;
      justify-content: space-between;
    }

    & .price__final {
      font-size: 2.3rem;
      font-weight: 700;
      color: var(--text-dark);
    }

    & .price__discount {
      color: var(--orange);
      font-size: 1.15rem;
      font-weight: 700;
      background-color: var(--pale-orange);
      padding: 0.3rem 0.6rem;
      border-radius: 1px;
      @media screen and (max-width: 850px) {
        margin-right: auto;
      }
    }

    & .price__original {
      color: var(--text-light);
      text-decoration: line-through;
      font-size: 1.1rem;
    }
  }

  & .product-info__actions {
    display: flex;
    justify-content: center;
    width: 70%;
    gap: 5rem;
    @media screen and (max-width: 850px) {
      flex-direction: column;
      align-items: stretch;
      width: 100%;
      gap: 1rem;
    }

    & .counter {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: var(--grey-light);
      border-radius: 7px;
      padding: 1.5rem 3.5rem;

      & .count {
        font-size: 1.4rem;
        margin: 0 3rem;
        font-weight: 700;
      }
    }
  }

  & .btn-addToCart {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.6rem;
    font-weight: 700;
    font-size: 1.5rem;
    letter-spacing: 1.1px;
    @media screen and (max-width: 850px) {
      padding: 1.6rem 3rem;
    }

    & svg {
      & > * {
        fill: currentColor;
      }
    }
  }
`;

export default ProductInfoSectionWrapper;

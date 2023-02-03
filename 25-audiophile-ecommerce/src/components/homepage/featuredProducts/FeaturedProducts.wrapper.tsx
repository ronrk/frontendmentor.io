import styled from "styled-components";

const FeaturedProductsWrapper = styled.section`
  margin-bottom: 6rem;
  & .product-section {
    & p,
    & .bg__image {
      display: none;
    }
    &.primary {
      overflow: hidden;
      border-radius: 5px;
      display: grid;
      justify-content: center;
      justify-items: center;
      grid-template-columns: 1fr 1fr;
      background-color: hsl(var(--clr-primary));
      height: 30vw;
      & .content {
        align-items: flex-start;
        align-self: center;
        & h2 {
          max-width: 3ch;
        }
        & p {
          max-width: 45ch;
        }
      }
      & p,
      & .bg__image {
        display: block;
      }
      & .bg__image {
        position: absolute;
        width: 100%;
        height: 100%;
        min-width: 1000px;
        /* aspect-ratio: 1; */
        bottom: 0rem;
        left: -18rem;
        z-index: 10;
        & img {
          object-fit: cover;
        }
      }

      & .product__image {
        aspect-ratio: 1;
        max-width: 60%;
        height: 70%;
        align-self: end;
        & img {
          z-index: 20;
        }
      }
    }
    &.secondary {
      border-radius: 5px;
      display: grid;
      grid-template-columns: 1fr;

      & .product__image {
        border-radius: 5px;
        grid-row: 1/2;
        grid-column: 1/2;
        width: 100%;
        aspect-ratio: 4;
        z-index: 10;

        & img {
          object-fit: cover;
        }
      }
      & .content {
        padding: 4rem;
        grid-row: 1/2;
        grid-column: 1/2;
        z-index: 30;
        align-items: flex-start;
        justify-content: center;
      }
    }
    &.seperate {
      border-radius: 5px;
      display: flex;
      justify-content: center;
      gap: 1.5rem;

      & > * {
        width: 50%;
      }
      & .content {
        padding: 3rem;
        align-items: flex-start;
        justify-content: center;
      }
      & .product__image {
        border-radius: 5px;
        aspect-ratio: 2;
      }
    }
  }
`;

export default FeaturedProductsWrapper;

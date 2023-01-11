import styled from "styled-components";

const ProductGallerySectionWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(2, min-content);
  grid-template-columns: 1fr;
  justify-items: center;
  row-gap: 2rem;
  width: 50%;
  @media screen and (max-width: 850px) {
    width: 100%;
    position: relative;
  }

  & .btn {
    display: none;
    position: absolute;
    top: 50%;
    background-color: var(--white);
    padding: 1rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 2rem;
    &.btn-next {
      right: 0;
    }
    &.btn-prev {
      left: 0;
    }
    @media screen and (max-width: 850px) {
      display: block;
    }
  }
  & .current-img {
    display: block;
    width: 41rem;
    grid-row: 1/2;
    grid-column: 1/2;
    border-radius: 5px;
    cursor: pointer;
    @media screen and (max-width: 850px) {
      width: 100%;
      height: 40rem;
    }
  }

  & .product-images__gallery {
    grid-row: 2/3;
    grid-column: 1/2;
    display: flex;
    justify-content: center;
    gap: 3rem;
    align-items: center;

    @media screen and (max-width: 850px) {
      display: none;
    }

    & img {
      height: 8rem;
      cursor: pointer;
      border-radius: 7px;

      &.active {
        border: 3px solid var(--orange);
        filter: invert(30%);
      }
    }
  }
`;

export default ProductGallerySectionWrapper;

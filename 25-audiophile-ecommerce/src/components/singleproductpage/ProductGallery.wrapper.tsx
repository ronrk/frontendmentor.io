import styled from "styled-components";

const ProductGalleryWrapper = styled.section`
  display: grid;
  grid-template-columns: minmax(40%, 460px) minmax(60%, 640px);
  gap: 2rem;

  & .image__wrapper {
    border-radius: 10px;
    & img {
      border-radius: 10px;
    }
    &:nth-child(1) {
      grid-column: 1/2;
      grid-row: 1/2;
      /* height: 100%; */
      /* width: 100%; */
    }
    &:nth-child(2) {
      grid-column: 1/2;
      grid-row: 2/3;
      /* height: 100%; */
      /* width: 100%; */
      align-self: end;
    }
    &:nth-child(3) {
      grid-column: 2/3;
      grid-row: 1/3;
      height: 100%;
      /* width: 100%; */
    }

    aspect-ratio: 2;
  }
`;

export default ProductGalleryWrapper;

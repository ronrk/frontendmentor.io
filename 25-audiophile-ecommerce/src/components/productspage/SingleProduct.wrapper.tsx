import styled from "styled-components";

const SingleProductWrapper = styled.article`
  --gap: 6rem;
  justify-content: space-between;
  margin-block: 5rem;
  & .image__wrapper {
    width: 50%;
    aspect-ratio: 1;
  }
  & .content {
    width: 50%;
    align-self: center;

    & p {
      margin-bottom: 2rem;
    }
  }
  &:nth-child(even) {
    & .image__wrapper {
      order: 2;
    }
  }
`;

export default SingleProductWrapper;

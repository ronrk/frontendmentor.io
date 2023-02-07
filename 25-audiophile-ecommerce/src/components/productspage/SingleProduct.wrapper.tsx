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
  @media screen and (max-width: 750px) {
    flex-direction: column;
    align-items: center;
    --gap: 1rem;
    margin-block: 1.5rem;
    text-align: center;
    & .content {
      width: 100%;
    }
    & .image__wrapper {
      width: 80%;
    }

    &:nth-child(even) {
      & .image__wrapper {
        order: 0;
      }
    }
  }
`;

export default SingleProductWrapper;

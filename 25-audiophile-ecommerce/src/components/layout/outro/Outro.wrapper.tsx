import styled from "styled-components";

const OutroWrapper = styled.section`
  margin-bottom: 6rem;
  & .container {
    align-items: center;
  }
  & .content {
    max-width: 50%;
    & p {
      max-width: 75%;
    }
  }
  & .image__wrapper {
    width: 50%;
    flex-grow: 1;
    aspect-ratio: 1;
  }

  @media screen and (max-width: 900px) {
    & .container {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      & .image__wraper {
        width: 100%;
        order: 0;
      }
    }
    & .content {
      text-align: center;
      max-width: 100%;
      order: 2;

      & p {
        max-width: 100%;
      }
    }
  }
`;

export default OutroWrapper;

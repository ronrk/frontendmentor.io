import styled from "styled-components";

const OutroWrapper = styled.section`
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
`;

export default OutroWrapper;

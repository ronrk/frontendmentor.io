import styled from "styled-components";

const SingleProductPageWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 90vh;

  @media screen and (max-width: 850px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export default SingleProductPageWrapper;

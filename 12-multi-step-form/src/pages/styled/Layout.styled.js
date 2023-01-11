import styled from "styled-components";

const LayoutWrapper = styled.div`
  background-color: var(--magnolia);
  border-radius: 8px;
  display: flex;

  gap: 1rem;
  max-width: 80%;
  min-width: 80%;
  min-height: 650px;
  padding: 1rem;

  @media screen and (max-width: 1000px) {
    min-width: 90%;
    max-width: 90%;
  }
  @media screen and (max-width: 900px) {
    min-width: 95%;
    max-width: 95%;
  }
  @media screen and (max-width: 850px) {
    flex-direction: column;
    padding: 0;
  }
`;

export default LayoutWrapper;

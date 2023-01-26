import styled from "styled-components";

const StyledHeader = styled.header`
  padding-block: 6em 3em;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 750px) {
    justify-content: flex-start;
    padding: 3rem;
  }
`;

export default StyledHeader;

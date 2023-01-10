import styled from "styled-components";

const SidebarWrapper = styled.header`
  max-width: 100vw;
  justify-content: space-between;
  align-items: center;
  padding: 1em;

  & .navlist {
    list-style-type: none;
  }
  @media screen and (min-width: 800px) {
    flex-direction: column;
    height: 95vh;
    margin: 1rem 0rem 0 1rem;
    position: sticky;
    left: 0;
    top: 0;
    border-radius: 9px;
    justify-content: flex-start;
    gap: 3em;
    & nav {
      flex: 1;
    }
    & .navlist {
      flex-direction: column;
    }
  }
`;

export default SidebarWrapper;

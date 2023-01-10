import styled from "styled-components";

const LayoutWrapper = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-areas:
    "sidebar"
    " searchbar"
    " main ";
  grid-auto-rows: min-content;

  & .sidebar {
    grid-area: sidebar;
  }
  & .searchbar {
    grid-area: searchbar;
  }
  & .main {
    grid-area: main;
    padding-inline: 1em;
  }
`;

export default LayoutWrapper;

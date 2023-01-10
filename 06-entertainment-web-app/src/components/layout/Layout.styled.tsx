import styled from "styled-components";

const LayoutWrapper = styled.div`
  min-height: 100vh;
  max-width: 100vw;
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
    max-width: 100%;
    /* padding-inline: 1em; */
  }

  @media screen and (min-width: 800px) {
    grid-template-areas:
      ". sidebar searchbar ."
      ". sidebar main .";
    grid-template-columns: minmax(1em, min-content) min-content 1fr minmax(
        1em,
        min-content
      );
    gap: 1em;
    & .main {
      /* max-width: min-content; */
    }
  }
`;

export default LayoutWrapper;

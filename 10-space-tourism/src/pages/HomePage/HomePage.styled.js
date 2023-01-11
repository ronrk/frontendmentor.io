import styled from "styled-components";

const HomePageWrapper = styled.main`
  &.grid-container {
    @media screen and (min-width: 45em) {
      grid-template-columns: minmax(2em, 1fr) repeat(2, minmax(0, 40rem)) minmax(
          2em,
          1fr
        );
      column-gap: var(--container-gap, 2rem);
      & > *:first-child {
        grid-column: 2;
      }
      & > *:last-child {
        grid-column: 3;
      }
    }
  }
`;

export default HomePageWrapper;

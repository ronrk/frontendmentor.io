import styled from "styled-components";

const StyledSingleCountry = styled.article`
  margin-top: clamp(4rem, 10vw, 8rem);
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  justify-items: start;

  & .image-wrapper {
    width: 40%;

    & img {
      /* width: 100%; */
      min-width: 300px;
      /* max-width: 100%; */
      /* object-fit: scale-down; */
    }
  }
  & .content {
    /* width: 100%; */
    /* align-items: center; */
  }

  & ul {
    list-style-type: none;
    & li {
      display: flex;
      gap: 0.4em;
    }
  }

  & .borders {
    grid-column: 1/-1;
    margin-top: 1.5rem;
    --gap: 3rem;

    & .country-border {
      box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.104931);
      padding: 1em;
    }
  }

  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: minmax(20%, 50%) 1fr;
    justify-items: center;

    & .image-wrapper {
      /* width: 80%; */
      justify-self: start;

      & img {
        height: 25vw;
        width: 35vw;
        object-fit: cover;
      }
    }
  }
  @media screen and (min-width: 1000px) {
    & .stats {
      flex-direction: row;
      --gap: clamp(2rem, 7vw, 10rem);
      justify-self: start;
    }
  }
`;

export default StyledSingleCountry;

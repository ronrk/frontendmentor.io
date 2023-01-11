import styled from "styled-components";

const PlanetInfoWrapper = styled.div`
  grid-area: info;
  width: 100%;
  --gap: 0.6em;

  & h4 {
    color: hsla(var(--clr-white), 0.4);
  }

  & .info-box {
    width: 100%;

    justify-content: space-between;
    align-items: center;
    border: 1px solid hsla(var(--clr-white), 0.3);
    padding: 1em;
  }
  @media screen and (min-width: 624px) {
    flex-direction: row;
    justify-content: space-evenly;

    & .info-box {
      flex-direction: column;
      align-items: flex-start;
      max-width: 255px;
    }
  }
`;

export default PlanetInfoWrapper;

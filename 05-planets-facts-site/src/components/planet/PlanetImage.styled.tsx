import styled from "styled-components";

const PlanetImageWrapper = styled.div`
  grid-area: image;
  position: relative;
  width: 38vw;
  max-width: 300px;
  aspect-ratio: 1;
  margin-block: 6rem;
  align-self: center;

  & .geology {
    position: absolute;
    width: 50%;
    aspect-ratio: 0.9;
    bottom: -30%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export default PlanetImageWrapper;

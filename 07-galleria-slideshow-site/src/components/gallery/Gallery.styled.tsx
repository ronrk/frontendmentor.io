import styled from "styled-components";

const GalleryStyled = styled.section`
  padding-block: 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(324px, 324px));
  grid-template-rows: repeat(11, 9vh);
  grid-auto-rows: 9vh;
  gap: 1em;

  justify-content: center;
`;

export default GalleryStyled;

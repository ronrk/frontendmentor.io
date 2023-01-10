import styled from "styled-components";

const MediaGridWrapper = styled.div`
  padding: 1em;
  margin-inline: auto;
  display: grid;

  justify-content: center;
  align-items: center;
  /* justify-items: center; */
  gap: 0.5em;
  grid-template-columns: 1fr 1fr;

  @media screen and (min-width: 600px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 23%));
    justify-content: space-evenly;
  }
`;

export default MediaGridWrapper;

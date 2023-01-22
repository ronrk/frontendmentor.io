import styled from "styled-components";

const FeatureStyled = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5em;

  & p {
    max-width: 45ch;
  }

  & .image-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2em;
    border-radius: 50px;
    margin-bottom: 1em;
    max-width: 150px;
    height: 150px;
  }
  @media screen and (min-width: 750px) {
    flex-direction: row;
    text-align: left;
    align-items: center;
    gap: 4em;

    & .image-wrapper {
      margin: 0;
    }

    &:nth-child(even) {
      margin-left: 4rem;
    }
  }

  @media screen and (min-width: 1200px) {
    flex-direction: column;
    &:nth-child(even) {
      margin-left: 0;
      margin-top: 4rem;
    }
  }
`;

export default FeatureStyled;

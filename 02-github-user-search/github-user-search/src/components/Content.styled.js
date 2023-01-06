import styled from "styled-components";

const ContentStyled = styled.section`
  margin-top: 2rem;
  padding-block: 2em;
  border-radius: 6px;

  display: grid;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);

  grid-template-columns:
    minmax(1em, min-content) repeat(3, minmax(min-content, 1fr))
    minmax(1em, min-content);
  grid-template-areas:
    ". img name date ."
    ". img description description ."
    ". img stats stats ."
    ". img info info . ";
  gap: 1em;
  @media screen and (max-width: 800px) {
    grid-template-columns:
      minmax(1em, min-content) min-content
      repeat(2, minmax(min-content, 1fr)) minmax(1em, min-content);
    grid-template-areas:
      ". img name name ."
      ". img date date ."
      ". description description description ."
      ". stats stats stats ."
      ". info info info .";
    grid-auto-rows: auto;
  }
  & .user-name {
    grid-area: name;
    align-self: start;
  }
  & .user-img {
    grid-area: img;
    border-radius: 50%;

    @media screen and (max-width: 800px) {
      max-height: 100px;
      max-width: 100px;
    }
    align-self: start;
  }
  & .description {
    grid-area: description;
  }
  & .date {
    grid-area: date;
    align-self: center;
    justify-self: center;
    @media screen and (max-width: 800px) {
      align-self: start;
      justify-self: start;
    }
  }
  & .stats-container {
    grid-area: stats;
    display: flex;
    justify-content: space-evenly;
    padding: 1em;
    border-radius: 6px;
  }
  & .user-info {
    grid-area: info;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1.5rem;
    row-gap: 1rem;
    & > * {
      display: flex;
      align-items: center;
      gap: 0.7em;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
      &.unavaible {
        cursor: not-allowed;
        opacity: 0.5;
        &:hover {
          text-decoration: none;
        }
      }

      & .icon {
        fill: currentColor;
      }
    }
    @media screen and (max-width: 500px) {
      display: flex;
      flex-direction: column;
    }
  }
`;

export default ContentStyled;

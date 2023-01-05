import styled from "styled-components";

const ContentStyled = styled.section`
  margin-top: 2rem;
  padding-block: 2em;
  border-radius: 6px;
  display: grid;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);

  grid-template-columns: minmax(1em, min-content) repeat(3, 1fr) minmax(
      1em,
      min-content
    );
  grid-template-areas:
    ". img name date ."
    ". img description description ."
    ". img stats stats ."
    ". img info info . ";
  row-gap: 1rem;

  & .user-name {
    grid-area: name;
  }
  & .user-img {
    grid-area: img;
  }
  & .description {
    grid-area: description;
  }
  & .date {
    grid-area: date;
    align-self: center;
    justify-self: end;
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
    & > * {
      display: flex;
      align-items: center;
      gap: 1rem;
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
  }
`;

export default ContentStyled;

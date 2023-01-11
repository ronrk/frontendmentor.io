import styled from "styled-components";

const MainSectionWrapper = styled.section`
  margin-top: 5rem;
  & h2 {
    margin-bottom: 0.3em;
    text-align: center;
  }
  & h3 {
    display: flex;
    align-items: center;

    margin-left: 1em;
    margin-bottom: 0.4em;
    border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;
    & span {
      margin-right: 1em;
    }
  }

  & .primary-text {
    width: 80%;
    max-width: 550px;
    margin-inline: auto;
    text-align: center;
  }

  & p {
    line-height: 1.5em;
    padding-inline: 1em;
    margin-bottom: 2.5em;
  }
  & .box {
    max-width: 550px;
    margin-inline: auto;
  }

  @media screen and (min-width: 800px) {
    display: flex;
    h2 {
      text-align: left;
      margin-inline: 0;
      padding: 0;
    }
    .primary-text {
      text-align: left;
      margin-inline: 0;
    }

    & h3 {
      display: flex;
      align-items: center;

      margin-left: 0;
      margin-bottom: 0.4em;
      background-color: none;
      background: none;

      & span {
        margin-right: 1em;
        padding-inline: 0.6em;
        padding-block: 0.2em;
      }
    }
    & p {
      padding: 0;
    }

    & .title {
      flex: 1;
    }
  }
`;

export default MainSectionWrapper;

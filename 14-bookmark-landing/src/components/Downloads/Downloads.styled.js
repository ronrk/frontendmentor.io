import styled from "styled-components";

const DownloadsWrapper = styled.section`
  margin-block: 8rem;
  & h2 {
    font-weight: 500;
  }
  & p {
    line-height: 1.7;
    margin-block: 0.3em 2em;
  }

  & .flex-c {
    align-items: center;
    --gap: 4rem;
  }

  & hr {
    margin-block: 2em;
    border-style: ridge;
  }

  & .download-box {
    padding: 2em;
    background-color: #fff;
    display: inline-block;
    border-radius: 8px;
    box-shadow: 0px 8px 10px 5px rgba(0, 0, 0, 0.2);

    & h4 {
      margin-block: 2em 0.5em;
    }
    & p {
      letter-spacing: 1.1px;
    }

    & button {
    }
  }

  @media screen and (min-width: 850px) {
    & .flex-c {
      margin-top: 4rem;
      flex-direction: row;
      justify-content: center;
      /* align-items: center; */
      & > *:not(:first-child) {
        margin-bottom: -5rem;
      }
      & :last-child {
        margin-bottom: -10rem;
      }
    }
  }
`;

export default DownloadsWrapper;

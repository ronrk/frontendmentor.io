import styled from "styled-components";

const GetinTouchStyled = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 2rem;
  padding-bottom: 6rem;
  padding: 2em;

  input,
  button {
    padding: 1em 2em;
    border-radius: 100px;
  }
  & h2 {
    max-width: 20ch;
    margin-inline: auto;
  }
  & .form-control {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  @media screen and (min-width: 750px) {
    position: relative;
    & .form-control {
      flex-direction: row;

      & input {
        flex-grow: 1;
      }
    }

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      background-image: url("/assets/bg-footer-squiggle.svg");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
    }
  }
`;

export default GetinTouchStyled;

import styled from "styled-components";

const StyledForm = styled.form`
  text-align: left;
  min-height: 400px;
  width: 85vw;
  max-width: 620px;
  border-radius: 7px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 3rem;

  & button {
    border: 0;
    background: none;
    cursor: pointer;
    display: block;
    background-color: hsl(var(--clr-primary));
    color: #fff;
    width: 80%;
    padding: 1rem;
    align-self: center;
    border-radius: 50px;
    box-shadow: 0px 25px 25px -10px rgba(63, 91, 194, 0.247159);
  }

  & .form__control {
    & .error-msg {
      opacity: 0;
      color: hsl(var(--clr-red));
      transition: opacity 0.2s;

      &.show {
        opacity: 1;
      }
    }
    & input {
      border: none;
      padding: 1em;
      border-bottom: 1px solid hsla(var(--clr-gray), 0.5);
      width: 100%;
      &.error {
        border-color: hsl(var(--clr-red));
      }

      &:focus {
        outline: none;
        border-color: hsla(var(--clr-dark-2), 1);
      }
    }
    & label {
      /* position: absolute; */
      left: 1em;
      top: 50%;
      transform: translateY(-50%);
      color: hsl(var(--clr-gray));
    }
  }
`;

export default StyledForm;

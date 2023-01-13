import styled from "styled-components";

const StyledSearchBar = styled.form`
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  & .form-control {
    background-color: hsl(var(--clr-box));
    align-items: center;
    box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
    padding: 1em;
    width: 40%;
    border-radius: 10px;

    & input {
      width: 100%;

      &:focus {
        outline: none;
      }
      &::placeholder {
        color: hsl(var(--clr-input));
      }
    }

    & .btn--search {
      & .icon {
        font-size: 2rem;
      }
    }
  }
  @media screen and (max-width: 800px) {
    flex-direction: column;
    align-items: flex-start;
    & .form-control {
      width: 90%;
    }
  }
`;

export default StyledSearchBar;

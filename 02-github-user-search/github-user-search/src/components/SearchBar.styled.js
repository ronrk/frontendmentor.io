import styled from "styled-components";

const SearchBarStyled = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5em;
  border-radius: 6px;
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);

  & .form-control {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-grow: 1;
  }

  & .btn--search {
    padding-inline: 1em;
    aspect-ratio: 2.2;
    border-radius: 6px;
  }

  & input {
    padding: 0.5rem 1rem;
    width: 100%;

    &::placeholder {
      color: var(--clr-light);
    }
  }
`;

export default SearchBarStyled;

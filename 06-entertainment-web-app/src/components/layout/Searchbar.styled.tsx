import styled from "styled-components";

const SearchbarWrapper = styled.div`
  align-items: center;
  margin-block: 2rem;
  padding-inline: 1em;
  & input {
    width: 100%;
    font-size: 1rem;
    letter-spacing: 1.1px;
    font-weight: 300;

    &::placeholder {
      font-size: 1.3rem;
      color: var(--clr-white);
      opacity: 0.3;
      font-weight: 300;
    }
  }
`;

export default SearchbarWrapper;

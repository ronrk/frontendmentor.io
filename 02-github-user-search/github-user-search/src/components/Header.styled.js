import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  & .btn--mode {
    display: flex;
    align-items: center;
    gap: 1em;
    text-transform: uppercase;
    color: var(--clr-light);
    font-size: 0.8125rem;

    & .icon {
      fill: currentColor;
    }
  }
`;

export default HeaderStyled;

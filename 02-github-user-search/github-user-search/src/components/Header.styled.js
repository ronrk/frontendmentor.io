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
    font-size: 1.3rem;
    padding: 0.7em;
    border-radius: 9px;
    text-transform: uppercase;
    color: var(--clr-light);
    font-size: var(--fs-200);

    & .icon {
      fill: currentColor;
    }
  }
`;

export default HeaderStyled;

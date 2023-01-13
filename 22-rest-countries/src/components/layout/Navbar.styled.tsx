import styled from "styled-components";

const StyledNavbar = styled.header`
  background-color: hsl(var(--clr-box));
  justify-content: space-between;
  align-items: center;
  padding-block: 1.5em;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.0562443);
  margin-bottom: 2em;

  & .btn--theme {
    align-items: center;
    --gap: 0.2em;
    & .icon {
      font-size: 1.7em;
    }
  }
`;

export default StyledNavbar;

import styled from "styled-components";

const StyledDropdown = styled.div`
  position: relative;
  cursor: pointer;

  & .dropdown-bar {
    justify-content: space-between;
    min-width: 200px;
    box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.0532439);
    padding: 1em;
    border-radius: 5px;
  }
  & .dropdown-options {
    width: 100%;
    position: absolute;
    z-index: 10000;
    border-radius: 5px;
    margin-top: 0.2em;

    & .dropdown-option {
      padding: 0.5em;
      text-transform: capitalize;
      &.active {
        background-color: hsla(var(--clr-input), 0.2);
      }
      &:hover {
        background-color: hsl(var(--clr-bg-app));
      }
    }
  }
`;

export default StyledDropdown;

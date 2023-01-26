import styled from "styled-components";

const StyledDropdown = styled.div`
  cursor: pointer;
  position: relative;
  border-radius: 5px;
  &.columns-type {
    width: 100%;
  }

  & .dropdown-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid hsl(var(--clr-text-light));
    background-color: hsla(var(--clr-box-bg), 0.4);
    padding: 1em 0.5em;
    transition: all 0.2s;
    /* width: 100%; */
    & .content {
      display: flex;
      gap: 0.5em;
    }
    & .icon {
      transition: all 0.2s;
    }
    &:hover {
      color: hsl(var(--clr-text-dark));
      & .icon {
        color: hsl(var(--clr-primary));
      }
    }
  }
  & .dropdown-options {
    z-index: 100;
    position: absolute;
    width: 100%;
    min-width: 150px;
    /* padding: 1em; */
    border: 1px solid hsla(var(--clr-gray), 0.3);
    border-radius: 5px;
    margin-top: 0.5em;

    & .dropdown-option {
      display: flex;
      gap: 1rem;
      padding: 1em;
      transition: all 0.2s;
      &.active {
        background-color: hsla(var(--clr-secondary), 0.7);
        color: #fff;
      }
      &:hover {
        background-color: hsla(var(--clr-primary), 0.3);
      }
    }
  }
  & .btn--menu {
    position: relative;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    width: 45px;
    aspect-ratio: 1;
    margin-left: 0.5em;
    & .icon {
      font-size: 1.5rem;
    }

    &:hover,
    &:focus {
      background-color: hsla(var(--clr-primary), 0.2);
      border-radius: 50%;
    }
    &:disabled {
      opacity: 0.1;
      cursor: not-allowed;
    }
  }
  &.menu {
    & .dropdown-options {
      text-transform: capitalize;
      right: 0;
      top: 3.5em;
    }
    & .text-red {
      &:hover {
        background-color: hsla(var(--clr-red), 1);
        color: white;
      }
    }
  }
`;

export default StyledDropdown;

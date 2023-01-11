import styled from "styled-components";

const PlanetsTabsWrapper = styled.div`
  grid-area: tabs;
  width: 100%;
  justify-content: space-around;
  border-bottom: 0.5px solid hsla(var(--clr-white), 0.2);
  --gap: 1em;
  padding-inline: 0.3em;

  & .tab {
    color: hsla(var(--clr-white), 0.7);
    transition: all 0.4s linear;
    padding-block: 1.5em;
    border-bottom: 2px solid transparent;

    & .tab-indicator {
      display: none;
    }

    &.active,
    &:hover {
      color: hsla(var(--clr-white));
    }
    &.active {
      border-color: var(--clr-planet);
    }
  }
  @media screen and (min-width: 624px) {
    flex-direction: column;
    align-self: center;
    border: none;

    & .tab {
      border: 1px solid hsla(var(--clr-white), 0.4);
      width: 100%;
      max-width: 350px;
      text-align: left;
      padding-inline: 1em;
      & .tab-indicator {
        display: inline-block;
        margin-right: 0.3em;
        color: hsla(var(--clr-white), 0.4);
      }
      &:hover {
        background-color: hsla(var(--clr-white-2), 0.2);
      }
      &.active {
        background-color: var(--clr-planet);
      }
    }
  }

  @media screen and (min-width: 1050px) {
    /* background-color: red; */
    justify-self: center;
    width: 65%;
    /* align-items: center; */
  }
`;

export default PlanetsTabsWrapper;

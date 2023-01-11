import styled from "styled-components";

const Wrapper = styled.div`
  /* COMPONENTS */

  /* Numbered TITLE */

  & .numbered-title {
    font-size: var(--fs-500);
    text-transform: uppercase;
    font-family: var(--ff-sans-cond);
    letter-spacing: 4.72px;

    & span {
      color: hsl(var(--color-white), 0.25);
      margin-right: 0.5em;
      font-weight: bold;
    }
  }

  /* Primary NAV */

  & .primary-navigation {
    --gap: 8rem;
    --underline-gap: 2rem;
    list-style: none;

    & a {
      text-decoration: none;

      & span {
        font-weight: bold;
        margin-right: 0.5em;
      }
    }
  }

  /* UNDERLINE-INDICATORS */

  & .underline-indicators {
    & > * {
      padding: var(--underline-gap, 1rem) 0;
      border-bottom: 0.2em solid hsl(var(--color-white), 0);
      &:hover,
      &:focus {
        border-bottom: 0.3em solid hsl(var(--color-white), 0.5);
      }
      &.active,
      &[aria-selected="true"] {
        border-bottom: 0.3em solid hsl(var(--color-white));
        color: hsl(var(--color-white));
      }
    }
  }

  /* TAB-LIST */

  & .tab-list {
    --gap: 2rem;
    --underline-gap: 0.5em;
    align-items: stretch;
  }

  /* DOT-INDICATORS */

  & .dot-indicators {
    & > * {
      border-radius: 50%;
      aspect-ratio: 1;
      padding: 0.5em;
      background-color: hsl(var(--color-white), 0.25);

      &:hover,
      &:focus {
        background-color: hsl(var(--color-white), 0.5);
      }

      &[aria-selected="true"] {
        background-color: hsl(var(--color-white), 1);
      }
    }
  }

  & .numbers-indicators {
    & > * {
      border: 1px solid hsl(var(--color-white), 0.2);
      aspect-ratio: 1;
      border-radius: 50%;
      padding: 1em 1.5em;

      &:hover,
      &:focus {
        border-color: hsl(var(--color-white), 1);
      }
      &[aria-selected="true"] {
        background-color: hsl(var(--color-white), 1);
        color: hsl(var(--color-dark));
      }
    }
  }

  /* EXPLORE-BTN */

  & .btn--explore {
    position: relative;
    display: grid;
    place-items: center;
    padding: 0 2em;
    border-radius: 50%;
    aspect-ratio: 1;
    text-decoration: none;
    z-index: 1;

    &::after {
      content: "";
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      z-index: -1;
      background-color: hsl(var(--color-white), 0.2);
      opacity: 0;
      transition: transform 350ms linear, opacity 800ms ease-in-out;
    }

    &:hover,
    &:focus {
      &::after {
        transform: scale(1.5);
        opacity: 1;
      }
    }
  }
`;

export default Wrapper;

import styled from "styled-components";
import bgHomeDesktop from "../../../assets/home/background-home-desktop.jpg";
import bgHomeMobile from "../../../assets/home/background-home-mobile.jpg";
import bgHomeTablet from "../../../assets/home/background-home-tablet.jpg";
import bgDestinationDesktop from "../../../assets/destination/background-destination-desktop.jpg";
import bgDestinationTablet from "../../../assets/destination/background-destination-tablet.jpg";
import bgDestinationMobile from "../../../assets/destination/background-destination-mobile.jpg";
import bgCrewDesktop from "../../../assets/crew/background-crew-desktop.jpg";
import bgCrewTablet from "../../../assets/crew/background-crew-tablet.jpg";
import bgCrewMobile from "../../../assets/crew/background-crew-mobile.jpg";
import bgTechnologyDesktop from "../../../assets/technology/background-technology-desktop.jpg";
import bgTechnologyTablet from "../../../assets/technology/background-technology-tablet.jpg";
import bgTechnologyMobile from "../../../assets/technology/background-technology-mobile.jpg";

const LayoutWrapper = styled.div`
  line-height: 1.5;
  min-height: 100vh;
  font-family: var(--ff-sans-normal);
  background-color: hsl(var(--color-dark));
  color: hsl(var(--color-white));
  font-size: var(--fs-400);
  display: grid;
  grid-template-rows: min-content 1fr;
  background-size: cover;
  background-position: bottom center;
  background-repeat: no-repeat;

  /* COMPONENTS */

  .grid-container {
    text-align: center;
    display: grid;
    place-items: center;
    padding-inline: 1rem;
    padding-bottom: 3em;
    margin-inline: auto;

    & p:not([class]) {
      max-width: 55ch;
    }

    @media screen and (min-width: 45em) {
      grid-template-columns: minmax(2em, 1fr) repeat(2, minmax(0, 40rem)) minmax(
          2em,
          1fr
        );
      column-gap: var(--container-gap, 2rem);
    }
  }

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

  /* UNDERLINE-INDICATORS */

  & .underline-indicators {
    & > * {
      padding: var(--underline-gap, 0.5rem) 0;
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
    display: inline-grid;
    place-items: center;
    padding: 0 2em;
    border-radius: 50%;
    aspect-ratio: 1;
    text-decoration: none;
    z-index: 1;
    font-size: 2rem;

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
  &.home {
    background-image: url(${bgHomeMobile});

    @media screen and (min-width: 35em) {
      background-position: center center;
      background-image: url(${bgHomeTablet});
    }
    @media screen and (min-width: 45em) {
      background-image: url(${bgHomeDesktop});
      & .grid-container {
        --gap: 5em;
        text-align: left;
        padding-bottom: max(6rem, 20vh);
        align-items: end;
      }
    }
  }
  &.destination {
    background-image: url(${bgDestinationMobile});
    @media screen and (min-width: 35em) {
      background-position: center center;
      background-image: url(${bgDestinationTablet});
    }
    @media screen and (min-width: 45em) {
      background-image: url(${bgDestinationDesktop});
    }
  }
  &.crew {
    background-image: url(${bgCrewMobile});
    @media screen and (min-width: 35em) {
      background-position: center center;
      background-image: url(${bgCrewTablet});
    }
    @media screen and (min-width: 45em) {
      background-image: url(${bgCrewDesktop});
    }
  }
  &.technology {
    background-image: url(${bgTechnologyMobile});
    @media screen and (min-width: 35em) {
      background-position: center center;
      background-image: url(${bgTechnologyTablet});
    }
    @media screen and (min-width: 45em) {
      background-image: url(${bgTechnologyDesktop});
    }
  }

  & .skip-to-content {
    &:focus {
      position: relative;
      display: block;
      width: max-content;
      height: auto;
      clip: 0;
      background-color: white;
      color: black;
    }
  }
`;

export default LayoutWrapper;

import styled from "styled-components";

const PlanetPage = styled.section`
  display: grid;
  grid-template-areas:
    "tabs tabs tabs"
    ". image ."
    ". content ."
    ". info .";
  justify-items: center;
  gap: 2rem;
  padding-bottom: 3em;

  & .planet-tabs {
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
  }
  & .planet-image {
    grid-area: image;
    position: relative;
    width: 38vw;
    max-width: 300px;
    aspect-ratio: 1;
    margin-block: 6rem;
    align-self: center;

    & .geology {
      position: absolute;
      width: 50%;
      aspect-ratio: 0.9;
      bottom: -30%;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  & .planet-content {
    grid-area: content;
    --gap: 1em;

    & p {
      color: hsla(var(--clr-white), 0.6);
    }
    & span {
      color: hsla(var(--clr-white), 0.3);
    }

    & .src-link {
      color: hsla(var(--clr-white), 0.7);

      margin-left: 0.5em;
      display: inline-flex;
      align-items: center;
      align-items: center;
      gap: 0.3em;

      &:hover {
        text-decoration: underline;
      }
    }
  }
  & .planet-info {
    grid-area: info;
    width: 100%;
    --gap: 0.6em;

    & h4 {
      color: hsla(var(--clr-white), 0.4);
    }

    & .info-box {
      width: 100%;

      justify-content: space-between;
      align-items: center;
      border: 1px solid hsla(var(--clr-white), 0.3);
      padding: 1em;
    }
  }

  @media screen and (min-width: 624px) {
    grid-template-columns: minmax(1em, 1em) repeat(2, minmax(min-content, 50%)) minmax(
        1em,
        1fr
      );
    grid-template-areas:
      "image image image image"
      ". content tabs ."
      ". info info .";
    justify-items: center;
    gap: 2rem;

    & .planet-tabs {
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
    & .planet-content {
      text-align: left;
      --gap: 2rem;
      & p {
        width: 80%;
      }
      & span {
        margin-top: 1em;
      }
    }
    & .planet-info {
      flex-direction: row;
      justify-content: center;

      & .info-box {
        flex-direction: column;
        align-items: flex-start;
        max-width: 255px;
      }
    }
  }

  @media screen and (min-width: 1050px) {
    grid-template-areas:
      ". image content ."
      ". image tabs ."
      ". info info .";
    justify-items: center;
    gap: 2rem;

    & .planet-content {
      width: 70%;
      justify-self: start;
    }
  }
`;

export default PlanetPage;

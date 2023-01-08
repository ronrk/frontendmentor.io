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

  & .planet-tabs {
    grid-area: tabs;
    width: 100%;
    justify-content: space-evenly;
    border-bottom: 0.5px solid hsla(var(--clr-white), 0.2);

    & .tab {
      color: hsla(var(--clr-white), 0.7);
      transition: all 0.4s linear;
      padding-block: 1.5em;
      border-bottom: 2px solid transparent;

      &.active,
      &:hover {
        color: hsla(var(--clr-white));
      }
      &.active {
        border-color: red;
      }
    }
  }
  & .planet-image {
    grid-area: image;
    position: relative;
    width: 50%;
    aspect-ratio: 1;
    margin-block: 4rem;
    & img {
    }

    & .geology {
      position: absolute;
      width: 40%;
      aspect-ratio: 1;
      bottom: -20%;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  & .planet-content {
    grid-area: content;

    & p {
      color: hsla(var(--clr-white), 0.6);
    }
    & span {
      color: hsla(var(--clr-white), 0.3);
    }

    & .src-link {
      color: hsla(var(--clr-white), 0.7);
      text-decoration: dashed;
      margin-left: 1em;
    }
  }
  & .planet-info {
    grid-area: info;
    width: 100%;
    --gap: 0.6em;

    & h4 {
      color: hsla(var(--clr-white), 0.3);
    }

    & .info-box {
      width: 100%;
      justify-content: space-between;
      align-items: center;
      border: 1px solid hsla(var(--clr-white), 0.3);
      padding: 1em;
    }
  }
`;

export default PlanetPage;

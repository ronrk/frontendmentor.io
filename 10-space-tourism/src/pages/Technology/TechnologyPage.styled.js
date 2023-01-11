import styled from "styled-components";

const TechnologyPageWrapper = styled.main`
  &.grid-container {
    grid-template-areas:
      "title"
      "image"
      "tabs"
      "content";

    & .numbered-title {
      grid-area: title;

      @media screen and (min-width: 45em) {
        justify-self: start;
      }
    }
    & .tech__img {
      grid-area: image;
      min-width: 110%;
      @media screen and (min-width: 45em) {
        justify-self: start;
        height: 100%;
        min-width: 350px;
        max-width: 500px;
        align-self: start;
      }
      & img {
        max-height: 300px;
        width: 100%;
        object-fit: cover;
        @media screen and (min-width: 45em) {
          min-height: 100%;
          min-width: 110%;
          object-fit: fill;
        }
      }
    }
    & .numbers-indicators {
      grid-area: tabs;
      align-items: center;

      @media screen and (min-width: 45em) {
        flex-direction: column;
        justify-self: start;
        align-self: end;
      }

      & a {
        text-decoration: none;
      }
    }
    & .tech__content {
      grid-area: content;

      @media screen and (min-width: 45em) {
        justify-self: start;
        text-align: left;
      }

      & h2 {
        color: hsl(var(--color-light), 0.5);
      }
    }

    @media screen and (min-width: 35em) {
    }
    @media screen and (min-width: 45em) {
      grid-template-columns: 1em minmax(0, min-content) minmax(0, max-content) minmax(
          2em,
          1fr
        ) !important;
      grid-template-areas:
        ".title title ."
        ". tabs content image"
        ". tab content image";
    }
  }
`;

export default TechnologyPageWrapper;

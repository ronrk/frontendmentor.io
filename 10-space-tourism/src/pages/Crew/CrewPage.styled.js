import styled from "styled-components";

const CrewPageWrapper = styled.main`
  &.grid-container {
    grid-template-areas:
      "title"
      "image"
      "tabs"
      "content";
    @media screen and (min-width: 35em) {
      padding-bottom: 0;
      grid-template-areas:
        "title"
        "content"
        "tabs"
        "image";
    }

    @media screen and (min-width: 45em) {
      justify-items: start;
      text-align: left;
      grid-template-areas:
        ". title title ."
        ". content image ."
        ". tabs image .";
    }
    & .numbered-title {
      grid-area: title;
    }
    & .crew__img {
      grid-area: image;
      max-width: 60%;
      border-bottom: 1px solid hsl(var(--color-white), 0.1);
      @media screen and (min-width: 45em) {
        max-width: 100%;
        align-self: end;
      }
    }
    & .dot-indicators {
      grid-area: tabs;
      @media screen and (min-width: 45em) {
        align-self: center;
        justify-self: start;
      }
    }
    & .crew__content {
      grid-area: content;
    }
  }
`;

export default CrewPageWrapper;

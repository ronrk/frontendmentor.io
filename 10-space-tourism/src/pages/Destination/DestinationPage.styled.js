import styled from "styled-components";

const DestinationPageWrapper = styled.main`
  &.grid-container {
    grid-template-areas:
      "title"
      "image"
      "tabs"
      "content";

    & .numbered-title {
      grid-area: title;
    }
    & .destination__img {
      grid-area: image;
      & img {
        max-width: 60%;
      }
    }

    & .tab-list {
      grid-area: tabs;
    }

    & .destination__content {
      grid-area: content;
    }
  }

  @media (min-width: 35em) {
    & .numbered-title {
      justify-self: start;
      margin-top: 2rem;
    }
  }

  @media screen and (min-width: 45em) {
    &.grid-container {
      column-gap: 2rem;
      justify-items: start;
      align-items: start;
      grid-template-areas:
        ". title  title ."
        ". image tabs ."
        ". image content .";

      & .destination__img {
        & img {
          max-width: 100%;
        }
      }
      & .destination__content {
        text-align: left;
      }
      & .destination__meta {
        --gap: 3rem;
        text-align: left;
      }
    }
  }
`;

export default DestinationPageWrapper;

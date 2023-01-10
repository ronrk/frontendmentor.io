import styled from "styled-components";

const MediaItemWrapper = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  transition: all 0.2s;
  overflow: hidden;
  & .media_image {
    grid-column: 1/2;
    grid-row: 1/2;
  }

  &.trending {
    width: 470px;
    & .media_details {
      grid-column: 1/2;
      grid-row: 1/2;
      z-index: 2;
      align-self: end;
      padding: 0.5em;
    }

    & .media_image {
      grid-column: 1/2;
      grid-row: 1/2;
      max-height: 240px;
      min-height: 140px;
      min-width: 100%;

      & img {
        object-fit: fill;
      }
    }
  }
  &.gallery {
    width: 100%;
    height: 100%;

    & .media_image {
      min-width: 164px;
      max-width: 100%;
      min-height: 110px;
      height: 220px;

      & img {
        object-fit: fill;
      }
    }

    & .info {
      margin-block: 1em 2em;
    }
  }

  & .media_actions {
    display: grid;
    /* opacity: 0; */
    /*  */

    & .btn-play {
      transform: translateX(-300%);
      transition: all 0.3s ease-in-out;
    }
    & .btn-bookmark {
      transform: translateY(-300%);
      transition: all 0.3s ease-in-out;
    }
  }

  &:hover {
    & .media_image {
      filter: blur(2px) contrast(80%);
    }
    & .media_actions {
      display: grid;
      opacity: 1;

      & .btn-play {
        transform: translateX(0);
      }
      & .btn-bookmark {
        transform: translateY(0);
      }
    }
  }
`;

export default MediaItemWrapper;

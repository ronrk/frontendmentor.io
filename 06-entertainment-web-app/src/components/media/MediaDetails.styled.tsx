import styled from "styled-components";

const MediaDetailsWrapper = styled.div`
  --gap: 0.3em;

  & .info-list {
    list-style-type: none;
    gap: 1em;

    & li {
      &:not(:first-child) {
        position: relative;
        padding-left: 10px;

        &::before {
          content: "";
          position: absolute;
          width: 3px;
          aspect-ratio: 1;
          border-radius: 50%;
          background-color: hsla(var(--clr-white), 0.5);
          left: -10%;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
  }
`;

export default MediaDetailsWrapper;

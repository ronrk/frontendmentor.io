import styled from "styled-components";

const MenuWrapper = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: var(--clr-black);
  z-index: 2000;
  & nav {
    height: 100%;
    margin-top: 2rem;
  }
  & .navlist {
    justify-content: flex-start;
    height: 100%;
    --gap: 2rem;
    & li {
      width: 100%;
      font-size: 2rem;

      padding-inline: 0.5em;

      &:not(:last-child) {
        padding-bottom: 1em;
        border-bottom: 1px solid hsla(var(--clr-white), 0.4);
      }
      & .navlink {
        align-items: center;
        padding-inline: 1em;

        & .color {
          display: inline-block;
          background-color: var(--clr-planet);
          width: 30px;
          aspect-ratio: 1;

          border-radius: 50%;
        }
        & .icon-arrow {
          transform: scale(1.5);
          margin-left: auto;
        }
      }
    }
  }
`;

export default MenuWrapper;

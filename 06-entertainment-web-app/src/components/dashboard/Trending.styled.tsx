import styled from "styled-components";

const TrendingWrapper = styled.div`
  overflow-x: hidden;
  max-width: 100vw;
  height: 230px;
  position: relative;
  transition: all 0.2s;
  margin-bottom: 2em;

  & .trending_inner {
    position: absolute;
    left: 0;
    top: 0;
    /* width: 100%; */
    height: 100%;
    transition: all 750ms ease-in-out;
    /* width: auto; */
  }
  & .icon-btn {
    position: absolute;
    z-index: 10000;
    display: none;

    color: hsl(var(--clr-white), 0.7);
    opacity: 0;
    top: 50%;
    transform: translateY(-50%);
    transition: all 0.2s;

    & .icon {
      font-size: 3rem;
    }
  }
  & .icon-btn-right {
    right: 0;
  }
  &:hover {
    & .icon-btn {
      display: block;
      opacity: 1;
    }
  }

  @media screen and (min-width: 800px) {
    /* max-width: 93vw; */
  }
`;

export default TrendingWrapper;

import styled from "styled-components";

const HeroWrapper = styled.div`
  position: relative;
  width: 90%;
  margin-inline: auto;
  text-align: center;
  margin-bottom: 6rem;
  z-index: 1000;

  & h1 {
    text-transform: capitalize;

    margin-top: 2rem;
  }
  & p {
    line-height: 1.7;
    margin-block: 1.5em;
    max-width: 50ch;
    margin-inline: auto;
  }

  & .btn-container {
    justify-content: center;

    & > * {
      flex-grow: 1;
      flex-basis: 250px;
    }
  }

  &::before {
  }
  & .bg {
    right: -5rem;
    bottom: 3rem;
    border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;
    @media screen and (max-width: 850px) {
      transform: translateY(-250px);
    }
  }

  @media screen and (min-width: 850px) {
    display: flex;
    gap: 2rem;
    align-items: center;
    text-align: left;

    & h2 {
      margin-block: 0;
    }
    & p {
      margin-inline: 0;
    }

    & .hero__img {
      order: 2;
      max-width: 50%;
      margin-left: auto;
    }
    & .btn-container {
      justify-content: flex-start;
      align-items: center;
      & > * {
        width: 20%;
        flex-grow: 0;
      }
    }
  }
`;

export default HeroWrapper;

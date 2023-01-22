import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1em;
  margin-bottom: 6em;
  & .logo {
    padding: 2em;
  }

  & .hero__image {
    margin-inline: auto;
  }
  & .desktop {
    display: none;
  }

  & h1 {
    max-width: 25ch;
  }

  & .content {
    margin-top: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;

    & p {
      max-width: 60ch;
    }
  }

  @media screen and (min-width: 750px) {
    & .mobile {
      display: none;
    }
    & .logo {
      align-self: flex-start;
    }

    & .desktop {
      display: block;
    }
    & .title-wrapper {
      position: relative;
      display: flex;
      align-items: center;
      gap: 2em;

      &::before {
        content: "";
        display: block;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        width: 80%;
        height: 100%;
        background-image: url("/assets/bg-hero-squiggle.svg");
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
      }
    }
  }
`;

export default HeaderStyled;

import styled from "styled-components";
import bg from "../../assets/images/bg-footer-top-desktop.svg";

const FooterWrapper = styled.section`
  background-color: var(--very-dark-cyan);

  color: var(--very-pale-blue);
  padding: var(--main-padding);

  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  position: relative;

  @media screen and (max-width: 950px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5rem;
  }

  &::before {
    display: block;
    position: absolute;
    content: "";
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top left;
    height: 20rem;
    width: 100%;
    top: -20rem;
    left: 0;
  }

  & .footer {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 2rem;
    width: 30%;
    @media screen and (max-width: 950px) {
      order: 1;
      text-align: center;
    }
    & .footer__logo {
      & path {
        fill: var(--very-pale-blue);
      }
    }

    & .footer__text {
      font-size: 1.5rem;
      font-family: var(--font-sans);
    }

    & .footer__contact {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
      font-size: 1.5rem;

      & span {
        display: flex;
        align-items: center;
        gap: 1.5rem;
      }
    }

    & .footer__socials {
      margin-top: 4rem;
      display: flex;
      align-items: center;
      gap: 2rem;
      & .social__icon {
        width: 3.25rem;
        height: 3.25rem;
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          fill: blue;
        }
      }
    }
  }

  & .newsletter {
    display: flex;
    flex-direction: column;
    width: 30vw;
    gap: 1.3rem;

    @media screen and (max-width: 950px) {
      order: 0;
      text-align: center;
    }

    & .newsletter__title {
      text-transform: uppercase;
      font-size: 3.3rem;
    }

    & .newsletter__text {
      font-size: 1.3rem;
      font-family: var(--font-sans);
      letter-spacing: 1.1px;
      margin-bottom: 1rem;
    }

    & .newsletter__form {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;

      @media screen and (max-width: 950px) {
        flex-direction: column;
      }

      & .error {
        color: var(--light-red);
        font-size: 1.3rem;
        font-family: var(--font-sans);
        position: absolute;
        bottom: -2rem;
        display: none;
      }

      & input {
        flex: 1;
        height: 4.5rem;
        border-radius: 6px;
        margin-right: 3rem;
        padding: 1rem;
        font-size: 1.8rem;
        color: var(--very-dark-cyan);
        @media screen and (max-width: 950px) {
          width: 100%;
          margin-right: 0;
        }

        &:invalid {
          & ~ span {
            display: block;
          }
        }
      }

      & .btn-pink {
        padding: 1.3rem 2rem;
        border-radius: 6px;
        font-size: 1.4rem;
        @media screen and (max-width: 950px) {
          align-self: flex-end;
        }
      }
    }
  }
`;

export default FooterWrapper;

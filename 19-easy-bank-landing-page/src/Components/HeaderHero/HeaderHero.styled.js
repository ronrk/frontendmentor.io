import styled from "styled-components";
import bg from "../../assets/images/bg-intro-desktop.svg";

const HeaderHeroWrapper = styled.header`
  grid-column: center-start/full-end;
  grid-row: 2/3;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & img {
    display: block;
    max-width: 80vh;
    background-image: url(${bg});
    background-position: top center;
    background-size: contain;
    background-repeat: no-repeat;
    transform: translateX(10rem);
  }

  & .hero__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3rem;
    & .hero__heading {
      font-size: 5rem;
      font-weight: 500;
      letter-spacing: 1.3px;
    }

    & .hero__text {
      font-size: 1.8rem;
      color: var(--grayish-blue);
      letter-spacing: 1.1px;
    }
  }

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    & .hero__content {
      order: 2;
      align-items: center;
      justify-content: center;
      padding: 0 3rem;
    }

    & img {
      margin-top: -10rem;
      transform: translate(0);
    }
  }
`;

export default HeaderHeroWrapper;

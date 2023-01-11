import styled from "styled-components";

const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* min-height: 100vh; */
  gap: 20rem;

  & .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    & h1 {
      font-size: 5rem;
      text-align: center;
      letter-spacing: 1.3px;
    }

    & .content__text {
      font-size: 1.8rem;
      text-align: center;
      max-width: 90ch;
      margin: 0 auto;
    }
  }

  & img {
    width: 75%;
  }
`;

export default HeroWrapper;

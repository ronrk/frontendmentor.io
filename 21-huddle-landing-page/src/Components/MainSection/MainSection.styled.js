import styled from "styled-components";

const MainSectionWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 4rem;
  padding: var(--main-padding);

  /* margin-bottom: 50rem; */
  margin: 20rem auto;

  @media screen and (max-width: 950px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  & .content {
    & .content__title {
      text-align: left;
      margin-bottom: 2rem;
      @media screen and (max-width: 950px) {
        text-align: center;
      }
    }

    & .content__text {
      font-size: 1.8rem;
      line-height: 1.6;
      letter-spacing: 1.2px;
    }
  }

  & img {
    width: 50%;
  }
`;

export default MainSectionWrapper;

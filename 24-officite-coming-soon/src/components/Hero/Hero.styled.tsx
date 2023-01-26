import styled from "styled-components";

const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  & .hero_image {
    width: 50vw;
  }

  & .hero__content {
    padding-inline: 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  @media screen and (min-width: 750px) {
    flex-direction: row;
    justify-content: space-between;
    & .hero_image {
      order: 2;
      width: 50%;
      min-width: 30%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    & .hero__content {
      width: 50%;
      text-align: left;
      align-items: flex-start;
    }
  }
`;

export default StyledHero;

import styled from "styled-components";

const StatsWrapper = styled.section`
  margin: 15rem 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 10rem;

  & .stats__item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    & .stats__icon {
    }

    & .stats__title {
      font-size: 10rem;
      font-family: var(--font-sans);
      font-weight: 600;
    }

    & .stats__text {
      font-size: 1.8rem;
      opacity: 0.6;
      align-self: center;
    }
  }
`;

export default StatsWrapper;

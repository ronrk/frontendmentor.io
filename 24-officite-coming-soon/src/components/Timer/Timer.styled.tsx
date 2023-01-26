import styled from "styled-components";

const StyledTimer = styled.div`
  text-align: center;
  padding: 2rem;

  &.dark {
    & .text-white {
      color: hsla(var(--clr-dark-2));
    }
    & .time__card {
      &.text-white {
        color: hsl(var(--clr-primary));
      }
    }
  }

  & .timer__title {
    margin-bottom: 2rem;
  }
  & .timer {
    display: flex;
    gap: 1rem;

    & .time__card {
      background-color: hsla(var(--clr-gray), 0.4);
      border-radius: 5px;
      gap: 0.1rem;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 1rem;
    }
  }
`;

export default StyledTimer;

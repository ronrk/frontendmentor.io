import styled from "styled-components";

const TestimonialContainerWrapper = styled.section`
  margin-top: 3.5em;
  & .slider {
    margin-inline: auto;
    display: flex;
    justify-content: space-evenly;
    min-width: 10%;
    max-width: 80px;
  }

  & .slider-btn {
    position: relative;

    &::before {
      content: "";
      /* position: absolute; */
      display: block;
      border-radius: 50%;
      background-color: hsl(var(--clr-red-pale));
      border: 1px solid hsl(var(--clr-red));
      width: 0.6em;
      height: 0.6em;
      left: 0;
    }

    &.active {
      &::before {
        background-color: hsl(var(--clr-red));
      }
    }
  }

  & h2 {
    margin-bottom: 1.5em;
  }

  & p {
    max-width: 50ch;
  }
`;

export default TestimonialContainerWrapper;

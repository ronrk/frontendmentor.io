import styled from "styled-components";

interface Props {
  range: number;
}

const SliderWrapper = styled.div<Props>`
  & .form-label {
    justify-content: space-between;
    align-items: center;
  }

  & input {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 8px;
    position: relative;
    border-radius: 200px;
    /* overflow: hidden; */
    &::before {
      background: var(--clr-gray-dark-2);
      width: 100%;
      height: 100%;
      content: "";
      position: absolute;
      left: 0;
      z-index: -2;
    }

    &::after {
      background: var(--clr-green);
      width: ${(props) => props.range + "%"};
      height: 100%;
      content: "";
      position: absolute;
      left: 0;
      z-index: -1;
      border-radius: 100px;
    }

    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.2s;
    transition: opacity 0.2s;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      background: var(--clr-white);
      cursor: pointer;
      z-index: 1000;
    }
  }
`;

export default SliderWrapper;

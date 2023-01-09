import styled from "styled-components";

const LayoutWrapper = styled.div`
  position: relative;
  background: var(--clr-black);
  z-index: 1;

  & .main {
    display: grid;
    place-items: center;
  }
  & .bg {
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default LayoutWrapper;

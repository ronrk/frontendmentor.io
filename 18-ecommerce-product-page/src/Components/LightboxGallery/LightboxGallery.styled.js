import styled from "styled-components";

const LightboxGalleryWrapper = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  display: none;

  &.show {
    display: block;

    @media screen and (max-width: 850px) {
      display: none;
    }
  }

  & .btn-close {
    position: absolute;
    right: 0;
    background-color: var(--pale-orange);
    padding: 1rem;
    border-radius: 100px;
    top: -3rem;

    & svg {
      & path {
        fill: var(--text-dark);
      }
    }
  }

  & .btn-next,
  & .btn-prev {
    background-color: var(--grey-light);
    padding: 1rem;
    border-radius: 50%;
    height: 5rem;
    width: 5rem;
  }

  & .btn-next {
    position: absolute;
    right: -6%;
    top: 50%;
    transform: translateY(-100%);
  }
  & .btn-prev {
    position: absolute;
    left: -6%;
    top: 50%;
    transform: translateY(-100%);
  }
`;

export default LightboxGalleryWrapper;

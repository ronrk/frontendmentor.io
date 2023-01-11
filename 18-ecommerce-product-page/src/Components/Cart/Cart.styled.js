import styled from "styled-components";

const CartWrapper = styled.div`
  display: none;
  min-width: 33rem;
  min-height: 23rem;
  position: absolute;
  right: 0;
  transform: translateX(-50%);

  background-color: var(--white);
  padding: 2rem;

  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.3);
  border-radius: 4px;

  flex-direction: column;
  align-items: flex-start;

  gap: 3rem;
  z-index: 100;

  &.show {
    display: flex;
  }

  & .cart__title {
    font-size: 1.4rem;
    color: var(--text-dark);
    border-bottom: 1px solid var(--text-light);
    align-self: stretch;
  }

  & .empty {
    margin: auto;
  }

  & .btn {
    align-self: stretch;
    padding: 1.4rem;
    font-weight: 700;
    font-size: 1.6rem;

    &:hover {
      filter: invert(20%);
    }
  }
`;

export default CartWrapper;

import styled from "styled-components";

const CartDropdownWrapper = styled.div`
  position: fixed;
  z-index: 100000;
  background-color: hsla(var(--clr-black), 0.5);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  min-height: 100vh;
  & .cart {
    border-radius: 8px;
    box-shadow: 2px 2px 45px hsla(var(--clr-black), 0.2);
    position: absolute;
    right: 17vw;
    top: 8rem;
    min-height: 250px;
    min-width: 250px;
    padding: 2rem 3rem;
    & a {
      text-align: center;
    }

    & .cart__header {
      justify-content: space-between;
    }

    & .cart__price {
      justify-content: space-between;
    }

    & .cart__item {
      display: grid;
      grid-template-columns: min-content 1fr min-content;
      align-items: center;
      gap: 2rem;

      & .item-info {
        & h3 {
          max-width: 22ch;
        }
      }

      & .image__wrapper {
        width: 80px;
        aspect-ratio: 1;
      }

      & .item-actions {
        --gap: 1rem;
        padding: 0.5rem 1.5rem;
      }
    }
  }
`;

export default CartDropdownWrapper;

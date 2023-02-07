import styled from "styled-components";

const CheckoutModalWrapper = styled.div`
  position: fixed;
  z-index: 10000;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: hsla(var(--clr-black), 0.3);
  display: flex;
  align-items: center;
  justify-content: center;

  & .modal {
    padding: 3rem;
    min-height: 60%;
    width: 580px;
    max-width: 90%;
    display: flex;
    flex-direction: column;
    /* align-items: center; */

    & .image__wrapper {
      max-width: 50px;
      aspect-ratio: 1;
    }

    & .cart {
      /* justify-content: space-between; */
      --gap: 1rem;

      & ul {
        li {
          width: 100%;
        }
      }
    }

    & .cart__totals {
      width: 60%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-end;
      padding: 2rem;
    }

    & .cart__item {
      width: 90%;
      display: grid;
      grid-template-columns: min-content 1fr min-content;
      gap: 1rem;
      align-items: center;
      & .image__wrapper {
        height: 100%;
        max-width: 100%;
        width: 80px;
        aspect-ratio: 1;
      }
      & .item-info {
        width: 15ch;
      }
      & .quantity {
        justify-self: end;
      }
    }

    & a {
      align-self: stretch;
      text-align: center;
    }
  }
  @media screen and (max-width: 550px) {
    & .cart {
      flex-direction: column;
      & .cart__item {
        width: 100%;
      }
      & .cart__totals {
        width: 100%;
      }
    }
  }
`;

export default CheckoutModalWrapper;

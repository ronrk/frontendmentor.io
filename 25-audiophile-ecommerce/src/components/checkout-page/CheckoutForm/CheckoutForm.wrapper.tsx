import styled from "styled-components";

const CheckoutFormWrapper = styled.section`
  padding: 2rem;
  border-radius: 6px;

  & .heading-2 {
    margin-bottom: 3rem;
  }

  & .heading-6 {
    font-size: 1rem;
  }

  & > div {
    margin-block: 3rem;
  }

  & .cash-on {
    display: flex;
    flex-wrap: nowrap;
    margin-top: 2rem;

    & p {
      max-width: 65ch;
    }
    & .image__wrapper {
      width: 60px;
      aspect-ratio: 1;
    }
  }
`;

export default CheckoutFormWrapper;

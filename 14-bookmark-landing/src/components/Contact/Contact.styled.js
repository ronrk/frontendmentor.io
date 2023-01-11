import styled from "styled-components";

const ContactWrapper = styled.section`
  color: #fff;
  background-color: hsl(var(--color-primary));
  padding: 2em;

  & span {
    letter-spacing: 0.4em;
    /* font-size: 1rem; */
    text-transform: uppercase;
  }
  & h2 {
    /* font-size: 2rem; */
    font-weight: 400;
    max-width: 20ch;
    margin-inline: auto;
  }

  & .form {
    @media screen and (min-width: 850px) {
      flex-direction: row;
      justify-content: center;
    }
  }
  & input {
    padding: 0.7em 1em;
    border-radius: 6px;
    font-size: 1.3rem;
    border: none;
    min-width: 40%;
    &::placeholder {
      color: hsl(var(--color-text-light), 0.5);
    }
  }
`;

export default ContactWrapper;

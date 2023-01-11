import styled from "styled-components";

const ChatBoxWrapper = styled.div`
  max-width: 300px;
  width: 60%;
  position: relative;
  padding: 0.5em 0.6em;
  border-radius: 30px;
  margin-inline: auto;
  margin-bottom: 3rem;

  &::before {
    content: "";
    display: block;
    position: absolute;
    height: 20px;
    width: 50%;
    left: 50%;
    transform: translateX(-50%);
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    background-color: hsl(var(--color-white));
    top: 0.5em;
    z-index: 1000;
  }
  & .chat__header {
    padding: 1.4em 1em 0.5em;
    width: 100%;
    background-image: linear-gradient(
      to right,
      hsl(var(--gradient-2)),
      hsl(var(--gradient-1))
    );
    align-items: flex-end;

    border-top-left-radius: 30px;
    border-top-right-radius: 30px;

    & .back-btn {
      align-self: center;
    }

    & .avatar {
      grid-area: avatar;
      max-width: 25px;
      border-radius: 50%;
      border: 0.12em solid hsl(var(--color-white));
    }
    & .user {
      grid-area: user;
      flex: 1;

      h3 {
        margin-bottom: 0.1em;
      }
    }

    & .menu-btn {
      grid-area: menu;
      justify-self: end;

      & .menu-icon {
        fill: hsl(var(--color-white));
        font-size: 1.5rem;
      }
    }
  }

  & .chat__body {
    flex-direction: column;
    align-items: flex-start;
    --gap: 0.3em;
    & p:first-child {
      margin-top: 0.8em;
    }
    & p {
      font-weight: 500;
      display: inline-block;
      max-width: 80%;
      padding: 0.5em 1em;
      margin-inline: 1em;
      border-radius: 8px;
      line-height: 1.3;

      &.incoming {
        background-color: hsl(var(--moderate-violet), 0.1);
      }

      &.outgoing {
        align-self: flex-end;
      }
    }
  }

  & .chat__input {
    width: 100%;
    align-items: center;
    padding-block: 1em;
    border-bottom-right-radius: 30px;
    border-bottom-left-radius: 30px;

    & input {
      margin-inline: 1em;
      flex: 1;
      position: relative;
      padding: 1em;
      border-radius: 50px;
      border: 0;
      font-family: inherit;

      &::placeholder {
        font-family: inherit;
        color: hsl(var(--grayish-blue));
      }
    }
    & .submit-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      right: 0.6em;
      font-size: 1.7rem;
      aspect-ratio: 1;
      border-radius: 50%;
      padding: 0.3em;

      & .submit_icon {
        fill: hsl(var(--color-white));
      }
    }
  }

  @media (min-width: 850px) {
    margin: 0;
  }
`;

export default ChatBoxWrapper;

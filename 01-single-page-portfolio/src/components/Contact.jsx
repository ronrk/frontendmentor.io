import React from "react";
import Wrapper from "../styles/Contact.styled";
import useInput from "../hooks/use-input";

const Contact = () => {
  const {
    enteredValue: nameValue,
    isTouched: nameTouched,
    valueIsValid: nameIsValid,
    hasError: nameHasError,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput((value) => value !== "");

  const {
    enteredValue: emailValue,
    isTouched: emailTouched,
    valueIsValid: emailIsValid,
    hasError: emailHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useInput((value) => value !== "");

  const {
    enteredValue: msgValue,
    isTouched: msgTouched,
    valueIsValid: msgIsValid,
    hasError: msgHasError,
    inputChangeHandler: msgChangeHandler,
    inputBlurHandler: msgBlurHandler,
    reset: msgReset,
  } = useInput((value) => value !== "");
  return (
    <>
      <Wrapper className="bg-gray text-center">
        <div className="body">
          <div className="content">
            <h3 className="fs-300 text-white-2 ff-sans">Contact</h3>
            <p className="fs-100 text-white ff-sans ">
              I would love to hear about your project and how I could help.
              Please fill in the form, and I’ll get back to you as soon as
              possible.
            </p>
          </div>
          <form className="flex-c">
            <input
              className={nameHasError ? "error" : null}
              type="text"
              placeholder="NAME"
              value={nameValue}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
            />
            {nameHasError ? <p className="error-message">Not valid</p> : null}
            <input
              type="email"
              placeholder="EMAIL"
              value={emailValue}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {emailHasError ? <p className="error-message">Not valid</p> : null}
            <textarea
              placeholder="MESSAGE"
              value={msgValue}
              onChange={msgChangeHandler}
              onBlur={msgBlurHandler}
            ></textarea>
            {msgHasError ? <p className="error-message">Not valid</p> : null}

            <button className="submit-btn link uppercase">send message</button>
          </form>
          <hr />
        </div>
      </Wrapper>
    </>
  );
};

export default Contact;

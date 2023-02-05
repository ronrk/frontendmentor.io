import Image from "next/image";
import { useEffect, useState } from "react";
import { useAppContext } from "../../../context/appContext";
import useInput from "../../../hooks/use-input";
import CheckoutFormWrapper from "./CheckoutForm.wrapper";
import FormControl from "./FormControl";
import FormGroup from "./FormGroup";

const CheckoutForm = () => {
  const [paymentMethod, setPaymentMethod] = useState<Payment | null>("e-money");

  let paymentContentEl: React.ReactNode =
    paymentMethod === "e-money" ? (
      <FormGroup className="flex">
        <FormControl className="flex-col">
          {isNumberError && <p className="error-msg">Invalid field</p>}
          <label htmlFor="number" className="fw-b text-black fs-300">
            e-Money Number
          </label>
          <input
            type="number"
            placeholder="238521993"
            value={enteredNumber}
            onBlur={onNumberBlur}
            onFocus={onNumberFocus}
            onChange={(e) => onNumberChange(e.target.value)}
            className={isNumberError ? "error" : ""}
          />
        </FormControl>
        <FormControl className="flex-col">
          {isPINError && <p className="error-msg">Invalid field</p>}
          <label htmlFor="pin" className="fw-b text-black fs-300">
            e-Money PIN
          </label>
          <input
            type="number"
            placeholder="6891"
            value={enteredPIN}
            onBlur={onPINBlur}
            onFocus={onPINFocus}
            onChange={(e) => onPINChange(e.target.value)}
            className={isPINError ? "error" : ""}
          />
        </FormControl>
      </FormGroup>
    ) : (
      <FormGroup className="cash-on flex">
        <div className="image__wrapper">
          <Image
            src={"/assets/checkout/icon-cash-on-delivery.svg"}
            alt={"cash on"}
            fill
          />
        </div>
        <p className="text-body text-black-light">
          {`The 'Cash on Delivery' option enables you to pay in cash when our
          delivery courier arrives at your residence. Just make sure your
          address is correct so that your order will not be cancelled.`}
        </p>
      </FormGroup>
    );

  return (
    <CheckoutFormWrapper className="flow flow-space--big bg-white">
      <h2 className="heading-2 text-black">Checkout</h2>
      <div className="flow flow-space--small">
        <h5 className="heading-6 text-primary">billing address</h5>
        <FormGroup className="form-group flex">
          <FormControl className="form-control flex-col">
            {isNameError && <p className="error-msg">Invalid field</p>}
            <label htmlFor="name" className="fw-b text-black">
              Name
            </label>
            <input
              value={enteredName}
              onChange={(e) => onNameChange(e.target.value)}
              onFocus={onNameFocus}
              onBlur={onNameBlur}
              type="text"
              name="name"
              id="name"
              placeholder="Alexei Ward"
              className={isNameError ? "error" : ""}
            />
          </FormControl>
          <FormControl className="form-control flex-col">
            {isEmailError && <p className="error-msg">Invalid field</p>}
            <label htmlFor="email" className="fw-b text-black">
              Email Address
            </label>
            <input
              value={enteredEmail}
              onChange={(e) => onEmailChange(e.target.value)}
              onFocus={onEmailFocus}
              onBlur={onEmailBlur}
              type="email"
              name="email"
              id="email"
              placeholder="alexei@gmail.com"
              className={isEmailError ? "error" : ""}
            />
          </FormControl>
          <FormControl className="form-control flex-col">
            {isPhoneError && <p className="error-msg">Invalid field</p>}
            <label htmlFor="phone" className="fw-b text-black">
              Phone Number
            </label>
            <input
              value={enteredPhone}
              onChange={(e) => onPhoneChange(e.target.value)}
              onFocus={onPhoneFocus}
              onBlur={onPhoneBlur}
              type="text"
              name="phone"
              id="phone"
              placeholder="+ 1 202-555-0136"
              className={isPhoneError ? "error" : ""}
            />
          </FormControl>
        </FormGroup>
      </div>
      <div className="flow flow-space--small">
        <h5 className="heading-6 text-primary">shipping info</h5>

        <FormGroup className="form-group flex">
          <FormControl fullWidth className="form-control flex-col">
            {isAddressError && <p className="error-msg">Invalid field</p>}
            <label htmlFor="address" className="fw-b text-black">
              Address
            </label>
            <input
              value={enteredAddress}
              onChange={(e) => onAddressChange(e.target.value)}
              onFocus={onAddressFocus}
              onBlur={onAddressBlur}
              type="text"
              name="address"
              id="address"
              placeholder="1137 Williams Avenue"
              className={isAddressError ? "error" : ""}
            />
          </FormControl>
          <FormControl className="form-control flex-col">
            {isZIPError && <p className="error-msg">Invalid field</p>}
            <label htmlFor="zip" className="fw-b text-black">
              ZIP Code
            </label>
            <input
              type="number"
              name="zip"
              id="zip"
              placeholder="10001"
              value={enteredZIP}
              onChange={(e) => onZIPChange(e.target.value)}
              onFocus={onZIPFocus}
              onBlur={onZIPBlur}
              className={isZIPError ? "error" : ""}
            />
          </FormControl>
          <FormControl className="form-control flex-col">
            {isCityError && <p className="error-msg">Invalid field</p>}
            <label htmlFor="city" className="fw-b text-black">
              City
            </label>
            <input
              value={enteredCity}
              onChange={(e) => onCityChange(e.target.value)}
              onFocus={onCityFocus}
              onBlur={onCityBlur}
              type="text"
              name="city"
              id="city"
              placeholder="New York"
              className={isCityError ? "error" : ""}
            />
          </FormControl>
          <FormControl className="form-control flex-col">
            {isCountryError && <p className="error-msg">Invalid field</p>}
            <label htmlFor="country" className="fw-b text-black">
              Country
            </label>
            <input
              value={enteredCountry}
              onChange={(e) => onCountryChange(e.target.value)}
              onFocus={onCountryFocus}
              onBlur={onCountryBlur}
              type="text"
              name="country"
              id="country"
              placeholder="United States"
              className={isCountryError ? "error" : ""}
            />
          </FormControl>
        </FormGroup>
      </div>
      <div className="flow flow-space--small">
        <h5 className="heading-6 text-primary">payment-details</h5>

        <FormGroup className="form-group flex">
          <FormControl checkbox className="form-control flex">
            <label htmlFor="payment" className="fw-b text-black">
              Payment Method
            </label>
            <div className="flex-col">
              <div
                className={`checkbox__input ${
                  paymentMethod === "e-money" ? "checked" : ""
                }`}
              >
                <input
                  type="checkbox"
                  name="payment"
                  id="e-money"
                  value="e-money"
                  checked={paymentMethod === "e-money"}
                  onChange={(e) => setPaymentMethod("e-money")}
                />
                <label htmlFor="e-money">e-Money</label>
              </div>
              <div
                className={`checkbox__input ${
                  paymentMethod === "cash" ? "checked" : ""
                }`}
              >
                <input
                  type="checkbox"
                  name="payment"
                  value="cash"
                  id="cash"
                  checked={paymentMethod === "cash"}
                  onChange={(e) => setPaymentMethod("cash")}
                />
                <label htmlFor="cash">Cash on Delivery</label>
              </div>
            </div>
          </FormControl>
        </FormGroup>
        {paymentContentEl}
      </div>
    </CheckoutFormWrapper>
  );
};

export default CheckoutForm;

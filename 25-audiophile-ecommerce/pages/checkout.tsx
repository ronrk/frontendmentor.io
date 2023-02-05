import CheckoutCart from "../src/components/checkout-page/CheckoutCart";
import CheckoutForm from "../src/components/checkout-page/CheckoutForm/CheckoutForm";
import { useRouter } from "next/router";
import Image from "next/image";
import { useAppContext } from "../src/context/appContext";
import useInput from "../src/hooks/use-input";
import FormGroup from "../src/components/checkout-page/CheckoutForm/FormGroup";
import FormControl from "../src/components/checkout-page/CheckoutForm/FormControl";
import CheckboxControl from "../src/components/checkout-page/CheckoutForm/CheckboxControl";
import { FormEvent, useState } from "react";
import CheckoutModal from "../src/components/checkout-page/CheckoutModal/CheckoutModal";

export type Payment = "cash" | "e-money";

interface IFormError {
  status: boolean;
  msg: string;
}

const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState<Payment | null>("e-money");
  const [formError, setFormError] = useState<IFormError | null>({
    status: true,
    msg: "",
  });
  const router = useRouter();
  const { toggleCheckoutModal, isCheckoutModal } = useAppContext();

  const {
    value: enteredName,
    onBlur: onNameBlur,
    onFocus: onNameFocus,
    isError: isNameError,
    handleChange: onNameChange,
    isTouched: isNameTouched,
  } = useInput((val) => val.trim() !== "");
  const {
    value: enteredEmail,
    onBlur: onEmailBlur,
    onFocus: onEmailFocus,
    isError: isEmailError,
    handleChange: onEmailChange,
    isTouched: isEmailTouched,
  } = useInput((val) => val.trim() !== "");

  const {
    value: enteredPhone,
    onBlur: onPhoneBlur,
    onFocus: onPhoneFocus,
    isError: isPhoneError,
    handleChange: onPhoneChange,
    isTouched: isPhoneTouched,
  } = useInput((val) => val.trim() !== "");

  const {
    value: enteredAddress,
    onBlur: onAddressBlur,
    onFocus: onAddressFocus,
    isError: isAddressError,
    handleChange: onAddressChange,
    isTouched: isAddressTouched,
  } = useInput((val) => val.trim() !== "");

  const {
    value: enteredZIP,
    onBlur: onZIPBlur,
    onFocus: onZIPFocus,
    isError: isZIPError,
    handleChange: onZIPChange,
    isTouched: isZIPTouched,
  } = useInput((val) => val.trim() !== "");

  const {
    value: enteredCity,
    onBlur: onCityBlur,
    onFocus: onCityFocus,
    isError: isCityError,
    handleChange: onCityChange,
    isTouched: isCityTouched,
  } = useInput((val) => val.trim() !== "");

  const {
    value: enteredCountry,
    onBlur: onCountryBlur,
    onFocus: onCountryFocus,
    isError: isCountryError,
    handleChange: onCountryChange,
    isTouched: isCountryTouched,
  } = useInput((val) => val.trim() !== "");

  const {
    value: enteredNumber,
    onBlur: onNumberBlur,
    onFocus: onNumberFocus,
    isError: isNumberError,
    handleChange: onNumberChange,
    isTouched: isNumberTouched,
  } = useInput((val) => val.trim() !== "");

  const {
    value: enteredPIN,
    onBlur: onPINBlur,
    onFocus: onPINFocus,
    isError: isPINError,
    handleChange: onPINChange,
    isTouched: isPINTouched,
  } = useInput((val) => val.trim() === "");

  const handleMethodChange = (newMethod: Payment) => {
    setPaymentMethod(newMethod);
  };

  const handleError = (msg: string) => {
    setFormError({ status: true, msg });

    setTimeout(() => {
      setFormError({ status: false, msg: "" });
    }, 5000);
  };

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError({ status: false, msg: "" });
    if (
      isNameError ||
      isEmailError ||
      isPhoneError ||
      isAddressError ||
      isZIPError ||
      isCityError ||
      isCountryError
    ) {
      handleError(
        "One or more of your field are invalid, please check your inputs"
      );

      return;
    } else if (paymentMethod === "e-money") {
      if (isNumberError || isPINError) {
        handleError("Something went wrong with your payment");
        return;
      }
    }
    onNameChange("");
    onEmailChange("");
    onPhoneChange("");
    onAddressChange("");
    onZIPChange("");
    onCityChange("");
    onCountryChange("");
    onNumberChange("");
    onPINChange("");
    toggleCheckoutModal();
  };

  let paymentContentEl: React.ReactNode =
    paymentMethod === "e-money" ? (
      <FormGroup className="flex">
        <FormControl
          value={enteredNumber}
          type={"text"}
          isError={isNumberError}
          label={"e-Money Number"}
          name={"number"}
          onChange={onNumberChange}
          placeholder={"238521993"}
          onBlur={onNumberBlur}
          onFocus={onNumberFocus}
        />
        <FormControl
          value={enteredPIN}
          type={"text"}
          isError={isPINError}
          label={"e-Money PIN"}
          name={"number"}
          onChange={onPINChange}
          placeholder={"6891"}
          onBlur={onPINBlur}
          onFocus={onPINFocus}
        />
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
    <main className="container checkout-page">
      {isCheckoutModal && <CheckoutModal />}
      <button onClick={() => router.back()} className="btn--back text-body">
        Go Back
      </button>
      {formError && <p>{formError.msg}</p>}
      <form className="form" onSubmit={formSubmitHandler}>
        <div className="flow flow-space--small  bg-white">
          <h2 className="heading-2 text-black">Checkout</h2>
          <h5 className="heading-6 text-primary">billing address</h5>
          <FormGroup className="form-group flex ">
            <FormControl
              value={enteredName}
              type={"text"}
              isError={isNameError}
              label={"Name"}
              name={"name"}
              onChange={onNameChange}
              placeholder={"Alexei Ward"}
              onBlur={onNameBlur}
              onFocus={onNameFocus}
            />
            <FormControl
              value={enteredEmail}
              type={"email"}
              isError={isEmailError}
              label={"Email"}
              name={"email"}
              onChange={onEmailChange}
              placeholder={"alexei@gmail.com"}
              onBlur={onEmailBlur}
              onFocus={onEmailFocus}
            />
            <FormControl
              type={"text"}
              name={"phone"}
              value={enteredPhone}
              isError={isPhoneError}
              label={"Phone Number"}
              onChange={onPhoneChange}
              onBlur={onPhoneBlur}
              onFocus={onPhoneFocus}
              placeholder={"+ 1 202-555-0136"}
            />
          </FormGroup>
          <h5 className="heading-6 text-primary">shipping info</h5>
          <FormGroup className="form-group flex">
            <FormControl
              value={enteredAddress}
              type={"text"}
              isError={isAddressError}
              label={"Address"}
              name={"name"}
              onChange={onAddressChange}
              placeholder={"1137 Williams Avenue"}
              onBlur={onAddressBlur}
              onFocus={onAddressFocus}
              fullWidth
            />
            <FormControl
              value={enteredZIP}
              type={"text"}
              isError={isZIPError}
              label={"ZIP"}
              name={"zip"}
              onChange={onZIPChange}
              placeholder={"10001"}
              onBlur={onZIPBlur}
              onFocus={onZIPFocus}
            />
            <FormControl
              type={"text"}
              name={"city"}
              value={enteredCity}
              isError={isCityError}
              label={"City"}
              onChange={onCityChange}
              onBlur={onCityBlur}
              onFocus={onCityFocus}
              placeholder={"New York"}
            />
            <FormControl
              type={"text"}
              name={"country"}
              value={enteredCountry}
              isError={isCountryError}
              label={"Country"}
              onChange={onCountryChange}
              onBlur={onCountryBlur}
              onFocus={onCountryFocus}
              placeholder={"United States"}
            />
          </FormGroup>
          <h5 className="heading-6 text-primary">payment-details</h5>
          <FormGroup className="flow">
            <CheckboxControl
              onChange={handleMethodChange}
              paymentMethod={paymentMethod}
            />
            {paymentContentEl}
          </FormGroup>
        </div>
        <CheckoutCart />
      </form>
    </main>
  );
};

export default CheckoutPage;

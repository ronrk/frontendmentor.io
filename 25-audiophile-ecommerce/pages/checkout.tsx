import CheckoutCart from "../src/components/checkout-page/CheckoutCart";
import { useRouter } from "next/router";
import Image from "next/image";
import { useAppContext } from "../src/context/appContext";
import FormGroup from "../src/components/checkout-page/CheckoutForm/FormGroup";
import FormControl from "../src/components/checkout-page/CheckoutForm/FormControl";
import CheckboxControl from "../src/components/checkout-page/CheckoutForm/CheckboxControl";
import { ChangeEvent, FormEvent, useState } from "react";
import CheckoutModal from "../src/components/checkout-page/CheckoutModal/CheckoutModal";

export type Payment = "cash" | "e-money";

enum InputNames {
  NAME = "name",
  EMAIL = "email",
  PHONE = "phone",
  ADDRESS = "address",
  ZIP = "zip",
  CITY = "city",
  COUNTRY = "country",
  PIN = "pin",
  NUMBER = "number",
}

const CheckoutPage = () => {
  const [values, setValues] = useState({
    [InputNames.NAME]: "",
    [InputNames.EMAIL]: "",
    [InputNames.ADDRESS]: "",
    [InputNames.PHONE]: "",
    [InputNames.ZIP]: "",
    [InputNames.PIN]: "",
    [InputNames.NUMBER]: "",
    [InputNames.CITY]: "",
    [InputNames.COUNTRY]: "",
  });
  const [paymentMethod, setPaymentMethod] = useState<Payment | null>("e-money");

  const router = useRouter();
  const { toggleCheckoutModal, isCheckoutModal } = useAppContext();
  const inputsAddress = [
    {
      id: 1,
      name: InputNames.NAME,
      type: "text",
      placeholder: "Alexei Ward",
      errorMsg:
        "Name should be 3-16 characters and shouldn't include any speciel cahracter",
      label: "Name",
      required: true,
      pattern: "^[a-zA-Z_ ]{3,16}$",
    },
    {
      id: 2,
      name: InputNames.EMAIL,
      type: "email",
      placeholder: "alexei@gamil.com",
      errorMsg: "It should be a valid Email",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: InputNames.PHONE,
      type: "text",
      placeholder: "+ 1 202-555-0136",
      errorMsg: "No a valid Phone number",
      label: "Phone",
      required: true,
      pattern: "^[+][0-9]{3,}$",
    },
  ];
  const inputInfo = [
    {
      id: 4,
      name: InputNames.ADDRESS,
      type: "text",
      placeholder: "1137 Williams Avenue",
      errorMsg: "Invalid Address",
      label: "Address",
      required: true,
      pattern: "^[a-zA-Z0-9_ ]{3,}$",
    },
    {
      id: 5,
      name: InputNames.ZIP,
      type: "text",
      placeholder: "12345",
      errorMsg: "ZIP invalid",
      label: "ZIP",
      required: true,
      pattern: "^[0-9]{5,6}$",
    },
    {
      id: 6,
      name: InputNames.CITY,
      type: "text",
      placeholder: "New York",
      errorMsg: "City Invalid",
      label: "City",
      required: true,
      pattern: "^[a-zA-Z0-9_ ]{3,}$",
    },
    {
      id: 7,
      name: InputNames.COUNTRY,
      type: "text",
      placeholder: "United States",
      errorMsg: "Country invalid",
      label: "Country",
      required: true,
      pattern: "^[a-zA-Z0-9_ ]{3,}$",
    },
  ];
  const inputEmoney = [
    {
      id: 8,
      name: InputNames.NUMBER,
      type: "text",
      placeholder: "238521993",
      errorMsg: "Wrong number format",
      label: "e-Money Number",
      required: paymentMethod === "e-money",
      pattern: "^[0-9]{9,9}$",
    },
    {
      id: 9,
      name: InputNames.PIN,
      type: "text",
      placeholder: "6891",
      errorMsg: "Not a Valid PIN",
      label: "e-Money PIN",
      required: paymentMethod === "e-money",
      pattern: "^[0-9]{4,4}$",
    },
  ];

  const handleMethodChange = (newMethod: Payment) => {
    setPaymentMethod(newMethod);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toggleCheckoutModal();
  };

  let paymentContentEl: React.ReactNode =
    paymentMethod === "e-money" ? (
      <FormGroup className="flex">
        {inputEmoney.map((input) => (
          <FormControl
            key={input.id}
            value={values[input.name]}
            {...input}
            onChange={onChange}
          />
        ))}
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
      <form className="form" onSubmit={formSubmitHandler}>
        <div className="flow flow-space--small  bg-white">
          <h2 className="heading-2 text-black">Checkout</h2>
          <h5 className="heading-6 text-primary">billing address</h5>
          <FormGroup className="form-group flex ">
            {inputsAddress.map((input) => (
              <FormControl
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
          </FormGroup>
          <h5 className="heading-6 text-primary">shipping info</h5>
          <FormGroup className="form-group flex">
            {inputInfo.map((input) => (
              <FormControl
                key={input.id}
                {...input}
                onChange={onChange}
                value={values[input.name]}
              />
            ))}
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

import Link from "next/link";
import React from "react";
import CheckoutCart from "../src/components/checkout-page/CheckoutCart";
import CheckoutForm from "../src/components/checkout-page/CheckoutForm/CheckoutForm";
import { useRouter } from "next/router";

const CheckoutPage = () => {
  const router = useRouter();
  console.log(router);
  return (
    <main>
      <button onClick={() => router.back()} className="text-body">
        Go Back
      </button>
      <div className="section">
        <CheckoutForm />
        <CheckoutCart />
      </div>
    </main>
  );
};

export default CheckoutPage;

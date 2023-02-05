import CheckoutCart from "../src/components/checkout-page/CheckoutCart";
import CheckoutForm from "../src/components/checkout-page/CheckoutForm/CheckoutForm";
import { useRouter } from "next/router";

const CheckoutPage = () => {
  const router = useRouter();
  console.log(router);
  return (
    <main className="container checkout-page">
      <button onClick={() => router.back()} className="btn--back text-body">
        Go Back
      </button>
      <section className="section">
        <CheckoutForm />
        <CheckoutCart />
      </section>
    </main>
  );
};

export default CheckoutPage;

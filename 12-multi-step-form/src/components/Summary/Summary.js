import React, { useState } from "react";
import Wrapper from "./Summary.styled";
import { useFormStepContext } from "../../context/stepForm-context";
import { Link } from "react-router-dom";
import { planList, addonsList } from "../../utils/listItems";
import ThankYou from "../ThankYou/ThankYou";

const Summary = () => {
  const [submited, setSubmited] = useState(false);
  const { values, prevPage, movePageToPlanPage, total, handleSubmitSum } =
    useFormStepContext();

  const handleSubmit = () => {
    handleSubmitSum();
    setSubmited(true);
  };

  const planPrice = values.yearly
    ? `$${planList.find((plan) => plan.name === values.plan)?.yearlyPrice}/yr`
    : `$${planList.find((plan) => plan.name === values.plan)?.monthlyPrice}/mo`;

  const addOnsContent = values.addOns.map((item, idx) => {
    return (
      <div key={item + idx} className="summary__box add-on">
        <p>{item}</p>
        <span>
          {values.yearly
            ? `+$${
                addonsList.find((addon) => addon.name === item)?.yearlyPrice
              }/yr`
            : `+$${
                addonsList.find((addon) => addon.name === item)?.monthlyPrice
              }/mo`}
        </span>
      </div>
    );
  });

  if (submited) {
    return <ThankYou />;
  }

  return (
    <Wrapper className="form__flex">
      <div className="form__header">
        <h2 className="form__title">Finishing up</h2>
        <span>Double-check everything looks OK before confirming.</span>
      </div>
      <div className="summary-content">
        <div className="summary__box plan">
          <div className="text">
            <h5>
              {values.plan.slice(0, 1).toUpperCase() + values.plan.slice(1)} (
              {values.yearly ? "Yearly" : "Monthly"})
            </h5>
            <Link to="/2" className="change-plan" onClick={movePageToPlanPage}>
              Change
            </Link>
          </div>
          <h5 className="price">{planPrice}</h5>
        </div>
        <hr />
        {addOnsContent}
        <div className="summary__box sum">
          <p>Total {values.yearly ? "(per year)" : "(per month)"}</p>
          <span className="total">+${total}/mo</span>
        </div>
      </div>
      <div className="btn-container">
        <button className="btn btn-prev" onClick={prevPage}>
          Go Back
        </button>
        <button className="btn btn-next" onClick={handleSubmit}>
          Next Step
        </button>
      </div>
    </Wrapper>
  );
};

export default Summary;

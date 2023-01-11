import React, { useState } from "react";
import { useFormStepContext } from "../../context/stepForm-context";
import Wrapper from "./SelectPlan.styled";

import { planList } from "../../utils/listItems";

const SelectPlan = () => {
  const { prevPage, values, toggleYearly, handlePlanChange, nextPage } =
    useFormStepContext();
  const [error, setError] = useState({ status: false, message: "" });

  const handleCheckboxChange = (e) => {
    const { checked } = e.target;
    toggleYearly(checked);
  };

  const handleRadioChange = (e, monthlyPrice, yearlyPrice) => {
    const { value } = e.target;
    if (values.yearly) {
      handlePlanChange(value, yearlyPrice);
    }
    if (!values.yearly) {
      handlePlanChange(value, monthlyPrice);
    }
    setError({ status: false, message: "" });
  };

  const handleSubmit = () => {
    setError({ status: false, message: "" });
    if (values.plan === "") {
      setError({ status: true, message: "Must choose a plan" });
      return;
    }
    nextPage();
  };

  return (
    <Wrapper className="form__flex">
      <div className="form__header">
        <h2 className="form__title">Select your plan</h2>
        <span>You have the option of monthly or yearly billing.</span>
      </div>
      <div className="form-content">
        <div className="radio-container">
          {error.status ? <span className="error">{error.message}</span> : null}
          {planList.map((item, id) => {
            const { name, monthlyPrice, yearlyPrice, icon } = item;
            return (
              <div key={name + id} className="form-control">
                <input
                  type="radio"
                  name="plan"
                  value={name}
                  id={name}
                  onChange={(e) =>
                    handleRadioChange(e, monthlyPrice, yearlyPrice)
                  }
                  checked={values.plan === name}
                />
                <label htmlFor={name}>
                  <div className="radio-input__content">
                    <img src={icon} alt={`icon ${name}`} />
                    <h4>{name}</h4>
                    <span>
                      {values.yearly
                        ? `$${yearlyPrice}/yr`
                        : `$${monthlyPrice}/mo`}
                    </span>
                  </div>
                </label>
              </div>
            );
          })}
        </div>
        <div className="form-control checkbox">
          <label htmlFor="yearly" className={!values.yearly ? "active" : null}>
            Monthly
          </label>
          <input
            type="checkbox"
            name="yearly"
            id="yearly"
            onChange={handleCheckboxChange}
            className={values.yearly ? "active" : null}
          />
          <label htmlFor="yearly" className={values.yearly ? "active" : null}>
            Yearly
          </label>
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

export default SelectPlan;

import React from "react";
import { useFormStepContext } from "../../context/stepForm-context";
import Wrapper from "./AddOns.styled";

import { addonsList } from "../../utils/listItems";

const AddOns = () => {
  const { prevPage, nextPage, values, handleAddOnsChange } =
    useFormStepContext();

  const handleChecked = (e, monthlyPrice, yearlyPrice) => {
    const { checked, value } = e.target;

    if (values.yearly) {
      handleAddOnsChange({ checked, value, price: yearlyPrice });
    }
    if (!values.yearly) {
      handleAddOnsChange({ checked, value, price: monthlyPrice });
    }
  };

  const handleSubmit = () => {
    nextPage();
  };

  return (
    <Wrapper className="form__flex">
      <div className="form__header">
        <h2 className="form__title">Pick add-ons</h2>
        <span>Add-ons helo enhance your gamung experience.</span>
      </div>
      <div className="form-content">
        {addonsList.map((item, id) => {
          const { name, desc, monthlyPrice, yearlyPrice } = item;
          return (
            <div
              key={name + id}
              className={
                values.addOns.includes(name)
                  ? "form-control active"
                  : "form-control"
              }
            >
              <input
                type="checkbox"
                name="addOns"
                value={name}
                id={name}
                onChange={(e) => {
                  handleChecked(e, monthlyPrice, yearlyPrice);
                }}
                checked={values.addOns.includes(name)}
                className={values.addOns.includes(name) ? "active" : null}
              />
              <label htmlFor={name}>
                <div className="checkbox-label__content">
                  <div className="text">
                    <h4>{name}</h4>
                    <p>{desc}</p>
                  </div>
                  <span className="price">
                    {values.yearly
                      ? `+$${yearlyPrice}/yr`
                      : `+$${monthlyPrice}/mo`}
                  </span>
                </div>
              </label>
            </div>
          );
        })}
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

export default AddOns;

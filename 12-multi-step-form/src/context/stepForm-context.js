import React, { useReducer, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import stepFormReducer from "../reducer/stepForm-reducer";

const stepFormContext = React.createContext();

const initialState = {
  page: 1,
  values: {
    name: "",
    email: "",
    phone: "",
    yearly: false,
    plan: "",
    addOns: [],
    total: 0,
  },
};

const StepFormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(stepFormReducer, initialState);

  const progressNextStep = (values) => {
    dispatch({ type: "ADD_VALUES", payload: values });
    nextPage();
  };

  const toggleYearly = (value) => {
    dispatch({ type: "TOGGLE_YEARLY", payload: value });
  };

  const handlePlanChange = (value, price) => {
    dispatch({ type: "PLAN_CHANGE", payload: { value, price } });
  };

  const handleAddOnsChange = ({ value, checked, price }) => {
    if (checked) {
      dispatch({ type: "ADD_ADD_ON", payload: { value, price } });
    }
    if (!checked) {
      dispatch({ type: "REMOVE_ADD_ON", payload: { value, price } });
    }
  };

  const handleSubmitSum = () => {};

  const nextPage = () => {
    dispatch({ type: "NEXT_PAGE" });
  };
  const prevPage = () => {
    dispatch({ type: "PREV_PAGE" });
  };

  const movePageToPlanPage = () => {
    dispatch({ type: "PAGE_PLAN" });
  };

  return (
    <stepFormContext.Provider
      value={{
        ...state,
        nextPage,
        prevPage,
        progressNextStep,
        toggleYearly,
        handlePlanChange,
        handleAddOnsChange,
        movePageToPlanPage,
        handleSubmitSum,
      }}
    >
      {children}
    </stepFormContext.Provider>
  );
};

export const useFormStepContext = () => useContext(stepFormContext);

export default StepFormProvider;

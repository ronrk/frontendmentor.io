const stepFormReducer = (state, action) => {
  if (action.type === "NEXT_PAGE") {
    const newPage = state.page + 1;
    return { ...state, page: newPage };
  }

  if (action.type === "PREV_PAGE") {
    console.log("prev page");

    return { ...state, page: state.page - 1 };
  }
  if (action.type === "ADD_VALUES") {
    return { ...state, values: { ...state.values, ...action.payload } };
  }

  if (action.type === "TOGGLE_YEARLY") {
    return {
      ...state,
      values: { ...state.values, yearly: action.payload, plan: "" },
    };
  }

  if (action.type === "PLAN_CHANGE") {
    const { value, price } = action.payload;

    return { ...state, values: { ...state.values, plan: value }, total: price };
  }

  if (action.type === "ADD_ADD_ON") {
    const { value, price } = action.payload;

    const newTotal = state.total + price;
    return {
      ...state,
      total: newTotal,
      values: { ...state.values, addOns: [...state.values.addOns, value] },
    };
  }
  if (action.type === "REMOVE_ADD_ON") {
    const { value, price } = action.payload;

    const updatedAddOns = state.values.addOns.filter((item) => item !== value);

    const newTotal = state.total - price;

    return {
      ...state,
      total: newTotal,
      values: { ...state.values, addOns: updatedAddOns },
    };
  }

  if (action.type === "PAGE_PLAN") {
    return { ...state, page: 2 };
  }

  return state;
};

export default stepFormReducer;

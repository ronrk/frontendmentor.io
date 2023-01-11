const reducer = (state, action) => {
  if (action.type === "CALCULATE_TOTAL_PRICE") {
    const newTotal = state.cart.reduce((acc, item) => {
      console.log(item);
      return acc + item.totalItems * item.finalPrice;
    }, 0);

    return { ...state, totalPrice: newTotal };
  }
  if (action.type === "ADD_TO_CART") {
    // console.log(action.payload);
    const { DUMMY_PRODUCT: product, total } = action.payload;
    if (total <= 0) return state;
    const singleCartItem = state.cart.find(
      (item) => item.title === product.title
    );

    if (singleCartItem) {
      singleCartItem.totalItems = singleCartItem.totalItems + total;
      return { ...state };
    }

    const newCart = [...state.cart, { ...product, totalItems: total }];
    return { ...state, cart: newCart };
  }

  if (action.type === "REMOVE_FROM_CART") {
    const newCart = state.cart.filter((item) => item.title !== action.payload);
    return { ...state, cart: newCart };
  }

  return state;
};

export default reducer;

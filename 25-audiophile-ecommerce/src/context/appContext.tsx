import React, { FC, useCallback, useContext, useEffect, useState } from "react";

interface IProps {
  children: React.ReactNode;
}
interface ICartItem {
  name: string;
  slug: string;
  price: number;
  quantity?: number;
  categoryImage: string;
}

interface IContextProps {
  openCart: () => void;
  closeCart: () => void;
  isCartOpen: boolean;
  cart: ICartItem[];
  totalPrice: number;
  addItemToCart: (cartItem: ICartItem, quantity: number) => void;
  removeItemFromCart: (cartItem: ICartItem) => void;
  clearCart: () => void;
}

const initialState = {
  openCart: () => {},
  closeCart: () => {},
  addItemToCart: (cartItem: ICartItem, quantity: number = 1) => {},
  removeItemFromCart: (cartItem: ICartItem) => {},
  isCartOpen: false,
  cart: [],
  totalPrice: 0,
  clearCart: () => {},
};

const AppContext = React.createContext<IContextProps>(initialState);

const AppContextProvider: FC<IProps> = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState<ICartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const openCart = () => {
    setIsCartOpen(true);
  };
  const closeCart = () => {
    setIsCartOpen(false);
  };

  const updateTotalPrice = useCallback(() => {
    const updatedTotalPrice = cart.reduce((acc, item) => {
      acc += item.quantity! * item.price;
      return acc;
    }, 0);
    setTotalPrice(updatedTotalPrice);
  }, [cart]);

  useEffect(() => {
    updateTotalPrice();
  }, [cart, updateTotalPrice]);

  const addItemToCart = async (cartItem: ICartItem, quantity: number = 1) => {
    let newCartItem: ICartItem;
    let updatedCart: ICartItem[];
    const foundCartItem = cart.find((cart) => cart.slug === cartItem.slug);
    if (foundCartItem) {
      newCartItem = {
        ...foundCartItem,
        quantity: foundCartItem.quantity! + quantity,
      };
      updatedCart = cart.map((item) => {
        if (item.slug === newCartItem.slug) return newCartItem;
        return item;
      });
    } else {
      newCartItem = { ...cartItem, quantity: 1 };
      updatedCart = [...cart, { ...cartItem, quantity: quantity }];
    }
    setCart(updatedCart);
  };

  const removeItemFromCart = (cartItem: ICartItem) => {
    let newCart: ICartItem[];

    const newQuantity = cartItem.quantity! - 1;
    if (newQuantity <= 0) {
      newCart = cart.filter((item) => item.slug !== cartItem.slug);
    } else {
      newCart = cart.map((item) => {
        if (item.slug === cartItem.slug) {
          return { ...cartItem, quantity: newQuantity };
        }
        return item;
      });
    }

    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const appValue = {
    openCart,
    closeCart,
    isCartOpen,
    cart,
    totalPrice,
    addItemToCart,
    removeItemFromCart,
    clearCart,
  };

  return <AppContext.Provider value={appValue}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);

export default AppContextProvider;

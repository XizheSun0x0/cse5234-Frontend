/* eslint-disable react/prop-types */

// CartContext.js

import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // Add the item to the cart
      return {
        ...state,
        selected_items: new Map([...state.selected_items, action.payload]),
      };
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, {
    selected_items: new Map(),
  });

  const addToCart = (item, quantity) => {
    dispatch({ type: "ADD_TO_CART", payload: [item, quantity] });
  };

  return (
    <CartContext.Provider value={{ cartState, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export { CartProvider, useCart };

/* eslint-disable no-case-declarations */
/* eslint-disable react/prop-types */

// CartContext.js

import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const cartReducer = (state, action) => {
  let newMap;
  switch (action.type) {
    case "ADD_TO_CART":
      // Add the item to the cart

      if (!state.selected_items.has(action.payload[0])) {
        newMap = new Map([...state.selected_items, action.payload]);
      } else {
        newMap = new Map([...state.selected_items]);
        newMap.set(
          action.payload[0],
          newMap.get(action.payload[0]) + action.payload[1]
        );
      }
      return {
        ...state,
        selected_items: newMap,
      };
    case "CLEAR_CART":
      return {
        ...state,
        selected_items: new Map(),
      };
    case "DELETE_ITEM":
      newMap = new Map([...state.selected_items]);
      newMap.delete(action.payload[0]);

      return {
        ...state,
        selected_items: newMap,
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

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART", payload: [] });
  };

  const deleteItem = (item) => {
    dispatch({ type: "DELETE_ITEM", payload: [item] });
  };

  return (
    <CartContext.Provider
      value={{ cartState, addToCart, clearCart, deleteItem }}
    >
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

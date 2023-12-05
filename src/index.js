/* eslint-disable no-unused-vars */
/* eslint-disable react/no-deprecated */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { CartProvider } from "./CartContext";

ReactDOM.render(
  <CartProvider>
    <App />
  </CartProvider>,
  document.getElementById("root")
);

reportWebVitals();

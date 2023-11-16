/* eslint-disable no-unused-vars */
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./paymentEntry.css";

const PaymentEntry = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    navigate("/shippingEntry", { state: location.state });
  };
  console.log("location:", location.state);
  return (
    <div>
      <h1>Credit card info</h1>

      <form onSubmit={handlesubmit}>
        <label>Credit card number</label>
        <input
          type="text"
          required
          onChange={(e) => {
            location.state.credit_card_numer = e.target.value;
          }}
        />
        <br />
        <label>CVV code</label>
        <input
          type="text"
          required
          onChange={(e) => {
            location.state.cvvcode = e.target.value;
          }}
        />
        <br />
        <label>Card holder name</label>
        <input
          type="text"
          required
          onChange={(e) => {
            location.state.card_holder_name = e.target.value;
          }}
        />
        <br />

        <label>Expiration date</label>

        <select
          required
          onChange={(e) => {
            // Create a new date object and set the month
            const newExpiry = new Date(location.state.expir_date || new Date());
            newExpiry.setMonth(e.target.value - 1); // Month is 0-indexed
            // Update the date in the location state
            location.state.expir_date = newExpiry.toISOString();
          }}
        >
          <option value="">Month</option>
          {Array.from({ length: 12 }, (_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>

        <select
          required
          onChange={(e) => {
            // Create a new date object and set the year
            const newExpiry = new Date(location.state.expir_date || new Date());
            newExpiry.setFullYear(e.target.value);
            // Update the date in the location state
            location.state.expir_date = newExpiry.toISOString();
          }}
        >
          <option value="">Year</option>
          {Array.from({ length: 10 }, (_, i) => {
            const year = new Date().getFullYear() + i;
            return (
              <option key={year} value={year}>
                {year}
              </option>
            );
          })}
        </select>

        <br />

        <button className="button">Shipping info</button>
      </form>
    </div>
  );
};

export default PaymentEntry;
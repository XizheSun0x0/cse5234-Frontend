/* eslint-disable no-unused-vars */
import React from "react";
import { useLocation, useNavigate} from 'react-router-dom';

const PaymentEntry = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const handlesubmit = (e) => {
        navigate('/purchase/shippingEntry', { state: location.state});
    }
    console.log("location:", location);
    return (
        <div>
            <h1>
                Credit card info
            </h1>

            <form onSubmit={handlesubmit}>
                <label>Credit card number</label>
                <input 
                    type="text"
                    required
                    onChange={(e) =>
                    { location.state.credit_card_numer = e.target.value; }}
                />
                <br />
                <label>Expiration date</label>
                <input 
                    type="date"
                    required
                    onChange={(e) =>
                    { location.state.expir_date = e.target.value; }}
                />
                <br />
                <label>CVV code</label>
                <input 
                    type="text"
                    required
                    onChange={(e) =>
                    { location.state.cvvcode = e.target.value; }}
                />
                <br />
                <label>Card holder name</label>
                <input 
                    type="text"
                    required
                    onChange={(e) =>
                    { location.state.card_holder_name = e.target.value; }}
                />
                <br />
                <button className="button">Shipping info</button>
            </form>
        </div>
    );
};

export default PaymentEntry;
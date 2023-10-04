/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Purchase = () => {
    const [order, setOrder] = useState({
        buyQuantity: [0, 0, 0, 0, 0], credit_card_numer: '', expir_date: '', cvvcode: '',
        card_holder_name: '',name:'' ,address_1: '', address_2: '', city: '', state: '', zip: '',
    });
    const navigate = useNavigate();
    const handlesubmit = (e) => {
        navigate('/purchase/paymentEntry', { state:order});
    }
    console.log("order: ", order);

    return (
        <div className="purchase">
            <form onSubmit={handlesubmit}>
                <label>Product 1</label>
                <input 
                    type="number"
                    required
                    onChange={(e) =>
                    { order.buyQuantity[0] = e.target.value; }}
                />
                <br />
                <label>Product 2</label>
                <input 
                    type="number"
                    required
                    onChange={(e) =>
                    { order.buyQuantity[1] = e.target.value; }}
                />
                <br />
                <button className="button">Pay</button>
            </form>
        </div>
    );


};

// const purchase = () => {
//     let title = "purchase page";

//     return (
//         <div>
//             <h1>
//                 {title}
//             </h1>
//         </div>
//     );
// };

export default Purchase;
/* eslint-disable no-unused-vars */
import React from "react";
import { useLocation, useNavigate} from 'react-router-dom';

const ViewOrder = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const handlesubmit = (e) => {
        navigate('/purchase/viewconfirmation', { state: location.state});
    }
    console.log(location.state)
    return (
        <div>
            <h2>Order detail:</h2>
            {
            location.state.selected_items && location.state.selected_items.size > 0 ?
            Array.from(location.state.selected_items, ([item, quantity]) => (
                <div key={item.id}>
                    <label>{item.name} - Quantity: {quantity}</label>
                </div>
            )) :
            <p>No items selected.</p>
        }
            <button className="button" onClick={handlesubmit}>Confirm order</button>
        </div>
    );
};

export default ViewOrder;
/* eslint-disable no-unused-vars */
import React from "react";
import { useLocation, useNavigate} from 'react-router-dom';

const ViewOrder = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const handlesubmit = (e) => {
        navigate('/purchase/viewconfirmation', { state: location.state});
    }

    return (
        <div>
            <h2>Order detail:</h2>
            {/* <br />
            <h3>product 1 &emsp; &emsp; quantity:{location.state.buyQuantity[0] }</h3>
            <br />
            <h3>product 2 &emsp; &emsp; quantity:{location.state.buyQuantity[1]}</h3>
            <br /> */}
            {
                location.state.selected_items.map((item)=>(
                    <div key = {item.id}>
                        <label>{item.id} ({'x'}{item.selected_quantity})</label>
                    </div>
                ))
            }
            <button className="button" onClick={handlesubmit}>Confirm order</button>
        </div>
    );
};

export default ViewOrder;
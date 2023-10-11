/* eslint-disable no-unused-vars */
import React from "react";
import { useLocation, useNavigate} from 'react-router-dom';

const ShippingEntry = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const handlesubmit = (e) => {
        navigate('/purchase/vieworder', { state: location.state});
    }

    return (
        <div>
            <form onSubmit={handlesubmit}>
                <label>Name</label>
                <input 
                    type="text"
                    required
                    onChange={(e) =>
                    { location.state.name = e.target.value; }}
                />
                <br />
                <label>Address 1</label>
                <input 
                    type="text"
                    required
                    onChange={(e) =>
                    { location.state.address_1 = e.target.value; }}
                />
                <br />
                <label>Address 2</label>
                <input 
                    type="text"
                    required
                    onChange={(e) =>
                    { location.state.address_2 = e.target.value; }}
                />
                <br />
                <label>City</label>
                <input 
                    type="text"
                    required
                    onChange={(e) =>
                    { location.state.city = e.target.value; }}
                />
                <br />
                <label>State</label>
                <input 
                    type="text"
                    required
                    onChange={(e) =>
                    { location.state.state = e.target.value; }}
                />
                <br />
                <label>Zip</label>
                <input 
                    type="text"
                    required
                    onChange={(e) =>
                    { location.state.zip = e.target.value; }}
                />
                <br />
                <button className="button">Confirm address</button>
            </form>
        </div>
    );
};

export default ShippingEntry;
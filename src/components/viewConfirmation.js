/* eslint-disable no-unused-vars */
import React from "react";
import { useLocation, useNavigate} from 'react-router-dom';

const ViewConfirmarion = () => {
    const confirmationNum = '0000000000000000';
    const location = useLocation();
    console.log("location: ", location);
    return (
        <div>
            <h1>Thanks for your order!</h1>
            <h2>Confirmation number: {confirmationNum}</h2>
        </div>
    );
};

export default ViewConfirmarion;
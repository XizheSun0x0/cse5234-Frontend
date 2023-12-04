/* eslint-disable no-unused-vars */
import React,{useEffect,useState} from "react";
import { useLocation, useNavigate} from 'react-router-dom';

const ViewConfirmarion = () => {
    // const confirmationNum = '0000000000000000';
    // const location = useLocation();
    // console.log("location: ", location.state);
    // return (
    //     <div>
    //         <h1>Thanks for your order!</h1>
    //         <h2>Confirmation number: {confirmationNum}</h2>
    //     </div>
    // );
    const [confirmationNumber, setConfirmationNumber] = useState(null);
    const [error, setError] = useState(null);
    const location = useLocation();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/order-processing/order', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: location.state
                });

                const result = await response.json();
                if (response.ok && result['confirmation number']) {
                    setConfirmationNumber(result['confirmation number']);
                } else if (result.Error) {
                    setError(result.Error);
                }
            } catch (e) {
                setError('Failed to process the order.');
                console.error('There was an error processing your request:', e);
            }
        };

        // Call the fetchData function if location.state.selected_items exists
        if (location.state && location.state.selected_items) {
            fetchData();
        } else {
            setError('No items to process.');
        }
    }, [location.state]);
    return (
        <div>
            <h1>Thanks for your order!</h1>
            {confirmationNumber && (
                <h2>Confirmation number: {confirmationNumber}</h2>
            )}
            {error && (
                <div>
                    <h2>Unable to process your order</h2>
                    <p>{error}</p>
                </div>
            )}
        </div>
    );
};

export default ViewConfirmarion;
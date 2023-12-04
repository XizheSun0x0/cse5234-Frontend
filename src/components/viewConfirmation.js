/* eslint-disable no-unused-vars */
import React,{useEffect,useState} from "react";
import { useLocation, useNavigate} from 'react-router-dom';

const ViewConfirmarion = () => {
    const [confirmationNumbers, setConfirmationNumbers] = useState(null);
    const [error, setError] = useState(null);
    const location = useLocation();
    console.log(location.state)

    function transformSelectedItems(locationState) {
        // Check if 'selected_items' exists and is a Map
        if (locationState.selected_items && locationState.selected_items instanceof Map) {
            // Transform the Map into an array of objects
            const transformedItems = Array.from(locationState.selected_items, ([item, quantity]) => {
                return {
                    id: item.id, // Assuming 'id' is a property of the item object
                    quantity: quantity
                };
            });
    
            // Update the 'selected_items' in locationState with the new array
            locationState.selected_items = transformedItems;
        }
    }
    


    console.log({"before return":location.state})
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/order-processing/order', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(location.state)
                });

                const result = await response.json();
                if (response.ok && result['order_confirmation_number']) {
                    setConfirmationNumbers(result);
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
    console.log(confirmationNumbers)
    return (
        <div>
            <h1>Thanks for your order!</h1>
            {confirmationNumbers && (
                <div className="thanks">
                    <h2>Order Information:</h2>
                    {Object.entries(confirmationNumbers).map(([key, value]) => (
                        <div className="number-record" key={key}>
                            <h2>{key}: {value}</h2>
                        </div>
                    ))}
                </div>
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
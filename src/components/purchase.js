import React, { useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';

const Purchase = () => {
    const [order, setOrder] = useState({
        selected_items: [],items: [], credit_card_numer: '', expir_date: '', cvvcode: '',
        card_holder_name: '',name:'' ,address_1: '', address_2: '', city: '', state: '', zip: '',
    });
    const navigate = useNavigate();
    const handlesubmit = (e) => {
        navigate('/purchase/paymentEntry', { state:order});
    }
    console.log("order: ", order);


    useEffect(() => {
        fetch('/inventory-managment/inventory')
            .then(res => res.json())
            .then(items => {
                // Create a new object for the order state with the fetched items
                setOrder(prevOrder => ({
                    ...prevOrder,
                    items: items.map(item => ({
                        ...item,
                        buyQuantity: 0 // Assuming you want to initialize buyQuantity as 0
                    }))
                }));
            });
    }, []);

    // This handles changes to any of the quantity inputs.
    const handleQuantityChange = (itemId, quantity) => {
        setOrder({
            ...order,
            items: order.items.map(item =>
                item.id === itemId ? { ...item, buyQuantity: Number(quantity) } : item
            )
        });
    };

    return (
        <div className="purchase">
            <form onSubmit={handlesubmit}>
                {order.items.map((item) => (
                    <div key={item.id} className="item-entry">
                        <label>{item.name} (${item.price})</label>
                        <input 
                            type="number"
                            min="0"
                            max={item.available_quantity}
                            value={item.buyQuantity}
                            onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                            required
                        />
                        <br />
                    </div>
                ))}
                <button type="submit" className="button">Pay</button>
            </form>
        </div>
    );


};
export default Purchase;
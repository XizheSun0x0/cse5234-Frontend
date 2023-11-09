import React, { useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';

const Purchase = () => {
    const [inventory, setInventory] = useState({
        selected_items: [],available_items: [],
    });
    const navigate = useNavigate();
    const handlesubmit = (e) => {
        navigate('/purchase/paymentEntry', { state:inventory.selected_items});
    }
    console.log("order: ", inventory);


    useEffect(() => {
        fetch('/inventory-managment/inventory')
            .then(res => res.json())
            .then(items => {
                // Create a new object for the order state with the fetched items
                setInventory(inventory => ({
                    ...inventory,
                    available_items: items,
                }));
            });
    }, []);

    // This handles changes to any of the quantity inputs.
    const handleQuantityChange = (item, quantity) => {
        setInventory(inventory => {
            inventory.selected_items.push({
                ...item,
                selected_quantity: quantity,
            });
            return {
                ...inventory
            };
        });
    };

    return (
        <div className="purchase">
            <form onSubmit={handlesubmit}>
                {inventory.available_items.map((item) => (
                    <div key={item.id} className="item-entry">
                        <label>{item.name} (${item.price})</label>
                        <input 
                            type="number"
                            min="0"
                            max={item.available_quantity}
                            value={item.buyQuantity}
                            onChange={(e) => handleQuantityChange(item, e.target.value)}
                            required
                        />
                        <br />
                    </div>
                ))}
                <button type="submit" className="button">Add to cart</button>
            </form>
        </div>
    );


};
export default Purchase;
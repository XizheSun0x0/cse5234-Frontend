import React, { useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import "./purchase.css";

const Purchase = () => {
    const [inventory, setInventory] = useState({
        selected_items: new Map(),available_items: [],
    });
    const navigate = useNavigate();
    const handlesubmit = (e) => {
        if (inventory.selected_items.size > 0) {
            navigate('/cart', { state:inventory});
        } else {
            navigate('/cart');
        }
        
    }


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
        if(quantity>0){
        setInventory((prevInventory) => {
            const newSelectedItems = new Map(prevInventory.selected_items);
            newSelectedItems.set(item, parseInt(quantity, 10) || 0);
    
            return {
                ...prevInventory,
                selected_items: newSelectedItems,
            };
        });
        }
        else {
            return null;
        }
            
    };

    return (
        <div className="purchase">
            <form onSubmit={handlesubmit}>
                {inventory.available_items.map((item) => (
                    <div key={item.id} className="item-entry">
                        <label className="item-name">{item.name} (${item.price})</label>
                        <input 
                            className="item-price"
                            type="number"
                            min="0"
                            max={item.available_quantity}
                            value={inventory.selected_items.get(item) || 0}
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

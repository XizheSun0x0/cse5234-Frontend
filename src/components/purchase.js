import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '../CartContext'
import './purchase.css'

const Purchase = () => {
    const [inventory, setInventory] = useState({
        available_items: [],
        selected_items: new Map(),
    })
    const { addToCart, cartState } = useCart()
    const navigate = useNavigate()

    useEffect(() => {
        fetch('/inventory-managment/inventory')
            .then((res) => res.json())
            .then((items) => {
                setInventory((inventory) => ({
                    ...inventory,
                    available_items: items,
                }))
            })
    }, [])

    const handleQuantityChange = (item, quantity) => {
        if (quantity >= 0 && quantity <= item.available_quantity) {
            setInventory((prevInventory) => ({
                ...prevInventory,
                selected_items: new Map([
                    ...prevInventory.selected_items,
                    [item, parseInt(quantity, 10)],
                ]),
            }))
        }
    }

    const handleAddToCart = (item) => {
        if (inventory.selected_items.get(item) > 0) {
            addToCart(item, inventory.selected_items.get(item))
            // Optionally, you can reset the selected quantity for the item
            setInventory((prevInventory) => ({
                ...prevInventory,
                selected_items: new Map([
                    ...prevInventory.selected_items,
                    [item, 0],
                ]),
            }))
        }
    }

    const handleViewCart = (e) => {
        navigate('/cart', { state: inventory })
    }

    return (
        <div className="purchase">
            <h1>Available items</h1>
            <form>
                {inventory.available_items.map((item) => (
                    <div key={item.id} className="item-entry">
                        <label className="item-name">
                            {item.name} (${item.price})
                        </label>
                        <input
                            className="item-price"
                            type="number"
                            min="0"
                            max={item.available_quantity}
                            value={inventory.selected_items.get(item) || 0}
                            onChange={(e) =>
                                handleQuantityChange(item, e.target.value)
                            }
                            required
                        />
                        <button
                            type="button"
                            onClick={() => handleAddToCart(item)}
                            className="button"
                        >
                            Add to cart
                        </button>
                        <br />
                    </div>
                ))}
            </form>
            <div>
                <button
                    type="button"
                    onClick={() => {
                        handleViewCart()
                    }}
                    className="button"
                >
                    View Cart
                </button>
            </div>
        </div>
    )
}

export default Purchase

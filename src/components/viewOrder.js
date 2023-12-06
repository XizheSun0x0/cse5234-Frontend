/* eslint-disable no-unused-vars */
import React from 'react'
import { useCart } from '../CartContext'
import { useLocation, useNavigate } from 'react-router-dom'

const ViewOrder = () => {
    const location = useLocation()
    const { clearCart, cartState } = useCart()
    const navigate = useNavigate()
    const handlesubmit = (e) => {
        navigate('/purchase/viewconfirmation', {
            state: {
                ...location.state,
                selected_items: cartState.selected_items,
            },
        })
        clearCart()
    }
    // console.log(location.state)
    return (
        <div className="container">
            <h2>Order detail:</h2>
            {cartState.selected_items && cartState.selected_items.size > 0 ? (
                Array.from(cartState.selected_items, ([item, quantity]) => (
                    <div key={item.id}>
                        <label>
                            {item.name} - Quantity: {quantity}
                        </label>
                    </div>
                ))
            ) : (
                <p>No items selected.</p>
            )}
            <button className="button" onClick={handlesubmit}>
                Confirm order
            </button>
        </div>
    )
}

export default ViewOrder

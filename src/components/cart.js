import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './cart.css'
import emptyCart from './images/empty-cart.png'

const Cart = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const handlesubmit = () => {
        navigate('/paymentEntry', { state: location.state })
    }
    const handleBackToPurchase = () => {
        navigate('/purchase')
    }
    console.log(location.state)

    const RenderEmptyCart = () => {
        return (
            <div className="empty-cart-container">
                <div className="empty-cart">
                    <img
                        src={emptyCart}
                        title="empty cart icons"
                        width="150"
                        height="150"
                        className="empty-cart-img"
                    />
                </div>
                <h2>I&apos;M EMPTY :-( PLEASE ADD PRODUCTS.</h2>
                <button
                    id="back-to-purchase"
                    type="submit"
                    className="button"
                    onClick={handleBackToPurchase}
                >
                    Continue Shopping
                </button>
            </div>
        )
    }

    const RenderCart = () => {
        if (location.state !== null) {
            const itemRows = Array.from(location.state.selected_items).map(
                ([item, quantity]) => (
                    <tr key={item.name}>
                        <td>{item.name}</td>
                        <td>${item.price}</td>
                        <td>{quantity}</td>
                    </tr>
                )
            )

            // Calculate total price
            const totalPrice = Array.from(location.state.selected_items).reduce(
                (total, [item, quantity]) => total + item.price * quantity,
                0
            )

            // Return the table of JSX elements and total price
            return (
                <form onSubmit={handlesubmit}>
                    <table className="cart-table">
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Price</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>{itemRows}</tbody>
                    </table>
                    <div className="total-price">
                        Total Price: ${totalPrice.toFixed(2)}
                    </div>
                    <button type="submit" className="button">
                        Go to Payment
                    </button>
                </form>
            )
        } else {
            return <RenderEmptyCart />
        }
    }

    return (
        <div className="cart">
            <div>
                <h1>Shopping Cart</h1>
            </div>
            <RenderCart />
        </div>
    )
}

export default Cart

import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useCart } from '../CartContext'
import './cart.css'
import emptyCart from './images/empty-cart.png'

const Cart = () => {
    const location = useLocation()
    const { clearCart, addToCart, cartState, deleteItem } = useCart()
    const navigate = useNavigate()
    const handlesubmit = () => {
        navigate('/paymentEntry', { state: cartState })
    }
    // console.log(location.state)
    const handleBackToPurchase = () => {
        navigate('/purchase')
    }

    const handleIncreaseQuantity = (item) => {
        addToCart(item, 1)
    }

    const handleDecreaseQuantity = (item) => {
        const currentQuantity = cartState.selected_items.get(item)
        if (currentQuantity > 1) {
            addToCart(item, -1)
        } else {
            deleteItem(item)
        }
    }

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
        if (cartState.selected_items.size !== 0) {
            const itemRows = Array.from(cartState.selected_items).map(
                ([item, quantity]) => (
                    <tr key={item.name}>
                        <td>{item.name}</td>
                        <td>${item.price}</td>
                        <td>
                            <button
                                className="minus-button"
                                onClick={() => handleDecreaseQuantity(item)}
                            >
                                -
                            </button>
                            {quantity}
                            <button
                                className="plus-button"
                                onClick={() => handleIncreaseQuantity(item)}
                            >
                                +
                            </button>
                        </td>
                    </tr>
                )
            )

            // Calculate total price
            const totalPrice = Array.from(cartState.selected_items).reduce(
                (total, [item, quantity]) => total + item.price * quantity,
                0
            )

            // Return the table of JSX elements and total price
            return (
                <div className="cart-content">
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
                        <button
                            type="button"
                            className="button clear-button"
                            onClick={clearCart}
                        >
                            Clear Cart
                        </button>
                        <button type="submit" className="button next-button">
                            Go to Payment
                        </button>
                    </form>
                </div>
            )
        } else {
            return (
                <div>
                    <RenderEmptyCart />
                </div>
            )
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

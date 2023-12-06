/* eslint-disable react/prop-types */
// CartPreview.js

import React from 'react'
import { useCart } from '../CartContext'
import './cartPreview.css'
import emptyCart from './images/empty-cart.png'
import { useNavigate } from 'react-router-dom'

const CartPreview = () => {
    const navigate = useNavigate()
    const { addToCart, cartState } = useCart()
    const handleIncreaseQuantity = (e, item) => {
        e.stopPropagation()
        addToCart(item, 1)
    }

    const handleDecreaseQuantity = (e, item) => {
        e.stopPropagation()
        const currentQuantity = cartState.selected_items.get(item)
        if (currentQuantity > 1) {
            addToCart(item, -1)
        }
    }

    const RenderEmptyCartPreview = () => {
        return (
            <div className="empty-preview">
                <div>
                    <img
                        src={emptyCart}
                        title="empty cart icons"
                        width="50"
                        height="50"
                    />
                </div>
                <p>I&apos;M EMPTY :-( PLEASE ADD PRODUCTS.</p>
            </div>
        )
    }

    const RenderPreview = () => {
        if (cartState.selected_items.size == 0) {
            return (
                <div>
                    <RenderEmptyCartPreview />
                </div>
            )
        } else {
            const itemRows = Array.from(cartState.selected_items).map(
                ([item, quantity]) => (
                    <tr key={item.name}>
                        <td>{item.name}</td>
                        <td>${item.price}</td>
                        <td>
                            <button
                                className="minus-button"
                                onClick={(e) => handleDecreaseQuantity(e, item)}
                            >
                                -
                            </button>
                            {quantity}
                            <button
                                className="plus-button"
                                onClick={(e) => handleIncreaseQuantity(e, item)}
                            >
                                +
                            </button>
                        </td>
                    </tr>
                )
            )
            const totalPrice = Array.from(cartState.selected_items).reduce(
                (total, [item, quantity]) => total + item.price * quantity,
                0
            )
            return (
                <div>
                    <table className="preview-table">
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
                        className="redirect-button"
                        onClick={() => {
                            navigate('/cart')
                        }}
                    >
                        Go to Cart
                    </button>
                </div>
            )
        }
    }

    return (
        <div className="cart-preview">
            <h3>Cart</h3>
            <RenderPreview />
        </div>
    )
}

export default CartPreview

import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import ShoppingCart from '@mui/icons-material/ShoppingCart'
import Badge from '@mui/material/Badge'
import { useCart } from '../CartContext'
import CartPreview from './cartPreview'

function NavBar() {
    const [click, setClick] = useState(false)
    const [isCartPreviewVisible, setCartPreviewVisible] = useState(false)
    const { cartState } = useCart()

    const handleClick = () => setClick(!click)
    console.log(cartState)

    const handleCartContainerHover = () => setCartPreviewVisible(true)

    const handleCartContainerLeave = (e) => {
        // Check if the mouse is leaving to a child element (like the preview)
        if (!e.relatedTarget || !e.currentTarget.contains(e.relatedTarget)) {
            setCartPreviewVisible(false)
        }
    }

    const sumQuantity = () => {
        if (cartState.selected_items.size == 0) {
            return 0
        } else {
            let count = 0
            for (let value of cartState.selected_items.values()) {
                count += value
            }
            return count
        }
    }
    return (
        <nav className="navbar">
            <div className="nav-container">
                <NavLink exact to="/" className="nav-logo">
                    Learn & Lend
                    <i className="fas fa-code"></i>
                </NavLink>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/home"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/about"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                        >
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/purchase"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                        >
                            Purchase
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/support"
                            activeClassName="active"
                            className="nav-links"
                            onClick={handleClick}
                        >
                            Support
                        </NavLink>
                    </li>
                    <li
                        className="nav-item"
                        onMouseEnter={handleCartContainerHover}
                        onMouseLeave={handleCartContainerLeave}
                        onClick={() => {
                            setCartPreviewVisible(false) // Close the preview on click
                            handleClick() // Toggle the mobile menu if needed
                        }}
                    >
                        <NavLink exact to="/cart" className="nav-links">
                            <Badge color="success" badgeContent={sumQuantity()}>
                                <ShoppingCart sx={{ fontSize: 35 }} />
                            </Badge>
                        </NavLink>
                        {isCartPreviewVisible && (
                            <div className="cart-preview-container">
                                <CartPreview />
                            </div>
                        )}
                    </li>
                </ul>
                <div className="nav-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
            </div>
        </nav>
    )
}

export default NavBar

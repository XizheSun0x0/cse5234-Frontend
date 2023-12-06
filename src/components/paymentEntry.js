/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './paymentEntry.css'

const PaymentEntry = () => {
    const location = useLocation()
    const [state, setState] = useState({})
    const navigate = useNavigate()
    const handlesubmit = (e) => {
        navigate('/shippingEntry', { state: state })
    }

    useEffect(() => {
        setState((state) => ({
            ...state,
            ...location.state,
        }))
    })

    return (
        <div className="container">
            <h1>Credit card info</h1>
            <div className="form-group">
                <form onSubmit={handlesubmit}>
                    <label>Credit card number</label>
                    <div className="input-select">
                        <input
                            type="text"
                            required
                            onChange={(e) => {
                                state.credit_card_numer = e.target.value
                            }}
                        />
                    </div>
                    <br />
                    <label>CVV code</label>
                    <div className="input-select">
                        <input
                            type="text"
                            required
                            onChange={(e) => {
                                state.cvvcode = e.target.value
                            }}
                        />
                    </div>
                    <br />
                    <label>Card holder name</label>
                    <div className="input-select">
                        <input
                            type="text"
                            required
                            onChange={(e) => {
                                state.card_holder_name = e.target.value
                            }}
                        />
                    </div>
                    <br />

                    <label>Expiration date</label>
                    <div className="input-select">
                        <select
                            required
                            onChange={(e) => {
                                // Create a new date object and set the month
                                const newExpiry = new Date(
                                    state.expir_date || new Date()
                                )
                                newExpiry.setMonth(e.target.value - 1) // Month is 0-indexed
                                // Update the date in the location state
                                state.expir_date = newExpiry.toISOString()
                            }}
                        >
                            <option value="">Month</option>
                            {Array.from({ length: 12 }, (_, i) => (
                                <option key={i} value={i + 1}>
                                    {i + 1}
                                </option>
                            ))}
                        </select>

                        <select
                            required
                            onChange={(e) => {
                                // Create a new date object and set the year
                                const newExpiry = new Date(
                                    state.expir_date || new Date()
                                )
                                newExpiry.setFullYear(e.target.value)
                                // Update the date in the location state
                                state.expir_date = newExpiry.toISOString()
                            }}
                        >
                            <option value="">Year</option>
                            {Array.from({ length: 10 }, (_, i) => {
                                const year = new Date().getFullYear() + i
                                return (
                                    <option key={year} value={year}>
                                        {year}
                                    </option>
                                )
                            })}
                        </select>
                    </div>
                    <br />
                    <br />
                    <div className="button-style">
                        <button>Shipping info</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PaymentEntry

/* eslint-disable no-unused-vars */
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './shippingEntry.css'

const ShippingEntry = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const handlesubmit = (e) => {
        navigate('/purchase/vieworder', { state: location.state })
    }
    return (
        <div className="shippingEntry-container">
            <h1>Shipping info</h1>
            <div className="form-group">
                <form onSubmit={handlesubmit}>
                    <label>Name</label>
                    <div className="input-select">
                        <input
                            type="text"
                            required
                            onChange={(e) => {
                                location.state.name = e.target.value
                            }}
                        />
                    </div>
                    <br />
                    <label>Address 1</label>
                    <div className="input-select">
                        <input
                            type="text"
                            required
                            onChange={(e) => {
                                location.state.address_1 = e.target.value
                            }}
                        />
                    </div>
                    <br />
                    <label>Address 2 (Optinal)</label>
                    <div className="input-select">
                        <input
                            type="text"
                            onChange={(e) => {
                                location.state.address_2 = e.target.value
                            }}
                        />
                    </div>
                    <br />
                    <label>City</label>
                    <div className="input-select">
                        <input
                            type="text"
                            required
                            onChange={(e) => {
                                location.state.city = e.target.value
                            }}
                        />
                    </div>
                    <br />
                    <label>State</label>
                    <div className="input-select">
                        <input
                            type="text"
                            required
                            onChange={(e) => {
                                location.state.state = e.target.value
                            }}
                        />
                    </div>
                    <br />
                    <label>Zip</label>
                    <div className="input-select">
                        <input
                            type="text"
                            required
                            onChange={(e) => {
                                location.state.zip = e.target.value
                            }}
                        />
                    </div>
                    <br />
                    <div className="button-style">
                        <button className="button">Confirm address</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ShippingEntry

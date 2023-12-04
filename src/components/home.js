// Home.js

import React from 'react'
import './home.css' // Import your CSS file for styling

const Home = () => {
    return (
        <div className="home-container">
            <section className="company-name">
                <h1>Company Name: Learn & Lend</h1>
            </section>

            <section className="mission-vision">
                <h2>Mission & Vision:</h2>
                <p>
                    We aim to provide help for students in need of resources via
                    equipment or notes for various classes.
                </p>
            </section>

            <section className="business-strategy">
                <h2>Business Strategy:</h2>
                <p>
                    We will use institute emails to build a student community
                    for sharing resources. This means the system is built in a
                    closed-off environment, and consequences of breaking the
                    website’s rules will lead to permanent suspension. This will
                    help ensure that the community website is built on trust.
                </p>
            </section>

            <section className="customer-message">
                <h2>Message For Customers:</h2>
                <p>
                    With our innovative business, we can help each other build
                    our way to future success.
                </p>
            </section>
        </div>
    )
}

export default Home

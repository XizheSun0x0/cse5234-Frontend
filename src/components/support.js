// Support.js

import React from 'react'
import './support.css' // Import your CSS file for styling

const Support = () => {
    return (
        <div className="support-container">
            <section className="general-feedback">
                <h1>General Feedback:</h1>
                <h2>
                    We are building our application with protection via
                    university-enforced emails. This will hold each student
                    accountable to make sure they live up to the
                    community`&apos;`s and company`&apos;`s trust system. If a
                    user is proven to have failed to live up to these standards
                    and has failed to either return the item in a max of 3 days
                    or has stolen the item, the account will be permanently
                    banned. A charge will be executed to try and recompensate
                    the lender. If the card declines, DubL won’t be held
                    responsible to compensate for the lost item.
                </h2>
                <h3>
                    In concern of posting class notes, students will not be
                    allowed to post any quizzes or exams on the website. Posting
                    such will provoke a removal and a strike on the user. Two
                    strikes will lead to termination of the account.
                </h3>
            </section>

            <section className="payment-lend-time">
                <h1>Payment and Lend Time:</h1>
                <h2>
                    Material exchange will be scheduled and paid for online. The
                    payment will be transferred to the user providing resources
                    with a small convenience fee tax. For lending of resources,
                    the chosen usage time will have an additional 30 mins after
                    expiration to return the user’s items. The lending time will
                    start when users meet, and the resource is exchanged.
                </h2>
            </section>

            <section className="over-extended-lend-period">
                <h1>Over Extended Lend Period:</h1>
                <h2>
                    If a user has failed to return the item in the given allowed
                    30 mins after the paid lend time has expired, then the user
                    will start to be charged a late return fee of 2% every hour
                    from the original lending price. This will continue until 3
                    days at which the item will be considered lost, and the user
                    borrowing the resources will be terminated.
                </h2>
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

export default Support

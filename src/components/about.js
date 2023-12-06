import React from 'react'
import './about.css'
import benimg from './images/Ben.png'
import xizheimg from './images/Xizhe.png'
import vishuimg from './images/Vishu.png'

function About() {
    const teamMembers = [
        {
            name: 'Ben He',
            title: 'CEO',
            image: benimg,
            description:
                'Ben is the CEO and founder of the company.He is a grad student studying computer science and engineeing. He loves coding and hiking.',
        },
        {
            name: 'Xizhe Sun',
            title: 'CTO',
            image: xizheimg,
            description:
                'Xizhe is the CTO and co-founder. He is a undergrad in computer science and engineering. He is passionate about design and travel and curious about tech issues.',
        },
        {
            name: 'Vishu Singh',
            title: 'CFO',
            image: vishuimg,
            description:
                'In progress undergrad Computer Engineering student. Aspiration to apply software studies knowledge along with newly found computer architecture information to build an e-commerce website to help fellow students succeed more easily. ',
        },
    ]

    return (
        <div className="aboutus">
            <div>
                <h1>About Us</h1>
            </div>
            {teamMembers.map((member) => (
                <div className="team-member" key={member.name}>
                    <div className="member-details">
                        <img
                            src={member.image}
                            alt={member.name}
                            className="member-image"
                        />
                        <h2>{member.name}</h2>
                    </div>
                    <div className="member-info">
                        <div className="member-title">
                            <h3>{member.title}</h3>
                        </div>
                        <div className="member-description">
                            <p>{member.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default About

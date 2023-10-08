import React from 'react';
import xizheimg from './images/Xizhe.png';
import vishuimg from './images/Vishu.png';

function About() {
    const teamMembers = [
        {
            name: 'Ben He',
            title: 'CEO',
            image: './images/',
            description: 'Ben is the CEO and founder of the company. He loves coding and hiking.'
        },
        {
            name: 'Xizhe Sun',
            title: 'CTO',
            image: xizheimg,
            description: 'Xizhe is the CTO and co-founder. He is passionate about design and travel.'
        },
        {
          name: 'Vishu Singh',
          title: 'CFO',
          img: vishuimg,
          description:'Vishu is the CFO and co-founder. He does well at making budget and financial report.'
        }
    ];

    return (
        <div className="aboutus">
          <div>
            <h1>About Us</h1>
          </div>
            {teamMembers.map(member => (
                <div className="team-member" key={member.name}>
                    <img src={member.image} alt={member.name} />
                    <h2>{member.name}</h2>
                    <h3>{member.title}</h3>
                    <p>{member.description}</p>
                </div>
            ))}
        </div>
    );
}

export default About;

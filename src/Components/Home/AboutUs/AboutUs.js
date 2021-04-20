import React, { useEffect, useState } from 'react';
import TeamMember from '../TeamMember/TeamMember';


const AboutUs = () => {
    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        fetch('https://guarded-peak-51076.herokuapp.com/teamMembers')
            .then(res => res.json())
            .then(data => setTeamMembers(data))
    }, [])


    return (
        <section className="blogs my-3">
            <div className="container">
                <div className="section-header text-center">
                    <span className="divider component-title">About Us</span>
                </div>
                <h5 className='text-dark text-center'>Our Hard Working Team Members</h5>
                <div className="card-deck row mt-5">
                    {
                        teamMembers.map(member => <TeamMember member={member} key={member.name} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
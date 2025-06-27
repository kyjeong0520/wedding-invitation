import React from 'react';
import InvitationCard from '../components/InvitationCard';

const Home: React.FC = () => {
    return (
        <div className="home">
            <h1>Welcome to Our Wedding Invitation</h1>
            <InvitationCard 
                coupleNames="John & Jane Doe"
                date="June 25, 2023"
                location="Central Park, New York"
            />
            <p>We are excited to celebrate this special day with you!</p>
        </div>
    );
};

export default Home;
import React from 'react';

interface InvitationCardProps {
    coupleNames: string;
    date: string;
    location: string;
}

const InvitationCard: React.FC<InvitationCardProps> = ({ coupleNames, date, location }) => {
    return (
        <div className="invitation-card">
            <h1>You're Invited!</h1>
            <h2>{coupleNames}</h2>
            <p>Date: {date}</p>
            <p>Location: {location}</p>
        </div>
    );
};

export default InvitationCard;
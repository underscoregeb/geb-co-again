import React from 'react';
import './profileCard.css';

const ProfileCard = ({ title, pronouns, pfp, description }) => {
  return (
    <div className="profile-card">
      <div className="profile-header">
        {pfp && <img src={pfp} alt={title} className="profile-image" />}
        <div className="profile-aligned">
          <h2 className="profile-title">{title}</h2>
          <h4 className="profile-pronouns">{pronouns}</h4>
        </div>
      </div>
      <p className="profile-description">{description}</p>
    </div>
  );
};

export default ProfileCard;

import React from 'react';
import './planCard.css';

const PlanCard = ({ title, description, features, price, button, url }) => {
  return (
    <div className="plan-card">
      <div className="plan-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="plan-card-footer">
        <p className="price">{price}</p>
        <a href={url}><button className="select-plan-button">
          {button || `Select ${title}`}
        </button></a>
      </div>
    </div>
  );
};

export default PlanCard;
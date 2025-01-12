import React from 'react';
import './serviceCard.css';

const ServiceCard = ({ title, description, urls }) => {
  return (
    <div className="service-card">
      <h3>{title}</h3>
      <div className="service-urls">
        {urls.map((url, index) => {
            const displayUrl = url.replace(/^https?:\/\//, '').split('?')[0];
          return (
              <a href={url} key={index}>{displayUrl}</a>
          );
        })}
      </div>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
import React from 'react';
import './serviceCard.css';
import Quart from '../logo/quart';

const ServiceCard = ({ title, icon, description, urls }) => {
  return (
    <div className="service-card">
      <h3>
        {icon ? <i className={`nf ${icon}`}></i> :  <Quart style={{height: '1rem'}}/>}
        {title}</h3>
      <div className="service-urls ibm-plex-mono-regular">
        {urls.map((url, index) => {
            const displayUrl = url.replace(/^https?:\/\//, '').split('?')[0];
            return (
              <a href={url} target="_blank" rel="noopener noreferrer" key={index}>{displayUrl}<i className="nf nf-oct-arrow_up_right"></i></a>
            );
        })}
      </div>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
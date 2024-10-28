import React from 'react';
import './logotype.css';

function Logotype() {
  return (
    <div className="logotype-container">
      <svg className="logotype-icon" viewBox="0 0 4500 2250" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path className="logo-path" fillRule="evenodd" clipRule="evenodd" d="M0 1125V0h1125C504.096 0 0 504.096 0 1125Zm2250-1125v1125c0-620.904-504.096-1125-1125-1125h1125Zm1125 0v1125c0-620.904-504.096-1125-1125-1125h1125Zm1125 1125c0-620.904-504.096-1125-1125-1125h1125v1125Zm0 0v1125h-1125c620.904 0 1125-504.096 1125-1125Zm-1125 1125h-1125c620.904 0 1125-504.096 1125-1125v1125Zm-1125 0h-1125c620.904 0 1125-504.096 1125-1125v1125ZM0 1125c0 620.904 504.096 1125 1125 1125H0V1125Z" />
      </svg>
      <p className="logotype-text">The Geb Company</p>
    </div>
  );
}

export default Logotype;
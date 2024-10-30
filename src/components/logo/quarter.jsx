// Quarter.jsx
import React from 'react';

function Quarter({className, style}) {
    return (
        <svg
            className={className}
            style={{
                fillRule: 'evenodd',
                clipRule: 'evenodd',
                strokeLinejoin: 'round',
                strokeMiterlimit: 2,
                ...style  // Spread in our rotation style
            }}
            viewBox="0 0 2250 2250"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* <path d="M0 2250V0h2250c-1241.81 0-2250 1008.19-2250 2250Z" /> */}
            <path d="M0,562.5l0,-562.5l2250,0l0,2250l-562.5,0c0,-931.357 -756.143,-1687.5 -1687.5,-1687.5Z" />
            {/* <path d="M0,1125l0,-1125l2250,0l0,2250l-1125,-0c0,-620.904 -504.096,-1125 -1125,-1125Z" /> */}
        </svg>
    );
}

export default Quarter;
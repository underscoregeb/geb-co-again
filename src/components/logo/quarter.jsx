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
            <path d="M0 2250V0h2250c-1241.81 0-2250 1008.19-2250 2250Z" />
        </svg>
    );
}

export default Quarter;
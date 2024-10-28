import React from 'react';

function Quarter({className}) {
    return (
        <>
        <svg
            className = {className}
            viewBox="0 0 2250 2250"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            style={{
            fillRule: 'evenodd',
            clipRule: 'evenodd',
            strokeLinejoin: 'round',
            strokeMiterlimit: 2
            }}
        >
            <path d="M0 2250V0h2250c-1241.81 0-2250 1008.19-2250 2250Z" />
        </svg>
        </>
    );
};
  
export default Quarter;
  
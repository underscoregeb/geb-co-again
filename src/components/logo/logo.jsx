// Logo2.jsx
import React, { useState, useEffect } from "react";
import Quarter from "./quarter";
import "./logo.css";

function randomRotation() {
    return Math.floor(Math.random() * 4) * 90; // Returns 0, 90, 180, or 270
}

function Logo2({ pathname }) {
    const [rotations, setRotations] = useState(
        Array(6).fill(null).map(() => randomRotation())
    );
    
    useEffect(() => {
        setRotations(Array(6).fill(null).map(() => randomRotation()));
    }, [pathname]);
    
    return (
        <div className="grid-container">
            {rotations.map((rotation, index) => (
                <Quarter 
                    key={index} 
                    style={{ '--rotation': `${rotation}deg` }}
                    className="grid-item" 
                />
            ))}
        </div>
    );
}

export default Logo2;
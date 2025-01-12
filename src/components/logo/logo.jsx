
import React, { useState, useEffect } from "react";
import Quart from "./quart";
import "./logo.css";

function randomRotation() {
    return Math.floor(Math.random() * 4) * 90; // returns 0, 90, 180, or 270
}

function Logo( { spinny } ) {
    const [rotations, setRotations] = useState(
        Array(6).fill(null).map(() => randomRotation())
    );
    
    useEffect(() => {
        setRotations(Array(6).fill(null).map(() => randomRotation()));
    }, []);



 
    
    return (
        <div className="grid-container">
            {rotations.map((rotation, index) => (
                <Quart 
                    key={index} 
                    style={{ '--rotation': `${rotation}deg` }}
                    className={`grid-item ${spinny ? 'spinny' : ''}`}
                />
            ))}
        </div>
    );
}

export default Logo;
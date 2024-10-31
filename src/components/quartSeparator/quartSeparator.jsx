

import React, { useState, useEffect } from "react";
import Quart from "../logo/quart";
import styles from "./quartSeparator.module.css";

function randomRotation() {
    return Math.floor(Math.random() * 4) * 90; // returns 0, 90, 180, or 270
}

function QuartSeparator({ speed = 3000, quarts = 3 }) {
    const [rotations, setRotations] = useState(
        Array(quarts).fill(null).map(() => randomRotation())
    );
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * quarts);
            setRotations(prevRotations => prevRotations.map((rotation, index) => 
                index === randomIndex ? randomRotation() : rotation
            ));

        }, speed);

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []);

    
    return (
        <div className={styles.rowContainer}>
            {rotations.map((rotation, index) => (
                <Quart 
                    key={index} 
                    style={{ transform: `rotate(${rotation}deg)` }}
                    className={styles.rowItem}
                />
            ))}
        </div>
    );
}

export default QuartSeparator;
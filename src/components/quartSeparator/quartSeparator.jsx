import { useState, useEffect } from "react";
import Quart from "../logo/quart";
import styles from "./quartSeparator.module.css";
import PropTypes from 'prop-types';

function randomRotation() {
    const rotations = [90, 180, 270];
    return rotations[Math.floor(Math.random() * rotations.length)];
}

function QuartSeparator({ speed = 3000, quarts = 3 }) {
    const [rotations, setRotations] = useState(
        Array(quarts).fill(null).map(() => randomRotation())
    );
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            const randomIndex = Math.floor(Math.random() * quarts);
            setRotations(prevRotations => prevRotations.map((rotation, index) => 
                index === randomIndex ? (rotation + randomRotation()) % 360 : rotation
            ));

        }, speed);

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, [speed, quarts]);
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

QuartSeparator.propTypes = {
    speed: PropTypes.number,
    quarts: PropTypes.number
};

export default QuartSeparator;
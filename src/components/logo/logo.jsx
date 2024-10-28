import React from "react";
import Quarter from "./quarter";
import "./logo.css";


function randomRotation() {
    const rotations = ["r0", "r90", "r180", "r270"];
    const randomIndex = Math.floor(Math.random() * rotations.length);
    return rotations[randomIndex];
}


function Logo2() {
    return (
        <div className="grid-container">
            <Quarter className={`grid-item ${randomRotation()}`} />
            <Quarter className={`grid-item ${randomRotation()}`} />
            <Quarter className={`grid-item ${randomRotation()}`} />
            <Quarter className={`grid-item ${randomRotation()}`} />
            <Quarter className={`grid-item ${randomRotation()}`} />
            <Quarter className={`grid-item ${randomRotation()}`} />
            <Quarter className={`grid-item ${randomRotation()}`} />
            <Quarter className={`grid-item ${randomRotation()}`} />
        </div>
    );
}

export default Logo2;

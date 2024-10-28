import React from "react";
import Quarter from "./quarter";
import "./logo.css";


function Logo2() {
    return(
        <div className="grid-container">
            <Quarter className="grid-item"/>
            <Quarter className="grid-item r90"/>
            <Quarter className="grid-item r90"/>
            <Quarter className="grid-item r90"/>
            <Quarter className="grid-item r270"/>
            <Quarter className="grid-item r180"/>
            <Quarter className="grid-item r180"/>
            <Quarter className="grid-item r180"/>
        </div>
    );
}

export default Logo2;
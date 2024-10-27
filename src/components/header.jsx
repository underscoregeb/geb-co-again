import React from 'react';
import './header.css';
import Logotype from './logotype';

function nav(){
return (
    <>
        <div id="nav">
            <Logotype />
            <div id='links'>
                <a href='#'>alpha</a>
                <a href='#'>beta</a>
                <a href='#'>gamma</a>
            </div>
        </div>
    </>
);
}

export default nav;
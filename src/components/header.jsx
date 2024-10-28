import React from 'react';
import './header.css';
import Logotype from './logotype';

function nav(){
return (
    <>
        <div id="nav">
            <Logotype />
            <div id='links'>
                <a href='#alpha'>alpha</a>
                <a href='#beta'>beta</a>
                <a href='#gamma'>gamma</a>
            </div>
        </div>
    </>
);
}

export default nav;
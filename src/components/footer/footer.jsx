
import React, { useEffect, useRef } from 'react';
import './footer.css';
import Quart from '../logo/quart';
import { Link } from 'react-router-dom'; 

function Footer() {
    const copyrightRef = useRef(null); 

    useEffect(() => {
        const targetElement = copyrightRef.current;

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    targetElement.classList.add('in-view');
                } else {
                    targetElement.classList.remove('in-view');
                }
            });
        }, {
            threshold: 1 
        });

        if (targetElement) {
            observer.observe(targetElement);
        }

        return () => { 
            if (targetElement) {
                observer.unobserve(targetElement);
            }
        };
    }, []); 

    return (
        <footer>
            <div id="bottomnav">
                <Link id='copyright' to="/" ref={copyrightRef}> 
                    <Quart className="icon-quart" />
                    <p>The Geb Company</p>
                </Link>
            </div>
        </footer>
    );
}

export default Footer;

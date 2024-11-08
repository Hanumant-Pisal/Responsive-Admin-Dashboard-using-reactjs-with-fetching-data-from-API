import React, { useState, useEffect } from 'react';
import './backToTop.css';

function BackToTop() {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const backToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <button
            onClick={backToTop}
            className={`back-to-top d-flex align-items-center justify-content-center ${scroll > 100 ? 'active' : ''}`}
            aria-label="Back to top"
        >
            <i className='bi bi-arrow-up-short'></i>
        </button>
    );
}

export default BackToTop;

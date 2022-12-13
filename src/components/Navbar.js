import React, { useState, useEffect } from 'react';

export default function Navbar() {

    const [active, setActive] = useState(null);
    // Function to handle navbar element clicks
    function handleClick(elem) {
        setActive(elem);
    }

    return (
        <nav className='mainNavbar'>
            <div className='icon-nav'>
                <a className='nav-link' onClick={() => handleClick('active-tab')} href="/">MICH</a>
            </div>
                
            <div className='other-nav'>
                <a className='nav-link' onClick={() => handleClick('active-tab')}  href="/aboutme">About Me</a>
                <a className='nav-link' onClick={() => handleClick('active-tab')}  href="/portfolio">Portfolio</a>
                <a className='nav-link' onClick={() => handleClick('active-tab')}  href="/resume">Resume</a>
                <a className='nav-link' onClick={() => handleClick('active-tab')}  href="/contact">Contact</a>
            </div>
        </nav>
    )
}


import React from 'react';

export default function Navbar() {
    return (
        <nav className='mainNavbar'>
            <a className='nav-link active' href="/">Home</a>
            <a className='nav-link' href="/aboutme">About Me</a>
            <a className='nav-link' href="/portfolio">Portfolio</a>
            <a className='nav-link' href="/resume">Resume</a>
            <a className='nav-link' href="/contact">Contact</a>
        </nav>
    )
}
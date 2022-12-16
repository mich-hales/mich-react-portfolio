import React from 'react';

export default function Navbar() {

    let location = window.location.pathname;

    return (
        <nav className='mainNavbar'>
            <div className='icon-nav'>
                <a className={location === '/' || location === '/aboutme' ? 'active-tab-icon' : 'icon-nav'}  href="/">MICH</a>
            </div>
                
            <div className='other-nav'>
                <a className={location === '/aboutme' || location === '/' ? 'active-tab' : 'nav-link'}   href="/aboutme">About Me</a>

                <a className={location === '/portfolio' ? 'active-tab' : 'nav-link'}   href="/portfolio">Portfolio</a>

                <a className={location === '/resume' ? 'active-tab' : 'nav-link'}   href="/resume">Resume</a>

                <a className={location === '/contact' ? 'active-tab' : 'nav-link'}   href="/contact">Contact</a>
            </div>
        </nav>
    )
}


import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

function App() {
    let component;
    // eslint-disable-next-line default-case
    switch(window.location.pathname) {
        case '/':
            component = <Home />
            break;
        case '/contact':
            component = <Contact />
            break;
        case '/aboutme':
            component = <AboutMe />
            break;
        case '/portfolio':
            component = <Portfolio />
            break;
        case '/resume':
            component = <Resume />
    }
    return (
        <div>
            <Navbar />
            <div className='component'>
                {component}
            </div>
        </div>
    )
}

export default App;


 
   

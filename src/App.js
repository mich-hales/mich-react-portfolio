import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Footer from './components/Footer';

function App() {
    let component;
    // eslint-disable-next-line default-case
    switch(window.location.pathname) {
        case '/':
            component = <AboutMe />
            break;
        case '/mich-react-portfolio':
            component = <AboutMe />
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
            component = <Resume pageNumber={1} />
    }
    return (
        <div>
            <Navbar />
            <div>
                {component}
            </div>
            <Footer />
        </div>
    )
}

export default App;


 
   

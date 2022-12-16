import React from 'react';
import GitHubImg from '../images/github-logo.png';
import EmailImg from '../images/email-img.png';
import LinkedinImg from '../images/linkedin-img.png';

export default function Footer() {
    return (
        <footer>
            <ul className='footerLinks'>
                <li><a href='https://github.com/mich-hales'><img className='imagelogos' src={GitHubImg} alt='github logo'/></a></li>
                <li><a href='https://www.linkedin.com/in/michelle-hales/'><img className='imagelogos' src={LinkedinImg} alt='linked in logo'/></a></li>
                <li><a href='mailto:michellehales93@gmail.com'><img className='imagelogos' src={EmailImg} alt='email logo'/></a></li>
            </ul>
        </footer>
    )
}
import React from 'react';
import Selfie from '../images/selfie.jpg'

export default function aboutMe() {
    return (
        <div className='contentContainer m-3'>
            <div className='selfieContainer'>
                <img className='selfie' src={Selfie} alt='author posing and smiling'/>
            </div>

            <h2>About</h2>
            <h4>I'm a full stack developer based in Utah.</h4>
            <p>Since 2022, I've enjoyed learning all about software and web development. I am currently attending a Full Stack Coding Bootcamp through the University of Utah and will be graduating January 2023. I also attended BYU and graduated with a Bachelor of Science in Exercise and Wellness in 2017. I have a love for health and wellness and have recently discovered another interest, coding! When I'm not developing, you'll find me teaching fitness classes, giving medical grade facials, or enjoying the outdoors. </p>
        </div>
    )
}
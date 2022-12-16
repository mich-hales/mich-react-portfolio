import React from 'react';
import AdobePhoto from '../images/AdobeStock_266849226.jpeg'
import QuickFlix from '../images/flix.jpeg';
import Weather from '../images/weather.jpeg';
import CodingQuiz from '../images/quiz.png';
import TeamProfiles from '../images/team-generator.webp';
import WorkDayScheduler from '../images/list.webp';
import ECommerce from '../images/ecommerce-backend.webp';
import TechBlog from '../images/tech-blog.jpeg';
import Readme from '../images/readme.png';
import Notetaker from '../images/note-taker.png';


export default function Portfolio() {
    return (
        <div className='contentContainer container'>
            <section className="my-work" id="link2">
            <div className="portfolioLinks">
                
                    <div className="overlay link-pink" id="image-grid-col-row">
                        <a href="https://github.com/mich-hales/FitCommit" target="_blank"><img className="link-images" src={AdobePhoto} alt="two gym buddies motivating eachother"/></a> 
                        <h3 className="h3-overlay">FitCommit Project</h3>
                    </div>

                    <div className="overlay link-pink">
                        <a href="https://github.com/mich-hales/QuickFlix" target="_blank"><img className="link-images" src={QuickFlix} alt="tv with the word flix in neon displaying on the screen"/></a>
                        <h3  className="h3-overlay">QuickFlix</h3>
                    </div>

                    <div className="overlay link-blue">
                        <a href="https://github.com/mich-hales/weather-dashboard" target="_blank"><img className="link-images" src={Weather}alt="cloudy weather with sun"/></a>
                        <h3  className="h3-overlay">Weather Dashboard</h3>
                    </div>

                    <div className="overlay link-pink">
                        <a href="https://github.com/mich-hales/coding-quiz" target="_blank"><img className="link-images" src={CodingQuiz} alt="the phrase quiz time in writing"/></a> 
                        <h3 className="h3-overlay">Coding Quiz</h3>
                    </div>
                    
                    <div className="overlay link-pink">
                        <a href="https://github.com/mich-hales/team-profile-generator" target="_blank"><img className="link-images" src={TeamProfiles} alt="three members of a team with profiles"/></a> 
                        <h3 className="h3-overlay">Team Profile Generator</h3>
                    </div>
                 
                    <div className="overlay link-pink">
                        <a href="https://github.com/mich-hales/work-day-scheduler" target="_blank"><img className="link-images" src={WorkDayScheduler} alt="paper with pencil"/></a>
                        <h3  className="h3-overlay">Work Day Scheduler</h3>
                    </div>

                    <div className="overlay link-pink">
                        <a href="https://github.com/mich-hales/E-Commerce-Back-End" target="_blank"><img className="link-images" src={ECommerce} alt="backend computer logic"/></a>
                        <h3  className="h3-overlay">E-Commerce Back End</h3>
                    </div>
                    
                    <div className="overlay link-pink">
                        <a href="https://github.com/mich-hales/Tech-Blog" target="_blank"><img className="link-images" src={TechBlog} alt="computer with cup of coffee on table"/></a>
                        <h3  className="h3-overlay">Tech Blog</h3>
                    </div>

                    <div className="overlay link-pink">
                        <a href="https://github.com/mich-hales/readme-generator" target="_blank"><img className="link-images" src={Readme} alt="the words read me written in white and placed in the middle of a black circle"/></a>
                        <h3  className="h3-overlay">Readme Generator</h3>
                    </div>

                    <div className="overlay link-pink">
                        <a href="https://github.com/mich-hales/note-taker" target="_blank"><img className="link-images" src={Notetaker} alt="someone taking notes with a paper and pencil"/></a>
                        <h3  className="h3-overlay">Note Taker</h3>
                    </div>
            </div>
        </section>

        </div>
    )
}
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


export default function aboutMe() {
    return (
        <div className='contentContainer container'>
            <section className="my-work" id="link2">
            <h2 className="subtitle">Work</h2>
            <div className="portfolioLinks">
                
                    <div className="overlay link-pink" id="image-grid-col-row">
                        <a href="https://github.com/mich-hales/FitCommit" target="_blank"><img className="link-images" src={AdobePhoto} alt="two gym buddies motivating eachother"/></a> 
                        <h3 className="h3-overlay">FitCommit Project</h3>
                    </div>

                    <div className="overlay link-pink">
                        <a href="https://github.com/mich-hales/QuickFlix" target="_blank"><img className="link-images" src={QuickFlix} alt="tv with the word flix in neon displaying on the screen"/></a>
                        <h3  className="h3-overlay small-overlay">QuickFlix</h3>
                    </div>

                    <div className="overlay link-blue">
                        <a href="https://github.com/mich-hales/weather-dashboard" target="_blank"><img className="link-images" src={Weather}alt="cloudy weather with sun"/></a>
                        <h3  className="h3-overlay small-overlay">Weather Dashboard</h3>
                    </div>

                    <div className="overlay link-pink">
                        <a href="https://github.com/mich-hales/coding-quiz" target="_blank"><img className="link-images" src={CodingQuiz} alt="the phrase quiz time in writing"/></a> 
                        <h3 className="h3-overlay small-overlay">Coding Quiz</h3>
                    </div>
                    
                    <div className="overlay link-pink">
                        <a href="https://github.com/mich-hales/team-profile-generator" target="_blank"><img className="link-images" src={TeamProfiles} alt="three members of a team with profiles"/></a> 
                        <h3 className="h3-overlay small-overlay">Team Profile Generator</h3>
                    </div>
                 
                    <div className="overlay link-pink">
                        <a href="https://github.com/mich-hales/work-day-scheduler" target="_blank"><img className="link-images" src={WorkDayScheduler} alt="paper with pencil"/></a>
                        <h3  className="h3-overlay small-overlay">Work Day Scheduler</h3>
                    </div>

                    <div className="overlay link-pink">
                        <a href="https://github.com/mich-hales/E-Commerce-Back-End" target="_blank"><img className="link-images" src={ECommerce} alt="backend computer logic"/></a>
                        <h3  className="h3-overlay small-overlay">E-Commerce Back End</h3>
                    </div>
                    
                    <div className="overlay link-pink">
                        <a href="https://github.com/mich-hales/Tech-Blog" target="_blank"><img className="link-images" src={TechBlog} alt="computer with cup of coffee on table"/></a>
                        <h3  className="h3-overlay small-overlay">Tech Blog</h3>
                    </div>

                    <div className="overlay link-pink">
                        <a href="https://github.com/mich-hales/readme-generator" target="_blank"><img className="link-images" src={Readme} alt="the words read me written in white and placed in the middle of a black circle"/></a>
                        <h3  className="h3-overlay small-overlay">Readme Generator</h3>
                    </div>

                    <div className="overlay link-pink">
                        <a href="https://github.com/mich-hales/note-taker" target="_blank"><img className="link-images" src={Notetaker} alt="someone taking notes with a paper and pencil"/></a>
                        <h3  className="h3-overlay small-overlay">Note Taker</h3>
                    </div>
            </div>
        </section>


        <section className="skills" id="skills">
            <h2 className="subtitle">Skills</h2>
            <div className="row-1">
                <p className="row-1-content item-1">HTML / CSS</p>
                <p className="row-1-content item-2">JavaScript</p>
                <p className="row-1-content item-3">MySQL</p>
                <p className="row-1-content item-4">React</p>
            </div>
            <div className="row-2">
                <p className="row-2-content item-1">Object Oriented Programming (OOP)</p>
                <p className="row-2-content item-2">Model View Controller (MVC)</p>
                <p className="row-2-content item-3">APIs</p>
                <p className="row-2-content item-4">GitHub and Git</p>
            </div>
            <div className="row-3">
                <p className="row-3-content item-1">Express.js</p>
                <p className="row-3-content item-2">Sequelize</p>
                <p className="row-3-content item-3">Node.js</p>
                <p className="row-3-content item-4">Bootstrap</p>
            </div>

        </section>

        </div>
    )
}
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
import GitHubImg from '../images/github-logo.png'

export default function Portfolio() {
    return (
        <div className='contentContainer container'>
            <section className="my-work" id="link2">
            <div className="portfolioLinks">
                
                    <div className="image-container" id="image-grid-col-row">
                        <img className='fitcommitImage' src={AdobePhoto} alt="two gym buddies motivating eachother"/>
                        <div className='overlay'>
                            <a href="https://github.com/mich-hales/FitCommit" ><img height='auto' width='50px' src={GitHubImg} alt='github logo'/></a>
                            <a href="https://github.com/mich-hales/FitCommit" >FitCommit</a> 
                        </div>
                    </div>

                    <div className="image-container">
                        <img className='link-images' src={QuickFlix} alt="tv with the word flix in neon displaying on the screen"/>
                        <div className='overlay'>
                            <a href="https://github.com/mich-hales/QuickFlix" ><img height='auto' width='50px' src={GitHubImg} alt='github logo'/></a>
                            <a href="https://github.com/mich-hales/QuickFlix">QuickFlix</a> 
                        </div>
                    </div>

                    <div className="image-container">
                        <img className='link-images' src={Weather} alt="cloudy weather with sun"/>
                        <div className='overlay'>
                            <a href="https://github.com/mich-hales/weather-dashboard" ><img height='auto' width='50px' src={GitHubImg} alt='github logo'/></a>
                            <a href="https://github.com/mich-hales/weather-dashboard">Weather Dashboard</a> 
                        </div>
                    </div>

                    <div className="image-container">
                        <img className='link-images' src={CodingQuiz} alt="the phrase quiz time in writing"/>
                        <div className='overlay'>
                            <a href="https://github.com/mich-hales/coding-quiz" ><img height='auto' width='50px' src={GitHubImg} alt='github logo'/></a>
                            <a href="https://github.com/mich-hales/coding-quiz">Coding Quiz</a> 
                        </div>
                    </div>

                    <div className="image-container">
                        <img className='link-images' src={CodingQuiz} alt="three members of a team with profiles"/>
                        <div className='overlay'>
                            <a href="https://github.com/mich-hales/team-profile-generator" ><img height='auto' width='50px' src={GitHubImg} alt='github logo'/></a>
                            <a href="https://github.com/mich-hales/team-profile-generator">Team Profile Generator</a> 
                        </div>
                    </div>

                    <div className="image-container">
                        <img className='link-images' src={WorkDayScheduler} alt="paper with pencil"/>
                        <div className='overlay'>
                            <a href="https://github.com/mich-hales/work-day-scheduler" ><img height='auto' width='50px' src={GitHubImg} alt='github logo'/></a>
                            <a href="https://github.com/mich-hales/work-day-scheduler">Work Day Scheduler</a> 
                        </div>
                    </div>

                    <div className="image-container">
                        <img className='link-images' src={ECommerce} alt="backend computer logic"/>
                        <div className='overlay'>
                            <a href="https://github.com/mich-hales/E-Commerce-Back-End" ><img height='auto' width='50px' src={GitHubImg} alt='github logo'/></a>
                            <a href="https://github.com/mich-hales/E-Commerce-Back-End">E-Commerce Back End</a> 
                        </div>
                    </div>

                    <div className="image-container">
                        <img className='link-images' src={TechBlog} alt="computer with cup of coffee on table"/>
                        <div className='overlay'>
                            <a href="https://github.com/mich-hales/Tech-Blog" ><img height='auto' width='50px' src={GitHubImg} alt='github logo'/></a>
                            <a href="https://github.com/mich-hales/Tech-Blog">Tech Blog</a> 
                        </div>
                    </div>

                    <div className="image-container">
                        <img className='link-images' src={Readme} alt="the words read me written in white and placed in the middle of a black circle"/>
                        <div className='overlay'>
                            <a href="https://github.com/mich-hales/readme-generator" ><img height='auto' width='50px' src={GitHubImg} alt='github logo'/></a>
                            <a href="https://github.com/mich-hales/readme-generator">Readme Generator</a> 
                        </div>
                    </div>

                    <div className="image-container">
                        <img className='link-images' src={Notetaker} alt="someone taking notes with a paper and pencil"/>
                        <div className='overlay'>
                            <a href="https://github.com/mich-hales/note-taker" ><img height='auto' width='50px' src={GitHubImg} alt='github logo'/></a>
                            <a href="https://github.com/mich-hales/note-taker">Note Taker</a> 
                        </div>
                    </div>
{/* 

                    <div className="overlay link-pink">
                        <a href="https://github.com/mich-hales/note-taker"><img className="link-images" src={Notetaker} alt="someone taking notes with a paper and pencil"/></a>
                        <h3  className="h3-overlay">Note Taker</h3>
                    </div> */}
            </div>
            </section>
        </div>
    )
}
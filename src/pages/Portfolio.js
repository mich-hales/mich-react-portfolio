import React from 'react';

export default function aboutMe() {
    return (
        <div className='contentContainer container'>
            <section className="my-work" id="link2">
            <h2 className="subtitle">Work</h2>
            <div className="portfolioLinks">
                
                    <div className="overlay link-pink" id="image-grid-col-row">
                        <a href="https://github.com/mich-hales/FitCommit" target="_blank"><img className="link-images" src="./Assets/images/AdobeStock_266849226.jpeg" alt="two gym buddies motivating eachother"/></a> 
                        <h3 className="h3-overlay">FitCommit Project</h3>
                    </div>

                    <div className="overlay link-pink">
                        <a href="https://github.com/mich-hales/QuickFlix" target="_blank"><img className="link-images" src="./Assets/images/flix.jpeg" alt="tv with the word flix in neon displaying on the screen"/></a>
                        <h3  className="h3-overlay small-overlay">QuickFlix</h3>
                    </div>

                    <div className="overlay link-blue">
                        <a href="https://github.com/mich-hales/weather-dashboard" target="_blank"><img className="link-images" src="./Assets/images/weather.jpeg" alt="cloudy weather with sun"/></a>
                        <h3  className="h3-overlay small-overlay">Weather Dashboard</h3>
                    </div>

                    <div className="overlay link-pink">
                        <a href="https://github.com/mich-hales/coding-quiz" target="_blank"><img className="link-images" src="./Assets/images/quiz.png" alt="the phrase quiz time in writing"/></a> 
                        <h3 className="h3-overlay small-overlay">Coding Quiz</h3>
                    </div>
                    
                    <div className="overlay link-pink">
                        <a href="https://github.com/mich-hales/team-profile-generator" target="_blank"><img className="link-images" src="./Assets/images/team-generator.webp" alt="three members of a team with profiles"/></a> 
                        <h3 className="h3-overlay small-overlay">Team Profile Generator</h3>
                    </div>
                 
                    <div className="overlay link-pink">
                        <a href="https://github.com/mich-hales/work-day-scheduler" target="_blank"><img className="link-images" src="./Assets/images/list.webp" alt="paper with pencil"/></a>
                        <h3  className="h3-overlay small-overlay">Work Day Scheduler</h3>
                    </div>

                    <div className="overlay link-pink">
                        <a href="https://github.com/mich-hales/E-Commerce-Back-End" target="_blank"><img className="link-images" src="./Assets/images/ecommerce-backend.webp" alt="backend computer logic"/></a>
                        <h3  className="h3-overlay small-overlay">E-Commerce Back End</h3>
                    </div>
                    
                    <div className="overlay link-pink">
                        <a href="https://github.com/mich-hales/Tech-Blog" target="_blank"><img className="link-images" src="./Assets/images/tech-blog.jpeg" alt="computer with cup of coffee on table"/></a>
                        <h3  className="h3-overlay small-overlay">Tech Blog</h3>
                    </div>

                    <div className="overlay link-pink">
                        <a href="https://github.com/mich-hales/readme-generator" target="_blank"><img className="link-images" src="./Assets/images/readme.png" alt="the words read me written in white and placed in the middle of a black circle"/></a>
                        <h3  className="h3-overlay small-overlay">Readme Generator</h3>
                    </div>

                    <div className="overlay link-pink">
                        <a href="https://github.com/mich-hales/note-taker" target="_blank"><img className="link-images" src="./Assets/images/note-taker.png" alt="someone taking notes with a paper and pencil"/></a>
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
                <p className="row-1-content item-4">MongoDB</p>
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
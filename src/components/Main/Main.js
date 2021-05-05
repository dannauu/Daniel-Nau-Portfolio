import React from 'react'
import './Main.css'
import AboutMePic from '../../assets/img/aboutmepic.jpg'

export default function Main() {
    return (
        <div>
            <main className="row" id="aboutMe">
            <div className="col-md-6">
                <h1 className="fw-bold">About Me</h1>
                <img src={AboutMePic} className="float-start px-3" alt="..." id="aboutMePic" />
                <p>
                    My name is Daniel Nau. I am currently attending The University of Kansas Coding Bootcamp. I have a
                    passion for learning code and
                    troubleshooting code. I take pride in determination and dedication when it comes to programming. I
                    am always learning and evolving. I keep up to date with the ever so changing industry and never turn
                    down a challenge. I graduate in May of 2021 and I am open to all remote positions, though I would
                    prefer a full stack position. My portfolio is always being updated, feel
                    free to contact me at the bottom of the page with any questions or concerns. Check out my LinkedIn
                    and GitHub profiles located down below.
                </p>
            </div>

            <div className="col-md-6 skills">
                <h1 className="skills">Current Skills</h1>
                <div className="col-6 frontEnd">
                    <h4 className="tech">Front End Technologies</h4>
                    <ul className="techUl">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>jQuery</li>
                        <li>React</li>
                        <li>API Interaction</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
                <div>
                    <h4 className="tech">Back-End Technologies</h4>
                    <ul className="techUl">
                        <li>Node.Js</li>
                        <li>MongoDB</li>
                        <li>Mongoose</li>
                        <li>Express</li>
                        <li>SQL</li>
                        <li>Sequelize</li>
                        <li>REST API's</li>
                    </ul>
                </div>
            </div>
        </main>
        </div>
    )
}

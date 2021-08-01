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
                    My name is Daniel and thank you for visiting my portfolio! With the accomplishment of graduating
                    Kansas University's Full Stack Coding bootcamp and over 5 years of web development as a hobby I
                    can say that I am constantly striving to be better and keep up with the industry! With the set 
                    of skills and technologies I have acquired over the past couple years I feel confident I can be a valuable asset to any company.
                    Please feel free to contact me with any questions! Thank you and have a good day!
                </p>
            </div>

            <div className="col-md-6 skills">
                <h1 className="skills" id="skills">Current Skills</h1>
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

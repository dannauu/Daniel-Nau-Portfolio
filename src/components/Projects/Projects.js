/* eslint-disable react/style-prop-object */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import './Projects.css'
import foodForComfort from '../../assets/img/Food-for-comfort.PNG'
import Burger from '../../assets/img/Burger-Screenshot.PNG'
import WorkdayScheduler from '../../assets/img/workday-scheduler.PNG'
import WeatherDashboard from '../../assets/img/WeatherDashboard.PNG'

export default function Projects() {
  return (
    <div>
      <div>
        <div className="row">
          <div className="col-md-12 projectsH1" id="projects">
            <h1>Projects</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="card border border-dark">
              <img
                className="card-img-top"
                src={foodForComfort}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Food For Comfort</h5>
                <p className="card-text">
                  Application that allows user to input city and return weather
                  and restaraunts for specified area.
                </p>
                <a
                  href="https://sfinck.github.io/food-search-gp/"
                  className="btn btn-dark cardbtns"
                  target="_blank"
                  rel="noreferrer"
                >
                  Deployed App
                </a>
                <a
                  href="https://github.com/sfinck/food-search-gp"
                  className="btn btn-dark cardbtns"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github Repo
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border border-dark">
              <img
                className="card-img-top"
                src={WeatherDashboard}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Weather Application</h5>
                <p className="card-text">
                  Application that allows user to input specified city and state
                  for current weather.
                </p>
                <a
                  href="https://dannauu.github.io/Weather-Dashboard/"
                  className="btn btn-dark cardbtns"
                  target="_blank"
                  rel="noreferrer"
                >
                  Deployed App
                </a>
                <a
                  href="https://github.com/dannauu/Weather-Dashboard"
                  className="btn btn-dark cardbtns"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github Repo
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border border-dark">
              <img
                className="card-img-top"
                src={WorkdayScheduler}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Task Scheduler</h5>
                <p className="card-text">
                  Application to help plan your work day, utilizes local storage
                  to save your tasks hour by hour.
                </p>
                <a
                  href="https://dannauu.github.io/Work-Day-Scheduler//"
                  className="btn btn-dark cardbtns"
                  target="_blank"
                  rel="noreferrer"
                >
                  Deployed App
                </a>
                <a
                  href="https://github.com/dannauu/Work-Day-Scheduler"
                  className="btn btn-dark cardbtns"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github Repo
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card border border-dark">
              <img
                className="card-img-top"
                src={Burger}
                alt="Coming Soon"
              />
              <div className="card-body">
                <h5 className="card-title">Burger App</h5>
                <p className="card-text">
                  A full stack MVC (Model-View-Controller) app that allows the
                  user to create burgers to eat and also displays burgers ready
                  to eat.
                </p>
                <a
                  href="https://enigmatic-beach-96316.herokuapp.com/"
                  className="btn btn-dark cardbtns"
                  target=""
                >
                  Deployed App
                </a>
                <a
                  href="https://github.com/dannauu/burgers"
                  className="btn btn-dark cardbtns"
                  target=""
                >
                  Github Repo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

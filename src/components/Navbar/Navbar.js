import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="row navBar">
      <div className="col-md-6">
        <h1 className="navbarName">Daniel Nau</h1>
      </div>
      <div className="col-md-6">
        <div className="row linksRow">
          <div className="col-md-3 links">
            <a href="#aboutme" className="navbtns">
              About Me
            </a>
          </div>
          <div className="col-md-3 links">
            <a href="#skills" className="navbtns">
              Skills
            </a>
          </div>
          <div className="col-md-3 links">
            <a href="#projects" className="navbtns">
              Projects
            </a>
          </div>
          <div className="col-md-3 links">
            <a href="#contactme" className="navbtns">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

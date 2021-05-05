import React from "react";
import './Contact.css'
import pdf from '../../pdf/Daniel-Nau-Resume-2021.pdf'

export default function Contact() {
  return (
    <div className='contact'>
      <div className="row">
        <div className="col-md-12" id="contact">
          <h1>Contact Me</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <a
            href={pdf}
            className="btn btn-social"
            target="_blank" rel="noreferrer"
          >
            <i className="far fa-file-pdf"></i> Resume
          </a>
          <a
            href="mailto:danielnau1994@gmail.com"
            className="btn btn-social"
            id="email"
          >
            <i className="fa fa-envelope"></i> Email
          </a>
          <a
            href="https://github.com/dannauu"
            className="btn btn-social"
            target="_blank" rel="noreferrer"
          >
            <i className="fab fa-github"></i> Github
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-nau-070441194/"
            className="btn btn-social"
            target="_blank" rel="noreferrer"
          >
            <i className="fab fa-linkedin"></i> Linkedin
          </a>
          <button className="btn btn-social" id="phoneNumber">
            <i className="fas fa-phone"></i> 816-882-8421
          </button>
        </div>
      </div>
    </div>
  );
}

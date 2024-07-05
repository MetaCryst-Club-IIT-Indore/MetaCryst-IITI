import React from 'react';
import './teamcard.css';
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

function Teamcard({ val }) {
  return (
    <>
    <div className="home-container">
      <div className="profile-card">
        <div className="img">
          <img src={val.img} alt={val.name} />
        </div>
        <div className="caption">
          <h3>{val.name}</h3>
          <p>{val.designation}</p>
          <div className="social-links">
            {val.lin && <a href={val.lin}><FaLinkedin className="socIcon" /></a>}
            {val.ig && <a href={val.ig}><FaInstagram className="socIcon" /></a>}
            {val.git && <a href={val.git}><FaGithub className="socIcon" /></a>}
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Teamcard;

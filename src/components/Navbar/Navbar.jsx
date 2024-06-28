import React, { useState } from "react";
import styles from "./Navbar.module.css";
import metalogo from "../../assets/metalogo.png";
import iitilogo from "../../assets/iitilogo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [isResponsive, setIsResponsive] = useState(false);

  const handleToggle = () => {
    setIsResponsive((prevState) => !prevState);
  };

  return (
    <>
      <div className={styles.clubname}>
        <div className={styles.logo}>
          <a href="/">
            <img
              src={metalogo}
              alt=""
              style={{
                margin: "1vh 2vw",
                width: "80px",
                height: "70px",
                backgroundColor: "transparent",
                
              }}
            />
          </a>
        </div>
        <div style={{ margin: "1vh 2vw " }}>
          <a
            href="/"
            style={{
              fontSize: "5.5vh",
              fontWeight: "bold",
              color: "white",
              textDecoration: "none",
            }}
          className={styles.name}>
            The MetaCryst Club - IIT Indore
          </a>
        </div>
        <div>
          <a href="https://www.iiti.ac.in/" target="_blank">
            <img
              src={iitilogo}
              alt=""
              style={{
                margin: "1vh 2vw",
               width: "80px",
                height: "70px",
                backgroundColor: "transparent",
              }}
            />
          </a>
        </div>
      </div>

      <div className={styles.navbar}>
        <div
          className={`${styles.topnav} ${
            isResponsive ? styles.responsive : ""
          }`}
          id="myTopnav">
          <Link to="/" ><div className="text-xl ">Home</div></Link>
          <Link to="/explore"><div  className="text-xl ">Explore</div></Link>
          <Link to="/projects"><div  className="text-xl ">Projects</div></Link>
          
          <Link to="/events"><div  className="text-xl ">Events</div></Link>
          <Link to="/team"><div  className="text-xl ">Team</div></Link>
          <button
            className={styles.joinus}
            onClick={() =>
              (window.location.href =
                "https://chat.whatsapp.com/HL0GTYmaxIGKxkPVugqjdR")
            }>
            Join Us
          </button>
          <a
            href="javascript:void(0);"
            className={styles.icon}
            onClick={handleToggle}>
            <i className="fas fa-bars"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;

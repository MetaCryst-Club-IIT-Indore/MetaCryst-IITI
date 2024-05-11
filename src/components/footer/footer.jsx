import React from "react";
import styles from "./footer.module.css";
import metalogo from "../../assets/metalogo.png";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css"; 



function Footer() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.logocontainer}>
          <div className={styles.clubname}> MetaCryst Club </div>
          <div className={styles.logo}>
           <a href="/"> <img
              src={metalogo}
              alt=""
              style={{
                margin: "1vh 2vw",
                width: "150px",
                height: "150px",
                backgroundColor: "transparent",
              }}
            /></a>
          </div>
        </div>
        <div className={styles.quicklinks}>
          <div className={styles.title}>Quick Links</div>
          <hr />
          <div className={styles.links}>
            <Link to="/">Home</Link>
          </div>
          <div className={styles.links}>
            <Link to="/aboutus">About us</Link>
          </div>
          <div className={styles.links}>
            {" "}
            <Link to="/news">News</Link>
          </div>
          <div className={styles.links}>
            <Link to="/activities">Activities</Link>
          </div>
          <div className={styles.links}>
            <Link to="/team">Team</Link>
          </div>
        </div>

        <div className={styles.contactus}>
          <div
            style={{
              fontSize: "larger",
              fontWeight: "bolder",
              display: "flex",
              alignitems: "center",
              marginTop: "1.6vh",
            }}
          >
            Social media
          </div>
          <hr />
          <div>
            <a
              href="https://www.instagram.com/iitindoreofficial/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
              <span class="icon-instagram"></span>
            </a>
            <a
              href="https://www.facebook.com/IIT-Indore-108781240868622"
              target="_blank"
              rel="noreferrer"
            >
              <span class="icon-facebook"></span>
            </a>
            <a
              href="https://www.linkedin.com/school/iit-indore/"
              target="_blank"
              rel="noreferrer"
            >
              <span class="icon-linkedin"></span>
            </a>
            <a
              href="https://twitter.com/IITIOfficial"
              target="_blank"
              rel="noreferrer"
            >
              <span class="icon-twitter"></span>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.rights}>
        &copy; MetaCryst Club - IIT Indore @2024 . All Rights Reserved
      </div>
    </>
  );
}

export default Footer;

import React from "react";
import { aboutme } from "../portfolio";
import profilePic from "../Assets/profile-pic.png"
import Fade from "react-reveal/Fade";
import "./Aboutme.css";
import { Timeline } from "./Timeline";

function Aboutme() {
  return (
    <section className="aboutme" id="aboutme">
      <h1 className="title">
        <Fade bottom cascade>
          About ME
        </Fade>
      </h1>
      <div className="fluid-container">
        <div className="row">
          <Fade left cascade duration={1500}>
            <div className="col-lg-5 col-md-5 image">
              <img
                className="aboutme-img"
                height="600"
                width="400"
                src={profilePic}
                alt="profile pic"
              />
            </div>
          </Fade>
          <Fade bottom cascade duration={1500}>
            <div className="col-lg-7 col-md-7 text">
              <p>{aboutme.p1}</p>
              <ul>
              <li>{aboutme.p2}</li>
              <li>{aboutme.p3}</li>
              <li>{aboutme.p4}</li>
              <li>{aboutme.p5}</li>
              <li>{aboutme.p6}</li>
              <li>{aboutme.p7}</li>
              </ul>
           
              <p>{aboutme.p8}</p>
            </div>
          </Fade>

          <Timeline />
        </div>
      </div>
    </section>
  );
}

export default Aboutme;

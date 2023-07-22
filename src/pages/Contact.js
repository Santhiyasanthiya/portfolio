import React from 'react';
import { links } from '../portfolio';
import { SocialIcon } from 'react-social-icons';
import Fade from 'react-reveal/Fade';
import {AiFillPhone } from "react-icons/ai";

import "./contact.css"

const Contact = () => {
    return <div className="contact" id="contact">
        <h1 className="contact-title">
            <Fade bottom cascade duration={2500}>Reach Out To Me!</Fade>
        </h1>
        <div className="icon">
            {links.map((link) => <div className="icons"> <SocialIcon url={link} target="_blank"
 /> 
 </div>)}
 <a
              href="tel:+919360430032"
              target="_blank"
              rel="noreferrer"
              aria-label="phone"
              className="icon"
            >
              <AiFillPhone className='phone'  />
            </a>
        </div>
        <center>
            <hr className="style-f" />
        </center>
        <p className="copyright">You can contact me at the places mentioned above or at +91 9360430032 </p>
    </div >
}

export default Contact

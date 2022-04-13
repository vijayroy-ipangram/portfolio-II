import React from "react";

import { Grid } from "@material-ui/core";

import mobileIcon from "./icons/mobile.png";
import emailIcon from "./icons/email.png";
import pune from "./icons/pune.png";
// import instagramIcon from "./icons/instagram.png"
import locationIcon from "./icons/location.png";
import linkedInIcon from "./icons/linkedin.png";
// import githubIcon from './icons/github.gif'
import "./contact.scss";

const Contact = () => {
	return (
		<div className="contact-main">
			<div className="contact-heading">
				<span>Get in Touch</span>
				<h1>Contact</h1>
			</div>
			<Grid container className="contact-block">
				<Grid
					item
					xs={12}
					md={6}
					sm={12}
					className="contact-info-block"
				>
					<div
						data-aos="fade-up"
						data-aos-duration="1500"
						className="mobile c"
					>
						<img src={mobileIcon} alt="mobileIcon" />
						<span>+91 7249890192</span>
					</div>
					<div
						data-aos="fade-down"
						data-aos-duration="1500"
						className="email c"
					>
						<img src={emailIcon} alt="emailIcon" />
						<span>chaudharisucheta@gmail.com</span>
					</div>
					{/* <div className="instagram c">
                        <img src={instagramIcon} alt="instagramIcon" />
                        <span>vamsi_chilukuri_</span>
                    </div> */}
					<div
						data-aos="fade-up"
						data-aos-duration="1500"
						className="linkedInIcon c"
					>
						<img src={linkedInIcon} alt="linkedInIcon" />
						<span><a href="https://www.linkedin.com/in/sucheta-chaudhari-54a8977a/" style={{color:"white",textDecoration:"none"}}>Sucheta Chaudhari</a></span>
					</div>
					<div
						data-aos="fade-down"
						data-aos-duration="1500"
						className="instagram c"
					>
						<img src={locationIcon} alt="locationIcon" />
						<span>Pune Maharashtra</span>
					</div>
					{/* <div className="github c">
                        <img src={githubIcon} alt="githubIcon" />
                        <span>https://github.com/vamsichilukuri</span>
                    </div> */}
				</Grid>
				<Grid item xs={12} md={6} sm={12} className="contact-location">
					<div data-aos="zoom-in" data-aos-duration="1500">
						<img src={pune} alt="map" style={{borderRadius:'7px'}}/>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default Contact;

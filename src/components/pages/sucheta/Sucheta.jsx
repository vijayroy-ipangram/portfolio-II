import React, { useEffect } from "react";
import VWD from "./images/profile5.jpg";
import "./sucheta.scss";
import { Box, Grid, Typography } from "@material-ui/core";
import Aos from "aos";
import "aos/dist/aos.css";

const Sucheta = () => {
	useEffect(() => {
		Aos.init();
	}, []);
	return (
		<div className="sucheta-container">
			<Grid container>
				<Grid item xs={12} sm={12} md={6}>
					<div
						data-aos="fade-left"
						data-aos-duration="1000"
						className="headings"
					>
						<Typography variant="h4"><Box fontWeight="fontWeightLight">Hi I am</Box></Typography>
						<Typography variant="h1"><Box fontWeight="fontWeightBold" m={2}>Vijay Roy</Box></Typography>
						<div className="info-block">
						<Typography>
								I am a Front End developer and have 2 years of 
								experience building <b>Web</b> applications with 
								 <strong> HTML CSS JavaScript ES6 Bootstrap React Material UI</strong> and <strong>React JS </strong> with willingness 
								to learn and master Backend technologies.
								</Typography> 
								
						
						</div>
					</div>
				</Grid>
				<Grid item xs={12} sm={12} md={6}>
					<div data-aos="zoom-in" className="devImg ">
						<img src={VWD} alt="developerimage" />
						<div className="overlay"></div>
					</div>
				</Grid>
			</Grid>
		</div>
	);
};

export default Sucheta;

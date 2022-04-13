import React from "react";

//-----> Module's
import { Grid } from "@material-ui/core";

//-----> Image's & Icon's
// import angularIcon from "./icons/angular.png";
import css3Icon from "./icons/css3.png";
import html5Icon from "./icons/html5.png";
import javascriptIcon from "./icons/javascript.png";
import react from "./icons/react.svg";
import bootstrap from './icons/bootstrap.svg';
import redux from './icons/redux.svg';
import node from "./icons/nodejs.png";
import reactRouter from "./icons/reactRouter.png"


//-----> SCSS
import "./tools.scss";

export default function About() {
	return (
		<div>
			<div className="about-container">
				<div
					data-aos="fade-up"
					data-aos-duration="1000"
					className="headings"
				>
						<h1>Tools</h1>
					{/* <div className="info-block">
						<p>
							I'm a Full-stack developer. i build <b>Web</b> &
							<b> Mobile</b> applications. works with both the
							frontend, backend and deployment of a website or
							application. Provide an end-to-end service for 2+
							years. Also work on microservices.
						</p>
					</div> */}
				</div>

				<Grid container className="tool-icons">
				
					<Grid
						item
						xs={12}
						md={12}
						sm={12}
						lg={12}
						className="frontend-tools-block"
					>
						<div data-aos="fade-up" data-aos-duration="1500">
							{/* <h2>FRONTEND</h2> */}
							<div className="web-tools-block">
								<h4>HTML, CSS, JAVASCRIPT & BOOTSTRAP</h4>
								<img src={html5Icon} alt="html" />
								<img src={css3Icon} alt="css" />
								<img src={javascriptIcon} alt="javascript" />
								<img src={bootstrap} alt="bootstrap" />
							</div>
							<div className="web-frameworks-block">
								<h4> Node JS, REACT JS, REDUX & React Router</h4>
								<img src={node} alt="nodejs" /> 
								<img src={react} alt="reactJs" />
								<img src={redux} alt="redux" />
								<img src={reactRouter} alt="reactRouter" style={{height: '3.4em', width:'4em'}} /> 
								
							
							</div>
							
						</div>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

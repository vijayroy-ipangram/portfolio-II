import React from "react";

//-----> Modules
import { Grid} from "@material-ui/core";

//-----> Image's & Icon's
// import Vamsi1 from "./images/vamsi1.jpeg";
import Vamsi2 from "./images/profile1.jpg";

//-----> SCSS
import "./profile.scss";

function Profile() {
	return (
		<div className="profile">
			<Grid container className="profile_grid">
				<Grid
					item
					xs={12}
					sm={12}
					md={5}
					lg={5}
					className="profile_image_block"
				>
					<div data-aos="zoom-in" data-aos-duration="1500">
						<img src={Vamsi2} alt="profileImage" />
					</div>
				</Grid>
				<Grid
					item
					xs={11}
					sm={11}
					md={6}
					lg={6}
					className="profile_details_block"
				>
					<div
						className="profile_details self"
						data-aos="fade-up"
						data-aos-duration="1500"
					>
						<h2>PERSONAL DETAILS</h2>
						<Grid container className="bio_section">
							<Grid item xs={4} sm={4} md={4} lg={4}>
								<ul>
									<li>Name</li>

									<li>Date of Birth</li>
									<li>Gender</li>
									<li>Designation</li>
									<li>Profession</li>
									<li>Experience</li>
									<li>Nationality</li>
									<li>Languages</li>
									<li>Country</li>
								</ul>
							</Grid>
							<Grid item xs={1} sm={1} md={1} lg={1}>
								<ul>
									<li>:</li>
									<li>:</li>
									<li>:</li>
									<li>:</li>
									<li>:</li>
									<li>:</li>
									<li>:</li>
									<li>:</li>
									<li>:</li>
									{/* <li>:</li>
									<li>:</li> */}
								</ul>
							</Grid>
							<Grid item xs={6} sm={6} md={6} lg={6}>
								<ul>
									<li>Vijay Roy</li>

									<li>22nd October 1993</li>
									<li>Male</li>
									<li>React Js Developer</li>
									<li>Software ( IT )</li>
									<li>2 years</li>
									<li>Indian</li>
									<li>English, Hindi</li>
									<li>India</li>
									
								</ul>
							</Grid>
						</Grid>
					</div>
					<div
						className="profile_details acadamic"
						data-aos="fade-up"
						data-aos-duration="1500"
					>
						<h2>University</h2>
						<ul>
							<li>
								Pursued B.Tech in Computer Engineering during
								2011-2015 batch, with an aggregate of 7.0 CGPA from
								Rajiv Gandhi Proudyogik Viswavidyalaya University,Bhopal,
								Madhya Pradesh
							</li>
		
			
						</ul>
					</div>
					<div
						className="profile_details experience"
						data-aos="fade-up"
						data-aos-duration="1500"
					>
						<h2>WORK EXPERIENCE</h2>
						{/* <Grid container className="companies_section">
							<Grid item xs={3} sm={3} md={3} lg={3}>
								<ul>
									<li>Company</li>
									<li>Role</li>
									<li>Joined</li>
								</ul>
							</Grid>
							<Grid item xs={1} sm={1} md={1} lg={1}>
								<ul>
									<li>:</li>
									<li>:</li>
									<li>:</li>
								</ul>
							</Grid>
							<Grid item xs={7} sm={7} md={7} lg={7}>
								<ul>
									<li>AppyStack Pvt Ltd</li>
									<li>Front End Developer</li>
									<li>June 2020-Sept 2021</li>
								</ul>
							</Grid>
						</Grid>
								*/}
						<Grid container className="companies_section">
							<Grid item xs={3} sm={3} md={3} lg={3}>
								<ul>
									<li>Company</li>
									<li>Role</li>
					
								</ul>
							</Grid>
							<Grid item xs={1} sm={1} md={1} lg={1}>
								<ul>
									<li>:</li>
									<li>:</li>
						
								</ul>
							</Grid>
							<Grid item xs={7} sm={7} md={7} lg={7}>
								<ul>
									<li>IT FUTURZ</li>
									<li>React JS Developer</li>
				

								</ul>
							</Grid>
						</Grid>
						<span>
							Job Responsibilities at IT FUTURZ
						
						</span>
						<ul>
							<li>Developing and implementing highly responsive user interface components using react concepts.</li>
							<li>
								Translate static design into interactive elements of web products and computer applications using programming
								languages such as HTML,CSS ,JavaScript and Bootstrap.
							</li>
							<li>
								Developing ,maintaining and troubleshooting the user interfaces.
							</li>
							<li>
								Monitoring and improving front-end performance
							</li>

						</ul>
					</div>
				</Grid>
			</Grid>
		</div>
	);
}

export default Profile;

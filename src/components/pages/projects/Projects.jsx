import React from "react";

//-----> Modules
import {
	Grid,
	Card,
	CardContent,
	CardMedia,
	CardActions,
	Typography,
	Button
} from "@material-ui/core";
import { VisibilitySharp } from "@material-ui/icons";


//-----> Image's & Icon's
import omniscape from "./images/omniscape.png";
import traininginstitute from "./images/traininginstitute.png";
import bakekick from "./images/bakekick.png";
import reviewmatters from "./images/reviewmatters.png";


//-----> SCSS
import "./projects.scss";

const Projects = () => {
	const webProjects = [
		{
			name: "Training Institute",
			description:"Most suitable platform for students, professionals to keep themselves up-to-date with trending courses which are provided online as well as offline.Also suitable for corporates who want to train their staff on particular technology.",
			image: traininginstitute,
			url:'https://codejobs.in/'
		},
		{
			name: "Omniscape",
			description:
				"Use the map tool to click on the locations you want and claim those using tokens.You can  claim virtual real estate ,view and create 3d content on the world map and travel to VR scenes that are linked to world map content.",
			image: omniscape,
			url:'https://omniscapexr-staging.web.app/'
		},
		{
			name: "Bakekick",
			description:
				"Provides a platform for bakers to socialize and share their recipes or baking tools used by them.Also enable them to sell cakes,bread and other bakery items as well as the tools used for baking.",
			image: bakekick,
			url:'https://bakekick-5f0f6.web.app/#/'
		},
		{
			name: "Review Matters",
			description:
				"Online reviews are more widespread than ever before, because they matter to consumers and to businesses.We provide a platform to connect, communicate and respond quickly to the customers.",
			image: reviewmatters,
			url:'https://reviewmatters.com/'
		},
		
	];
	
	return (
		<div className="projects_main">
			<h1>Projects</h1>
			<div className="all_projects_list">
				<div className="web_projects">
					
					<Grid container className="projects">
						{webProjects.map(
							({ image, name, description, url }) => {
								return (
									<Grid
										item
										xs={11}
										sm={11}
										md={3}
										lg={3}
										className="project"
									>
										
										<Card
											className="card"
											data-aos="zoom-in"
											data-aos-duration="1500"
										>
											<CardMedia
												component="img"
												height="140"
												image={image}
												alt="green iguana"
											/>
											<CardContent className="card_content">
												<Typography
													gutterBottom
													variant="h5"
													component="div"
												>
													{name}
												</Typography>
												<Typography
													variant="body2"
													color="text.secondary"
												>
													{description}
												</Typography>
											</CardContent>
											<CardActions className="card_buttons">
												{/* <Button
													variant="contained"
													size="small"
													endIcon={<GitHub />}
													style={{
														backgroundColor:
															"#cfcfcf",
														fontWeight: "600",
													}}
												>
													Source
												</Button> */}
												<Button
													variant="contained"
													size="small"
													endIcon={
														<VisibilitySharp />
													}
													style={{
														backgroundColor:
															"#cfcfcf",
														fontWeight: "600",
														width:'100%'
													}}
													onClick={()=>window.open(url)}
												>
													Visit
												</Button>
											</CardActions>
										</Card>
									</Grid>
								);
							}
						)}
					</Grid>
				</div>
				
				
			</div>
		</div>
	);
};

export default Projects;

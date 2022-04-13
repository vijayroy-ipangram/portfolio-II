import React from "react";

//-----> Components
import Tools from "../tools/Tools";
import Sucheta from "../sucheta/Sucheta";
import Profile from "../profile/Profile";
import Projects from "../projects/Projects";
import Skills from "../skills/Skills";
import CodeQuality from "../CodeQuality/CodeQuality";

export default function Home() {
	return (
		<div>
			<Sucheta />
			<Projects />
			<Tools />
			<Skills />
			<CodeQuality/>
			<Profile />
		</div>
	);
}

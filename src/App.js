//-----> Modules
import { HashRouter as Router, Route, Switch } from "react-router-dom";

//-----> Components
import Home from "./components/pages/home/Home";
import NavMenu from "./components/navMenu/NavMenu";
import Skills from "./components/pages/skills/Skills";
import Projects from "./components/pages/projects/Projects";
import Tools from "./components/pages/tools/Tools";
import Profile from "./components/pages/profile/Profile";

//-----> SCSS
import "./App.css";

function App() {
	return (
		<div className="App">
			<Router>
				<NavMenu />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/skills" component={Skills} />
					<Route exact path="/projects" component={Projects} />
					<Route exact path="/tools" component={Tools} />
					<Route exact path="/profile" component={Profile} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;

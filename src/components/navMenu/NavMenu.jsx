import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navMenu.scss";
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";

export default function NavMenu() {
	const [menuState, setMenuState] = useState(false);
	return (
		<div className={!menuState ? "navMenu" : "navMenu hideNavMenu"}>
			{!menuState && (
				<div
					className="mobile-menu-open-icon"
					onClick={() => {
						setMenuState(!menuState);
					}}
				>
					<MdMenu />
				</div>
			)}
			<ul className={menuState ? "navItems" : "hideNavItems"}>
				{menuState && (
					<div
						className="mobile-menu-close-icon"
						onClick={() => {
							setMenuState(!menuState);
						}}
					>
						<MdClose />
					</div>
				)}
				<li>
					<NavLink
						to="/"
						exact
						onClick={() => {
							setMenuState(!menuState);
						}}
					>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						to="projects"
						onClick={() => {
							setMenuState(!menuState);
						}}
					>
						Projects
					</NavLink>
				</li>
				<li>
					<NavLink
						to="skills"
						onClick={() => {
							setMenuState(!menuState);
						}}
					>
						Skills
					</NavLink>
				</li>
				<li>
					<NavLink
						to="tools"
						onClick={() => {
							setMenuState(!menuState);
						}}
					>
						Tools
					</NavLink>
				</li>
				{/* <li>
					<NavLink
						to="contact"
						onClick={() => {
							setMenuState(!menuState);
						}}
					>
						Contact
					</NavLink>
				</li> */}
				<li>
					<NavLink
						to="profile"
						onClick={() => {
							setMenuState(!menuState);
						}}
					>
						Profile
					</NavLink>
				</li>
			</ul>
		</div>
	);
}

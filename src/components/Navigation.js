import React from "react";
//lien en react
import { NavLink } from "react-router-dom";

const Navigation = () => {
	return (
		<div className="navigation">
			<ul>
				{/* le to sert de href  et la balise navlink sert de a*/}
				{/* le premier navlink mene a la page Home*/}
				{/* stylisation du lien actif avec nav.isActive*/}
				<NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
					<li>Acceuil</li>
				</NavLink>
				{/*le second navlink mene a la page About*/}
				<NavLink
					to="/about"
					className={(nav) => (nav.isActive ? "nav-active" : "")}
				>
					<li>A Propos</li>
				</NavLink>
			</ul>
		</div>
	);
};

export default Navigation;

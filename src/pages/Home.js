import React from "react";
import Navigation from "../components/Navigation";
//importation de la navigation

const Home = () => {
	return (
		<div>
			{/**appel du composant Navigation dans la page Home*/}
			<Navigation />
			<p>Acceuil</p>
		</div>
	);
};

export default Home;

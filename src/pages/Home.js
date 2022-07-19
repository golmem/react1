import React from "react";
//importation du composant de la liste des pays
import Countries from "../components/Countries";
//importation de la navigation
import Navigation from "../components/Navigation";

const Home = () => {
	return (
		<div>
			{/**appel du composant Navigation dans la page Home*/}
			<Navigation />
			{/**appel du composant Countries dans la page Home*/}
			<Countries />
		</div>
	);
};

export default Home;

import React from "react";

const Countries = () => {
	return (
		// le useEffect est appelé quand le composant est monté c'est a dire appelé
		useEffect(() => {
			//utilisation de axios pour recuperer les données de l'api restcountries
			axios.get("https://restcountries.com/v3.1/all");
		}, []),
		(
			<div className="countries">
				<p>Countries</p>
			</div>
		)
	);
};

export default Countries;

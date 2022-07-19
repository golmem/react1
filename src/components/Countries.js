import React, { useEffect, useState } from "react";
//importation d'axios
import axios from "axios";

const Countries = () => {
	//data on le garde immutable mais set data contiendra les valeurs qu'on pourra modifier
	//donc on initialise notre useState, notre etat etant un tableau vide
	const [data, setData] = useState([]);
	// le useEffect est appelé quand le composant est monté c'est a dire appelé
	useEffect(() => {
		//utilisation de axios pour recuperer les données de l'api restcountries
		axios
			.get("https://restcountries.com/v3.1/all")
			.then((result) => setData(result.data)); //on transmet à setData les données recupérées
	}, []);
	return (
		<div className="countries">
			<p>Countries</p>
			<ul>
				{data.map((country) => (
					<li key={country.name.common}>{country.translations.fra.common}</li>
				))}
			</ul>
		</div>
	);
};

export default Countries;

import React, { useEffect, useState } from "react";
//importation d'axios
import axios from "axios";
import Card from "./Card";

const Countries = () => {
	//data on le garde immutable mais set data contiendra les valeurs qu'on pourra modifier
	//donc on initialise notre useState, notre etat etant un tableau vide
	const [data, setData] = useState([]);
	const [rangeValue, setRangeValue] = useState(36);
	const [selectedRadio, setSelectedRadioValue] = useState("");
	const radios = ["Africa", "Europe", "America", "Asia", "Oceania"];
	// le useEffect est appelé quand le composant est monté c'est a dire appelé
	useEffect(() => {
		//utilisation de axios pour recuperer les données de l'api restcountries
		axios
			.get("https://restcountries.com/v3.1/all")
			.then((result) => setData(result.data)); //on transmet à setData les données recupérées
	}, []);
	return (
		<div className="countries">
			<ul className="radio-container">
				<input
					type="range"
					min="1"
					max="250"
					defaultValue={rangeValue}
					onChange={(e) => setRangeValue(e.target.value)}
				/>
				{radios.map((continent, index) => (
					<li key={index}>
						<input
							type="radio"
							id={continent}
							name="continentRadio"
							checked={continent === selectedRadio}
							onChange={(e) => setSelectedRadioValue(e.target.id)}
						/>
						<label htmlFor={continent}>{continent}</label>
					</li>
				))}
			</ul>
			{selectedRadio && (
				<button onClick={() => setSelectedRadioValue("")}>
					Annuler la recherche
				</button>
			)}

			<ul>
				{data
					.filter((country) => country.continents[0].includes(selectedRadio))
					.sort((a, b) => b.population - a.population)
					.slice(0, rangeValue)
					.map((country, index) => (
						<Card key={index} country={country} />
					))}
			</ul>
		</div>
	);
};

export default Countries;

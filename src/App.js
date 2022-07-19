import React from "react";
//importation de librairies venant de react-router
import { BrowserRouter, Routes, Route } from "react-router-dom";
//importation des pages
import Home from "./pages/Home";
import About from "./pages/About";

//il n'est pas obligatoire d'importer react ici
//les classe dans du code html en react sont utilisées avec className
const App = () => {
	//BrowserRouter englobe toute notre application
	//Routes va englober l'ensemble des routes pour qu'on puisse naviguer vers n'importe quelle page
	//Route defini le chemin d'un page spécifique
	//quand on est sur l'url racine l'élément a appelé est le composant  Home <Route path="/" element={<Home />} />
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				{/*path="*" renvoi sur la page d'acceuil si lurl cest du n'importe quoi*/}
				<Route path="*" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;

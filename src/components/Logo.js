import React from "react";

//notre composant Logo
const Logo = () => {
	return (
		<div className="logo">
			{/*les images en react prenent leur source du dossier public */}
			<img src="./logo192.png" alt="logo-react" />
			<h3>React World</h3>
		</div>
	);
};

export default Logo;

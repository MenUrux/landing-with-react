import React from "react";
import Card from "./card";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<div className="d-flex gap-4">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};



export default Home;

import React, { useEffect } from "react";
import styles from "./Home.module.scss";

import Main from "../../components/Home_Main/Main";

import Home_Exposition from "../../components/Home_Exposition/Home_Exposition";
import Home_History from "../../components/Home_History/Home_History";
import Home_Rocket from "../../components/Home_Rocket/Home_Rocket";
import Home_Stats from "../../components/Home_Stats/Home_Stats";
import Home_Slider from "../../components/Home_Slider/Home_Slider";

const Home = () => {
	return (
		<div>
			<Main />

			<Home_Exposition />
			<Home_History />
			<Home_Rocket />
			<Home_Stats />
			<Home_Slider />
		</div>
	);
};

export default Home;

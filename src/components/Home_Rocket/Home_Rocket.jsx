import React from "react";
import styles from "./Home_Rocket.module.scss";

const Home_Rocket = () => {
	const image = "images/rocketa.webp";


	return (
		<div className={styles.section}>
			<div className={styles.wrapper}>
				<img draggable={false} src={image} alt="rocketa" />
			</div>
		</div>
	);
};

export default Home_Rocket;

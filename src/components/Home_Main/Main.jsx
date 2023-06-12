import React, { useEffect, useRef, useState } from "react";

import { Scene } from "./Scene";
import { Overlay } from "./Overlay";
import styles from "./Main.module.scss";
import { baseUrl } from "../../App";

const Main = () => {
	const Screen = () => {
		const screen = useRef();

		useEffect(() => {
			if (location.pathname === baseUrl +"/") {
				setTimeout(() => {
					screen.current.style.transition = "none";
					screen.current.style.opacity = 1;
				}, 0);

				setTimeout(() => {
					screen.current.style.transition = "all 4s ease 0.75s";
					screen.current.style.opacity = 0;
				}, 0);
			}
			return () => {};
		}, []);

		return <div className={styles.screen} ref={screen}></div>;
	};

	return (
		<div className={styles.section}>
			<Scene />
			<Screen />
			<Overlay />
		</div>
	);
};

export default Main;

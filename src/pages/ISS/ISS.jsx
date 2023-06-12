import React, { useEffect, useRef } from "react";
import styles from "./ISS.module.scss";

import ISS_Overview from "../../components/ISS_Overview/ISS_Overview";
import ISS_ToKnow from "../../components/ISS_ToKnow/ISS_ToKnow";
import ISS_Pop from "../../components/ISS_Pop/ISS_Pop";
import ISS_Tourism from "../../components/ISS_Tourism/ISS_Tourism";

import { useLocation } from "react-router-dom";


const ISS = () => {

	const location = useLocation();

	const overview = useRef();
	const tourism = useRef();
	const toKnow = useRef();
	const pop = useRef();

	useEffect(() => {

		if (location.state === "ISS_Overview_ref") {
			overview.current.scrollIntoView({ behavior: "smooth" });
		}
		if (location.state === "ISS_Tourism_ref") {
			tourism.current.scrollIntoView({ behavior: "smooth" });
		}
		if (location.state === "ISS_ToKnow_ref") {
			toKnow.current.scrollIntoView({ behavior: "smooth" });
		}
		if (location.state === "ISS_Pop_ref") {
			pop.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [location.state]);

	return (
		<div className={styles.section}>
			<ISS_Overview reference={overview}/>
			<ISS_Tourism reference={tourism} />
			<ISS_ToKnow reference={toKnow}/>
			<ISS_Pop reference={pop}/>
		</div>
	);
};

export default ISS;

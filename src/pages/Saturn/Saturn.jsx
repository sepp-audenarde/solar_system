import React, { useEffect, useRef } from "react";
import styles from "./Saturn.module.scss";

// import Saturn_Main from "../../components/Saturn_Main/Saturn_Main";
import Saturn_Overview from "../../components/Saturn_Overview/Saturn_Overview";
import Saturn_ToKnow from "../../components/Saturn_ToKnow/Saturn_ToKnow";
import Saturn_Pop from "../../components/Saturn_Pop/Saturn_Pop";
import Saturn_Rings from "../../components/Saturn_Rings/Saturn_Rings";
import { useLocation } from "react-router-dom";

const Saturn = () => {
	const location = useLocation();

	const overview = useRef();
	const toKnow = useRef();
	const pop = useRef();
	const rings = useRef();

	useEffect(() => {
		if (location.state === "Saturn_Overview_ref") {
			overview.current.scrollIntoView({ behavior: "smooth" });
		}
		if (location.state === "Saturn_ToKnow_ref") {
			toKnow.current.scrollIntoView({ behavior: "smooth" });
		}
		if (location.state === "Saturn_Pop_ref") {
			pop.current.scrollIntoView({ behavior: "smooth" });
		}
		if (location.state === "Saturn_Rings_ref") {
			rings.current.scrollIntoView({ behavior: "smooth" });
		}
	}, [location.state]);

	return (
		<div className={styles.section}>
			{/* <Saturn_Main /> */}
			<Saturn_Overview reference={overview} />
			<Saturn_ToKnow reference={toKnow} />
			<Saturn_Pop reference={pop} />
			<Saturn_Rings reference={rings} />
		</div>
	);
};

export default Saturn;

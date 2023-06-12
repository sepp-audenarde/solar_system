import React from "react";
import styles from "./Error.module.scss";
import { Link } from "react-router-dom";
import { baseUrl } from "../../App";

const Error = () => {
	return (
		<div className={styles.test}>
			{/* Error */}
			<p>Страница не найдена</p>
			<Link to={baseUrl + "/"}>Вернуться на главную страницу</Link>
		</div>
	);
};

export default Error;

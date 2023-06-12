import React, { useEffect, useRef } from "react";

import styles from "./ISS_Pop.module.scss";
import { useGlobalContext } from "../../context/context";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { baseUrl } from "../../App";

const ISS_Pop = ({ reference }) => {
	const image1 = "images/gravity.webp";
	const {
		ISS_Overview_ref,
		setISS_Overview_ref,
		ISS_ToKnow_ref,
		setISS_ToKnow_ref,
		ISS_Pop_ref,
		setISS_Pop_ref,
		ISS_Tourism_ref,
		setISS_Tourism_ref,
	} = useGlobalContext();
	const location = useLocation();

	useEffect(() => {
		setISS_Pop_ref(reference);
	}, []);

	return (
		<div className={styles.section}>
			<div className={styles.wrapper}>
				<div className={styles.overview} ref={reference}>
					<p>МКС В популярной культуре</p>
				</div>
				<div className={styles.container}>
					<div className={styles.left}>
						<img draggable={false} src={image1} alt="spaceship" />
					</div>
					<div className={styles.right}>
						<div className={styles.topTitle}>Появление космических станций в популярной культуре</div>
						<div className={styles.wrapBottom}>
							<div className={styles.leftBottom}>
								<p className={styles.textBottom}>
									МКС появляется во многих фильмах о космосе. Международная космическая станция была показана в нескольких фильмах, включая
									"Вызов", "Гравитация", "Послезавтра" и документальный фильм "Космическая станция 3D".
								</p>
								<p className={styles.textBottom}>
									В научно-фантастических фильмах были показаны как реальные космические станции, как Международная космическая станция и
									"Мир", так и вымышленные, такие как "Гермес" в фильме "Марсианин"
								</p>
							</div>
							<div className={styles.rightBottom}>
								<Link
									to={baseUrl + "/saturn"}
									onClick={() => {
										setTimeout(() => {
											window.scrollTo({
												top: 0,
												left: 0,
												behavior: "smooth",
											});
										}, 0);
									}}>
									<p className={styles.linkNextSection}>Следующая страница - </p>
									<p className={styles.linkNextSection}>О планете Сатурн</p>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ISS_Pop;

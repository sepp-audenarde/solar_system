import React, { useEffect, useRef } from "react";
import styles from "./Saturn_Pop.module.scss";
import { useGlobalContext } from "../../context/context";
import { useLocation } from "react-router-dom";

const Saturn_Pop = ({ reference }) => {
	const image1 = "images/ship.webp";
	const {
		Saturn_Overview_ref,
		setSaturn_Overview_ref,
		Saturn_ToKnow_ref,
		setSaturn_ToKnow_ref,
		Saturn_Pop_ref,
		setSaturn_Pop_ref,
		Saturn_Rings_ref,
		setSaturn_Rings_ref,
	} = useGlobalContext();
	const location = useLocation();

	useEffect(() => {
		setSaturn_Pop_ref(reference);
	}, []);

	return (
		<div className={styles.section}>
			<div className={styles.wrapper}>
				<div className={styles.overview} ref={reference}>
					<p>Сатурн в популярной культуре</p>
				</div>
				<div className={styles.container}>
					<div className={styles.left}>
						<img draggable={false} src={image1} alt="spaceship" />
					</div>
					<div className={styles.right}>
						<div className={styles.topTitle}>Сатурн стал частью поп-культуры и часто появляется в научно-фантастических произведениях</div>
						<div className={styles.wrapBottom}>
							<div className={styles.leftBottom}>
								<p className={styles.textBottom}>
									Он служит фоном для многочисленных научно-фантастических рассказов, фильмов и телешоу, комиксов и видеоигр, включая "Мифы
									Ктулху", "ВАЛЛ-И", "2001: Космическая одиссея", "Звездный путь", Dead Space 2", "Final Fantasy VII" и в фильме Тима
									Бертона "Битлджус".
								</p>
								<p className={styles.textBottom}>
									А в фильме 2014 года "Интерстеллар" червоточина, которая позволяет астронавтам путешествовать в другую галактику,
									появляется вблизи Сатурна.
								</p>
							</div>
							<div
								className={styles.rightBottom}
								onClick={() => {
									Saturn_Rings_ref.current.scrollIntoView({ behavior: "smooth" });
								}}>
								<p className={styles.linkNextSection}>Далее - </p>
								<p className={styles.linkNextSection}>О кольцах Сатурна</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Saturn_Pop;

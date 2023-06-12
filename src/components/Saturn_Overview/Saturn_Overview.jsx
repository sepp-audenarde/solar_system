import React, { useEffect, useRef } from "react";
import styles from "./Saturn_Overview.module.scss";
import { useGlobalContext } from "../../context/context";
import { useLocation } from "react-router-dom";

const Saturn_Overview = ({ reference }) => {
	const image1 = "images/saturn_atm1.webp";
	const image2 = "images/saturn_atm2.webp";

	const arr = [
		{ num: "66 000 км", label: "ширина колец" },
		{ num: "5 м", label: "высота колец" },
		{ num: 63, label: "спутника" },
		{ num: "1610 год", label: "дата открытия" },
	];

	const Block = ({ info }) => {
		const { num, label } = info;
		return (
			<div className={styles.block}>
				<div className={styles.num}>{num}</div>
				<div className={styles.label}>{label}</div>
			</div>
		);
	};

	const location = useLocation();

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

	useEffect(() => {
		setSaturn_Overview_ref(reference);
	}, []);

	return (
		<div className={styles.section}>
			<div className={styles.wrapper}>
				<div className={styles.overview} ref={reference}>
					<p>сатурн - общий обзор</p>
				</div>
				<div className={styles.container}>
					<div className={styles.left}>
						<img draggable={false} src={image2} alt="saturn_atm2" />
						<img draggable={false} src={image1} alt="saturn_atm1" />
						<p className={styles.lefttext}>
							Шестиугольник Сатурна - не имеющий научного объяснения атмосферный феномен на планете Сатурн. При изучении вихря в
							инфракрасном диапазоне наблюдаются светлые участки.
						</p>
					</div>
					<div className={styles.right}>
						<div className={styles.stats}>
							{arr.map((e, i) => (
								<Block info={e} key={i} />
							))}
						</div>
						<div className={styles.topTitle}>Сатурн - шестая планета от Солнца и вторая по величине в нашей Солнечной системе. </div>
						<div className={styles.wrapBottom}>
							<div className={styles.leftBottom}>
								<p className={styles.textBottom}>
									Изучение гигантских шестиугольников началось после передачи снимков аппаратом Кассини. Шестиугольники были замечены после
									миссии Вояджеров, проходившей более четверти века назад. Это означает, что шестиугольник — устойчивое атмосферное
									образование.
								</p>
								<p className={styles.textBottom}>
									Кольца Сатурна — система плоских образований (до 5 метров) изо льда в плоскости Сатурна. Кольца названы латинскими буквами
									в порядке их открытия. Исследованы несколькими межпланетными станциями, особенно подробно — аппаратом «Кассини».
								</p>
							</div>
							<div
								className={styles.rightBottom}
								onClick={() => {
									Saturn_ToKnow_ref.current.scrollIntoView({ behavior: "smooth" });
								}}>
								<p className={styles.linkNextSection}>Далее - </p>
								<p className={styles.linkNextSection}>Интересные факты о Сатурне</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Saturn_Overview;

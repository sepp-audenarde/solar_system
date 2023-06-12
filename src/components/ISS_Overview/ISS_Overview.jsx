import React, { useEffect, useRef } from "react";
import styles from "./ISS_Overview.module.scss";
import { useGlobalContext } from "../../context/context";

const ISS_Overview = ({ reference }) => {
	const image1 = "images/iss.webp";

	const arr = [
		{ num: "90 мин", label: "полный оборот" },
		{ num: "460 тонн", label: "вес станции" },
		{ num: 14, label: "стран" },
		{ num: "1998", label: "год запуска" },
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

	useEffect(() => {
		setISS_Overview_ref(reference);
	}, []);

	return (
		<div className={styles.section}>
			<div className={styles.wrapper}>
				<div className={styles.overview} ref={reference}>
					<p>МКС — ОБЩИЙ ОБЗОР</p>
				</div>
				<div className={styles.container}>
					<div className={styles.left}>
						<img draggable={false} src={image1} alt="iss" />
						<p className={styles.lefttext}>
							Международная космическая станция совершает один полный оборот вокруг Земли каждые 90 минут. Благодаря этому ее экипаж каждые
							90 минут наблюдает восход Солнца. Ежесуточно люди на борту МКС видят по 16 восходов и по 16 закатов.
						</p>
					</div>
					<div className={styles.right}>
						<div className={styles.stats}>
							{arr.map((e, i) => (
								<Block info={e} key={i} />
							))}
						</div>
						<div className={styles.topTitle}>
							МКС — орбитальная станция, используемая как многоцелевой космический исследовательский комплекс.
						</div>
						<div className={styles.wrapBottom}>
							{/* <div className={styles.leftBottom}> */}
							<p className={styles.textBottom}>
								В каждом из 14 модулей находятся исследовательские лаборатории, хозяйственные помещения, склады, спальные места, тренажеры.
							</p>
							<p className={styles.textBottom}>
								Наружная обшивка космической станции оснащена солнечными батареями. Там же проходят научные исследования, которые требуют
								невесомости и вакуума. Для этого космонавт надевает специальный защитный костюм, за спиной которого находится баллон с
								кислородом.
							</p>
						</div>
						{/* </div> */}
						<div
							className={styles.rightBottom}
							onClick={() => {
								ISS_Tourism_ref.current.scrollIntoView({ behavior: "smooth" });
							}}>
							<p className={styles.linkNextSection}>Далее - </p>
							<p className={styles.linkNextSection}>О туристических полетах в космос</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ISS_Overview;

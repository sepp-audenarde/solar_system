import React, { useEffect, useState } from "react";
import styles from "./Home_Stats.module.scss";
import { useSpring, animated, useInView } from "@react-spring/web";

const Cell = ({ info }) => {
	const { num, header, text } = info;

	const [stateNum, setStateNum] = useState(0);

	const props = useSpring({
		val: stateNum,
		from: { val: 0 },
		config: { tension: 200, friction: 80 },
	});

	const [ref, isInView] = useInView({
		rootMargin: "0% 0px 0% 0px",
	});

	useEffect(() => {
		if (isInView) setStateNum(num);
		if (!isInView) setStateNum(0);
	}, [isInView]);

	return (
		<div className={styles.block}>
			<div className={styles.top}>
				<div className={styles.num}>
					<animated.div
						className={styles.number}
						onClick={() => {
							setStateNum(num + 50);
							setTimeout(() => {
								setStateNum(num);
							}, 500);
						}}
						ref={ref}>
						{props.val.to((val) => {
							let num = Number(parseFloat(Math.floor(val)).toFixed(2)).toLocaleString("en");
							return num;
						})}
					</animated.div>
				</div>
				<div className={styles.header}>{header}</div>
			</div>
			<div className={styles.bottom}>
				<div className={styles.bottomText}>{text}</div>
			</div>
		</div>
	);
};

const Home_Stats = () => {
	const intro = "Наша планетная система расположена во внешнем спиральном рукаве галактики Млечный Путь.";

	const arr = [
		{
			num: 8,
			header: "планет",
			text: "Внутренними планетами являются Меркурий, Венера, Земля и Марс. Внешними планетами являются Юпитер и Сатурн, Уран и Нептун.",
		},
		{
			num: 200,
			header: "спутников",
			text: "Луны, также известные как естественные спутники, вращаются вокруг планет и астероидов в нашей Солнечной системе.",
		},
		{
			num: 1113527,
			header: "астероидов",
			text: "Большинство из них расположено в главном поясе астероидов - области между орбитами Марса и Юпитера.",
		},
		{
			num: 5,
			header: "карликовых планет",
			text: "Это: - Церера, Плутон, Эрида, Макемаке, Хаумеа.",
		},
		{
			num: 3743,
			header: "комет",
			text: "Кометы - это замороженные остатки формирования Солнечной системы, состоящие из пыли, камней и льдов.",
		},
	];
	return (
		<div className={styles.section}>
			<div className={styles.wrapper}>
				<div className={styles.head}>СОЛНЕЧНАЯ СИСТЕМА</div>
				<div className={styles.table}>
					<div className={styles.block}>
						<div className={styles.intro}>{intro}</div>
					</div>
					{arr.map((e, i) => (
						<Cell key={i} info={e} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Home_Stats;

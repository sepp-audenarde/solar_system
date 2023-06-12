import React, { useEffect, useRef, useState } from "react";
import styles from "./Home_History.module.scss";

import { Wrap, History1, History2, History3, History4 } from "./History";

import { useGlobalContext } from "../../context/context";

const Date_History = ({ idx, info, changeDate, date }) => {
	const ref = useRef();
	const { year, events } = info;

	useEffect(() => {
		if (date === idx) {
			ref.current.classList.add([styles.active]);
		} else {
			ref.current.classList.remove([styles.active]);
		}
	}, [date]);

	const click = () => {
		changeDate(idx);
	};

	return (
		<div className={styles.date_history}>
			<div className={`${styles["btn-hover"]} ${styles["color-4"]} ${styles.circle}`} onClick={() => click()} ref={ref}>
				{year}
			</div>

			<div className={styles.list}>
				{events.map((e, i) => (
					<div className={styles.event} key={i}>
						{e}
					</div>
				))}
			</div>
		</div>
	);
};

const Home_History = () => {
	const vert = useRef();

	const { date, changeDate } = useGlobalContext();

	useEffect(() => {
		vert.current.style.height = `${date * 25}%`;
	}, [date]);

	const array = [
		{
			year: 1961,
			events: [
				"Первый пилотируемый полет",
				"Два орбитальных полета в СССР и два суборбитальных полета в США",
				"Рекорд длительности полета 25 часов 18 минут",
			],
		},
		{
			year: 1965,
			events: ["Первый выход в открытый космос", "Первые полет на двухместном космическом корабле"],
		},
		{
			year: 1967,
			events: [
				"Полет пилотируемого корабля 'Союз'",
				"Космонавт совершает два космических полета",
				"Первая гибель астронавта во время полета",
			],
		},
		{
			year: 1969,
			events: ["Первая высадка человека на Луну,", "Групповой полет трех космических кораблей", "Первая стыковка космических кораблей"],
		},
	];

	return (
		<div className={styles.section}>
			<div className={styles.wrapper}>
				<div
					className={styles.left}
					style={{
						transform: "scale(0.85)",
					}}>
					<Wrap>
						<History1 date={date} idx={0} />
					</Wrap>
					<Wrap>
						<History2 date={date} idx={1} />
					</Wrap>
					<Wrap>
						<History3 date={date} idx={2} />
					</Wrap>
					<Wrap>
						<History4 date={date} idx={3} />
					</Wrap>
				</div>

				<div className={styles.right} style={{ transform: "scale(0.85)" }}>
					{/* <div className={styles.header}>История полетов</div> */}
					<div className={styles.rightContainer}>
						<div className={styles.vert} ref={vert} />
						{array.map((e, i) => (
							<Date_History key={i} idx={i} changeDate={changeDate} date={date} info={e} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home_History;

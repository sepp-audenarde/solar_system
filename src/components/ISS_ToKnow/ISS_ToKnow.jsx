import React, { useEffect, useRef } from "react";

import styles from "./ISS_ToKnow.module.scss";
import { useGlobalContext } from "../../context/context";
import { useLocation } from "react-router-dom";

const ISS_ToKnow = ({ reference }) => {
	const arr = [
		{
			title: "Она на самом деле падает",
			text: "Скорость падения станции равна скорости, с которой она двигается вокруг Земли. Однако без работы двигателей станция упадет на Землю, т.к. ее тормозит атмосфера.",
		},

		{
			title: "Кому принадлежит МКС",
			text: "Международная космическая станция не принадлежит какой-то единственной нации. Она принадлежит США, России, Канаде, Японии и ряду европейский стран.",
		},
		{
			title: "Доставка припасов",
			text: "Беспилотные аппараты совершают полет в одну сторону и не могут вернуться обратно на Землю. Экипаж разгружает доставленные припасы, корабль отстыковывается и сгорает в атмосфре.",
		},
		{
			title: "Экипаж МКС много занимается",
			text: "Экипаж МКС постоянно теряет костную и мышечную массу. В результате некоторые члены экипажа могут терять до 1/4 части костной массы.",
		},
		{
			title: "На борту МКС есть оружие",
			text: "Обычно на борту Международной космической станции присутствует один или два пистолета. Они принадлежат космонавтам, но хранятся в «наборе выживания».",
		},
	];

	const Block = ({ info, idx }) => {
		const { title, text } = info;
		return (
			<div className={styles.block}>
				<div className={styles.num}>0{idx + 1}</div>
				<div className={styles.wrap}>
					<div className={styles.top}>{title}</div>
					<div className={styles.bottom}>{text}</div>
				</div>
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
	const location = useLocation();

	useEffect(() => {
		setISS_ToKnow_ref(reference);
	}, []);

	return (
		<div className={styles.section}>
			<div className={styles.wrapper}>
				<div className={styles.overview} ref={reference}>
					<p>Факты об мкс</p>
				</div>
				<div className={styles.container}>
					{arr.map((e, i) => (
						<Block key={i} info={e} idx={i} />
					))}
					<div
						className={styles.rightBottom}
						onClick={() => {
							ISS_Pop_ref.current.scrollIntoView({ behavior: "smooth" });
						}}>
						<p className={styles.linkNextSection}>Далее - </p>
						<p className={styles.linkNextSection}>О появлении Сатурна в популярной культуре</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ISS_ToKnow;

import React, { useEffect, useRef } from "react";
import styles from "./Saturn_ToKnow.module.scss";
import { useGlobalContext } from "../../context/context";
import { useLocation } from "react-router-dom";

const Saturn_ToKnow = ({ reference }) => {
	const arr = [
		{ title: "Огромный размер", text: "Внутри диаметра Сатурна можно расположить девять планет Земля." },
		{ title: "Времена года", text: "На Сатурне есть ярко выраженная смена времён года. Один сезон длится более семи земных лет." },
		{
			title: "В тусклом свете",
			text: "Из-за большой удаленности от Солнца до Сатурна доходит только 1% света, попадающего на Землю.",
		},
		{
			title: "Свободное падение",
			text: "Ускорение свободного падения на условной поверхности Сатурне почти равно земному — 9 м/с². Это происходит, т.к. радиус планеты в 10 раз больше радиуса Земли.",
		},
		{
			title: "Невооружённым глазом",
			text: "Сатурн — самая далёкая планета, которую можно увидеть с Земли невооружённым глазом.",
		},
		{
			title: "Сутки на Сатурне",
			text: "День на Сатурне короче земного. Он практически равен 10 часам. То есть обращается он вокруг своей оси в почти 2.5 раза быстрее.",
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
		setSaturn_ToKnow_ref(reference);
	}, []);

	return (
		<div className={styles.section}>
			<div className={styles.wrapper}>
				<div className={styles.overview} ref={reference}>
					<p>все что нужно знать о сатурне</p>
				</div>
				<div className={styles.container}>
					{arr.map((e, i) => (
						<Block key={i} info={e} idx={i} />
					))}
				</div>

				<div
					className={styles.rightBottom}
					onClick={() => {
						Saturn_Pop_ref.current.scrollIntoView({ behavior: "smooth" });
					}}>
					<p className={styles.linkNextSection}>Далее - </p>
					<p className={styles.linkNextSection}>О появлении Сатурна в популярной культуре</p>
				</div>
			</div>
		</div>
	);
};

export default Saturn_ToKnow;

import React, { useState } from "react";
import styles from "./Home_Slider.module.scss";
import { Link } from "react-router-dom";
const image = "https://place-hold.it/400x400";
import { baseUrl } from "../../App";

import { useGlobalContext } from "../../context/context";

const Slide = ({ info, idx, shift, setShift }) => {
	const style = {
		width: "400px",
	};

	const style2 = {
		borderRadius: "20px",
	};

	const style3 = {
		opacity: 0,
		marginTop: "-30px",
	};

	const style4 = {
		marginTop: "3px",
		fontSize: "10px",
		color: "rgb(185, 185, 185)",

		overflow: "hidden",
		whiteSpace: "nowrap",
		textOverflow: "ellipsis",
	};

	const cursor = {
		cursor: "pointer",
	};

	const opacity = {
		opacity: 0,
	};

	const { pic, header, list, link, hash } = info;

	return (
		<div className={styles.element} style={idx === shift ? style : cursor} onClick={() => setShift(idx)}>
			<div className={styles.imgContainer} style={idx === shift ? style2 : null}>
				<img draggable={false} src={pic} alt="_pic" />
			</div>
			<div className={styles.texts}>
				<div className={styles.header} style={idx !== shift ? style3 : null}>
					{header}
				</div>
				<div className={styles.list}>
					{list.map((e, i) => (
						<div key={i} className={styles.elemText} style={idx !== shift ? style4 : null}>
							{e}
						</div>
					))}
				</div>
				<div className={styles.button} style={idx !== shift ? opacity : null}>
					<Link
						to={{
							pathname: baseUrl + link,
						}}
						state={hash}
						onClick={() => {
							window.scrollTo({
								top: 0,
								left: 0,
							});
						}}>
						Узнать больше
					</Link>
				</div>
			</div>
		</div>
	);
};

const Home_Slider = () => {
	const [shift, setShift] = useState(1);

	const style = {
		transform: `translateX(${450 - 225 * shift}px)`,
	};

	const lorem1 = "Lorem, ipsum dolor.";
	const lorem2 = "Lorem ipsum dolor sit amet consectetur.";
	const lorem3 = "Lorem ipsum dolor sit, amet consectetur adipisicing.";

	const image1 = "images/saturn1.webp";
	const image2 = "images/saturn2.webp";
	const image3 = "images/saturn3.webp";
	const image4 = "images/iss1.webp";
	const image5 = "images/iss2.webp";
	const image6 = "images/iss3.webp";

	const arrow = "images/arrow.webp";

	const slides = [
		{
			pic: image1,
			text: "",
			link: "/saturn",
			hash: "Saturn_ToKnow_ref",
			header: "Факты о сатурне",
			list: [
				"Сатурн - шестая планета по удаленности от Солнца планета.",
				"Плотность Сатурна крайне мала, она меньше плотности воды.",
				"Плотность остальных газовых гигантов значительно больше.",
			],
		},

		{
			pic: image2,
			text: "",
			link: "/saturn",
			hash: "Saturn_Rings_ref",
			header: "Кольца Сатурна",
			list: [
				"Кольца Сатурна наблюдал Галилей ещё в 1610 году.",
				"Каждое из них имеет свой цвет, плотность и размер.",
				"Самая крупная щель между кольцами – щель Энке (325 км)",
			],
		},
		{
			pic: image3,
			text: "",
			link: "/saturn",
			hash: "Saturn_Overview_ref",
			header: "Гексагон Сатурна",
			list: [
				"Гигантский шестиугольник — атмосферный феномен на Сатурне.",
				"Структура вращается вместе с глубокими слоями атмосферы.",
				"Предполагается, что его формируют вихри внутри атмосферы.",
			],
		},
		{
			pic: image4,
			text: "",
			link: "/iss",
			hash: "ISS_Overview_ref",
			header: "Модули мкс",
			list: ["МКС – международный проект, в котором участвуют 14 стран.", "На декабрь 2023 года в состав МКС входит 15 модулей"],
		},
		{
			pic: image5,
			text: "",
			link: "/iss",
			hash: "ISS_Tourism_ref",
			header: "Космический туризм",
			list: [
				"Космический туризм — новая развивающаяся сфера.",
				"Средняя стоимость космического полета — $30 млн.",
				"Полеты делятся на орбитальные и суборбитальные.",
			],
		},
	];

	const move = (dir) => {
		setShift((prev) => {
			if (prev + dir === -1) return slides.length - 1;
			if (prev + dir === slides.length) return 0;
			return prev + dir;
		});
	};

	return (
		<div className={styles.section}>
			<div className={styles.wrapper}>
				<div className={styles.container} >
					<div className={styles.top}>
						<div className={styles.options}>СТАТЬИ</div>
						<div className={styles.arrows}>
							<div className={styles.arrowLeft} onClick={() => move(-1)}>
								<img draggable={false} src={arrow} alt="" />
							</div>
							<div className={styles.idx}>{`${shift + 1}/${slides.length}`}</div>
							<div className={styles.arrowRight} onClick={() => move(1)}>
								<img draggable={false} src={arrow} alt="" />
							</div>
						</div>
					</div>
					<div className={styles.bottom}>
						<div className={styles.slider} style={style}>
							{slides.map((e, i) => (
								<Slide key={i} idx={i} shift={shift} info={e} setShift={setShift} />
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home_Slider;

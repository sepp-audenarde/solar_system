import React, { useState, useEffect, useRef } from "react";
import styles from "./Home_Exposition.module.scss";
import { useSpring, animated, useInView } from "@react-spring/web";

import { Solar, Rings, Planet } from "./Scene";

const Elem = ({ info, idx }) => {
	const style = {
		justifyContent: idx % 2 ? "flex-end" : "flex-start",
	};

	const [ref, isInView] = useInView({
		rootMargin: "15% 0px 15% 0px",
	});

	const ballAnimate = useRef();

	const [isActive, setIsActive] = useState(true);
	const scene = useRef();

	useEffect(() => {
		scene.current.style.transform = "translate(-50%, -50%) scale(0)";
	}, []);

	const bigZone = useRef();

	function click() {
		setIsActive((p) => !p);
		if (isActive) {
			ballAnimate.current.style.opacity = 0;

			scene.current.style.transform = "translate(-50%, -100%) scale(1)";
		} else {
			ballAnimate.current.style.opacity = 1;

			scene.current.style.transform = "translate(-50%, -50%) scale(0)";
		}
	}

	useEffect(() => {
		let timeout;
		if (!isActive) {
			timeout = setTimeout(() => {
				setIsActive((p) => !p);

				ballAnimate.current.style.opacity = 1;
				scene.current.style.transform = "translate(-50%, -50%) scale(0)";
			}, 8000);
		}
		return () => clearTimeout(timeout);
	}, [isActive]);

	function leave() {
		console.log("first");
		setIsActive((p) => !p);

		bigZone.current.style.pointerEvents = "none";
		ballAnimate.current.style.opacity = 1;

		bigZone.current.style.pointerEvents = "none";
		scene.current.style.transform = "translate(-50%, -50%) scale(0)";
	}

	useEffect(() => {
		if (isInView) {
			ref.current.style.transform = idx % 2 ? "translateX(0)" : "translateX(0)";
			ref.current.style.opacity = 1;
		} else {
			ref.current.style.transform = idx % 2 ? "translateX(100px)" : "translateX(-100px)";
			ref.current.style.opacity = 0;
		}
	}, [isInView]);

	return (
		<div className={styles.stripe} style={style} ref={ref}>
			<div className={styles.container} style={{ flexDirection: idx % 2 === 0 ? "row" : "row-reverse" }}>
				<div className={styles.texts}>
					<div className={styles.header}>{info.header}</div>
					<div className={styles.sub}>{info.sub}</div>
				</div>
				<div className={styles.line}>
					<div className={styles.scene} style={{ zIndex: 1 }} ref={scene}>
						{idx === 0 ? <Solar idx={idx} /> : null}
						{idx === 1 ? <Rings idx={idx} key={1} /> : null}
						{idx === 2 ? <Planet idx={idx} /> : null}
					</div>
					<div className={styles.zone} onClick={() => click()}></div>
					{/* <div className={styles.bigZone} onPointerLeave={() => leave()} ref={bigZone}></div> */}
					<div className={styles.ball}></div>
					<div className={styles.ballAnimate} ref={ballAnimate}></div>
					<div className={styles.vert}></div>
				</div>
			</div>
		</div>
	);
};

const Home_Exposition = () => {
	const arr = [
		{
			header: "СОЛНЕЧНАЯ СИСТЕМА",
			sub: "Наша планетарная система, которая состоит из Солнца и восьми планет",
		},
		{
			header: "КОЛЬЦА ПЛАНЕТ",
			sub: "Скопление множества кусочков льда и небольших камней вокруг некоторых планет",
		},
		{
			header: "ПЛАНЕТЫ",
			sub: "Массивные небесные тела, вращающиеся вокруг звезды. ",
		},
	];

	return (
		<div className={styles.section}>
			<div className={styles.wrapper}>
				{arr.map((e, i) => (
					<Elem key={i} idx={i} info={e} />
				))}
			</div>
		</div>
	);
};

export default Home_Exposition;

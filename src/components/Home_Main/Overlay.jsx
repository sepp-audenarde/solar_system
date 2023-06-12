import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { planets } from "../../context/data";

import { useGlobalContext } from "../../context/context";

import styles_1 from "./Home_Main.module.scss";
import styles_2 from "./Home_Main_2.module.scss";
import styles_3 from "./Arrow.module.scss";
import styles from "./Overlay.module.scss";
import { useTop } from "../../context/customHooks";
import { useLocation } from "react-router-dom";

import { state } from "../../context/valtio";
import { useSnapshot } from "valtio";

import { baseUrl } from "../../App";

const Home_Main = ({ down, style }) => {
	const { planet, changePlanet, scrollPlanet, secondScreen, free, setTransit, transit, go, сontainer, setContainer, clickPlanet } =
		useGlobalContext();

	const ref = useRef();
	const leftButton = useRef();
	const rightButton = useRef();

	useEffect(() => {
		setContainer(ref);
	}, []);

	useEffect(() => {
		if (transit) return;
		if (planet === scrollPlanet) return;

		if (free) return;
		setTransit(true);

		let interval;
		let timer;
		let payload = scrollPlanet > planet ? 1 : -1;
		let cur = planet;

		cur += payload;

		ref.current.style.opacity = 0;

		leftButton.current.style.pointerEvents = "none";
		rightButton.current.style.pointerEvents = "none";

		timer = setTimeout(() => {
			changePlanet(payload);

			ref.current.style.opacity = 1;

			leftButton.current.style.pointerEvents = "auto";
			rightButton.current.style.pointerEvents = "auto";

			if (scrollPlanet === cur) {
				clearInterval(interval);
				setTransit(false);
			}
		}, 800);

		state.activePlanetIdx += payload;

		if (scrollPlanet === cur) {
			clearInterval(interval);
			setTransit(false);

			return () => {
				clearInterval(interval);
				clearTimeout(timer);
				setTransit(false);
			};
		}

		interval = setInterval(() => {
			cur += payload;

			ref.current.style.opacity = 0;

			leftButton.current.style.pointerEvents = "none";
			rightButton.current.style.pointerEvents = "none";
			timer = setTimeout(() => {
				changePlanet(payload);

				ref.current.style.opacity = 1;

				leftButton.current.style.pointerEvents = "auto";
				rightButton.current.style.pointerEvents = "auto";

				state.activePlanetIdx = planet;

				if (scrollPlanet === cur) {
					clearInterval(interval);
					setTransit(false);
				}
			}, 800);

			state.activePlanetIdx += payload;

			if (scrollPlanet === cur) {
				clearInterval(interval);
				setTransit(false);
			}
		}, 1500);

		return () => {
			clearInterval(interval);
			clearTimeout(timer);
			setTransit(false);
		};
	}, [scrollPlanet, go]);

	useEffect(() => {
		state.activePlanetIdx = planet;
	}, [planet]);

	let styleContainer, styleTexts;

	if (style) {
		[styleContainer, styleTexts] = style;
	}

	return (
		<div className={styles_1.section} style={styleContainer}>
			<div className={styles_1.wrapper}>
				<div className={styles_1.container} ref={ref}>
					<div className={styles_1.left}>
						<div
							className={styles_1.leftText}
							style={styleTexts}
							onClick={(e) => {
								if (!transit) clickPlanet(-1);
							}}
							ref={leftButton}>
							<p style={styleTexts}>{(planets[planet - 1] || []).name}</p>
							{/* {planets[planet - 1] && <div className={styles_1.clickerLeft}></div>} */}
						</div>
					</div>

					<div className={styles_1.center}>
						<div className={styles_1.type}>{planets[planet]?.type}</div>
						<div className={styles_1.name}>{planets[planet]?.name}</div>
						<div className={styles_1.line} />
						<div className={styles_1.annotation}>{planets[planet]?.mini_description}</div>
						{/* {planets[planet].view && <div className={styles_1.getStarted}>начать обзор</div>} */}
					</div>

					<div className={styles_1.right}>
						<div
							className={styles_1.rightText}
							style={styleTexts}
							onClick={(e) => {
								if (!transit) clickPlanet(1);
							}}
							ref={rightButton}>
							<p style={styleTexts}>{(planets[planet + 1] || [])?.name}</p>
							{/* {planets[planet + 1] && <div className={styles_1.clickerRight}></div>} */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const Home_Main_2 = ({ style }) => {
	const ref = useRef();
	const information = useRef();
	const stats = useRef();
	const snap = useSnapshot(state);

	const { planet, secondScreen, firstScreen, free, transit, setTransit, scrollPlanet } = useGlobalContext();

	const current = planets[planet];

	useEffect(() => {
		let timer;
		if (secondScreen) {
			stats.current.style.opacity = 0;
			stats.current.style.pointerEvents = "none";

			timer = setTimeout(() => {
				information.current.style.opacity = 1;
				information.current.style.pointerEvents = "auto";
			}, 800);
		}
		if (!secondScreen) {
			stats.current.style.opacity = 0;
			stats.current.style.pointerEvents = "none";

			timer = setTimeout(() => {
				information.current.style.pointerEvents = "none";
				information.current.style.opacity = 1;
			}, 800);
		}
		return () => clearTimeout(timer);
	}, [secondScreen, firstScreen, free]);

	function clickInformation() {
		information.current.style.opacity = 0;
		information.current.style.pointerEvents = "none";

		setTransit(true);

		setTimeout(() => {
			stats.current.style.opacity = 1;
			stats.current.style.pointerEvents = "auto";
			setTransit(false);
		}, 800);
	}

	function clickStats() {
		stats.current.style.opacity = 0;
		stats.current.style.pointerEvents = "none";

		setTransit(true);

		setTimeout(() => {
			information.current.style.opacity = 1;
			information.current.style.pointerEvents = "auto";
			setTransit(false);
		}, 800);
	}

	useEffect(() => {
		ref.current.style.transition = "none";
		ref.current.style.opacity = "0";
		setTimeout(() => {
			ref.current.style.transition = "all 1s ease";
		}, 10);
	}, []);

	const location = useLocation();

	useEffect(() => {
		information.current.style.opacity = 0;

		stats.current.style.opacity = 0;
		stats.current.style.pointerEvents = "none";

		let timer = setTimeout(() => {
			if (secondScreen) {
				information.current.style.opacity = 1;
				information.current.style.pointerEvents = "auto";
			}
		}, 750);

		return () => {
			clearTimeout(timer);
			// console.log(baseUrl + "/");

			if (location.pathname !== baseUrl + "/") {
				information.current.style.opacity = 0;
				information.current.style.pointerEvents = "none";
				stats.current.style.opacity = 0;
				stats.current.style.pointerEvents = "none";
			}
		};
	}, [snap.activePlanetIdx]);

	return (
		<div className={styles_2.section} ref={ref} style={style}>
			<div className={styles_2.wrapper}>
				{/* <Stats /> */}
				{/* <Information /> */}

				<div className={styles_2.container} ref={information}>
					<div className={styles_2.title}>{planets[planet]?.title}</div>
					<div className={styles_2.name}>{planets[planet]?.name}</div>
					<div className={styles_2.line} />
					<div className={styles_2.description}>{planets[planet]?.description}</div>
					<div className={styles_2.more} onClick={() => clickInformation()}>
						— Узнать больше
					</div>
				</div>

				<div className={styles_2.stats} ref={stats}>
					<div className={styles_2.planet}>Орбитальные характеристики</div>
					<div className={styles_2.line}></div>
					<div className={styles_2.columns}>
						<div className={styles_2.left}>
							<div className={styles_2.point}>Перигелий </div>
							<div className={styles_2.point}>Афелий </div>
							<div className={styles_2.point}>Период обращения</div>
							<div className={styles_2.point}>Радиус</div>
							<div className={styles_2.point}>Масса</div>
							<div className={styles_2.point}>Ускорение свободного падения</div>
							<div className={styles_2.point}>Период вращения</div>
						</div>
						<div className={styles_2.right}>
							<div className={styles_2.stat}>{current.perihelion}</div>
							<div className={styles_2.stat}>{current.aphelion}</div>
							<div className={styles_2.stat}>{current.period}</div>
							<div className={styles_2.stat}>{current.radius}</div>
							<div className={styles_2.stat}>
								{current.mass[0]}*10<b className={styles_2.overline}>{current.mass[1]}</b>кг
							</div>
							<div className={styles_2.stat}>
								{current.acceleration} м/с<b className={styles_2.overline}>2</b>
							</div>
							<div className={styles_2.stat}>{current.rotation}</div>
						</div>
					</div>

					<div className={styles_2.less} onClick={() => clickStats()}>
						— Назад
					</div>
				</div>
			</div>
		</div>
	);
};

const Arrow = ({ down, style }) => {
	const arrow = "images/arrowDown.webp";
	const { firstScreen, setFree, transit } = useGlobalContext();

	function clickArrow() {
		if (transit) return;
		if (firstScreen) {
			down();
		} else {
			setFree(true);
			document.body.classList.remove("disableScroll");

			const screenHeight = window.screen.height;
			window.scrollBy({
				top: screenHeight,
				left: 0,
				behavior: "smooth",
			});
		}
	}
	return (
		<div className={styles_3.arrowWrap} onClick={() => clickArrow()} style={style}>
			<div className={styles_3.arrowDown}>
				<img draggable={false} src={arrow} alt="" />
			</div>
		</div>
	);
};

const ArrowUP = ({ up }) => {
	const arrow = "images/arrow_up.webp";
	const { secondScreen, setFree, transit } = useGlobalContext();

	const arrowRef = useRef();

	function clickArrow() {
		if (transit) return;
		if (secondScreen) {
			up();
		}
	}

	useEffect(() => {
		if (secondScreen) {
			arrowRef.current.style.pointerEvents = "auto";
			arrowRef.current.style.opacity = 0.7;
			arrowRef.current.style.cursor = "pointer";
		} else {
			arrowRef.current.style.pointerEvents = "none";
			arrowRef.current.style.opacity = 0;
		}
	}, [secondScreen]);

	return (
		<div
			className={styles_3.arrowWrapUp}
			onClick={() => clickArrow()}
			//
		>
			<div className={styles_3.arrowUp} ref={arrowRef}>
				<img draggable={false} src={arrow} alt="" />
			</div>
		</div>
	);
};

export const Overlay = () => {
	const {
		setFirstScreen,
		setSecondScreen,
		setFree,
		firstScreen,
		secondScreen,
		free,
		scrollEvent,
		transit,

		setTransit,
	} = useGlobalContext();

	const location = useLocation();

	useEffect(() => {
		state.firstScreen = true;
		state.secondScreen = false;
		setFirstScreen(true);
		setSecondScreen(false);
		setFree(false);

		return () => {
			state.firstScreen = true;
			state.secondScreen = false;
			setFirstScreen(true);
			setSecondScreen(false);
			setFree(false);
		};
	}, []);

	useEffect(() => {
		const val = scrollEvent.deltaY;

		if (transit) {
			document.body.classList.add("disableScroll");
		} else {
		}
		if (transit) return;

		if (firstScreen && window.pageYOffset === 0 && val === -100) {
			document.body.classList.add("disableScroll");
		}

		if (!firstScreen && !secondScreen && window.pageYOffset === 0 && val === -100) {
			setSecondScreen(true);
			return;
		}

		if (firstScreen && !secondScreen && window.pageYOffset === 0 && val === 100) {
			document.body.classList.add("disableScroll");

			down();
			return;
		}

		if (!firstScreen && secondScreen && window.pageYOffset === 0 && val === -100) {
			document.body.classList.add("disableScroll");
			up();
			return;
		}

		if (!free && window.pageYOffset === 0 && val === 100) {
			setTimeout(() => {
				document.body.classList.remove("disableScroll");
				setFree(true);
			}, 1000);

			return;
		}

		if (free && window.pageYOffset === 0 && val === -100) {
			setFirstScreen(false);
			setSecondScreen(true);
			setFree(false);
			return;
		}
	}, [scrollEvent]);

	useEffect(() => {
		if (location.pathname === baseUrl + "/" && window.pageYOffset === 0) {
			document.body.classList.add("disableScroll");
		}

		if (firstScreen && location.pathname === baseUrl + "/") {
			state.firstScreen = true;
			state.secondScreen = false;
			document.body.classList.add("disableScroll");
		}

		if (secondScreen && location.pathname === baseUrl + "/") {
			state.firstScreen = false;
			state.secondScreen = true;
		}

		if (free && location.pathname === baseUrl + "/") {
			state.firstScreen = false;
			state.secondScreen = true;
			document.body.classList.remove("disableScroll");
		}

		if (location.pathname !== baseUrl + "/") {
			state.firstScreen = true;
			state.secondScreen = false;

			setFirstScreen(true);
			setSecondScreen(false);
			setFree(false);
		}
	}, [firstScreen, secondScreen, free]);

	useEffect(() => {
		if (firstScreen && window.pageYOffset > 0) {
			setTimeout(() => {
				window.scrollTo({
					top: 0,
					left: 0,
					behavior: "smooth",
				});
			}, 0);
		}
	}, [firstScreen, secondScreen, free, location, scrollEvent]);

	function down() {
		setFirstScreen(false);

		setSecondScreen(true);
	}

	function up() {
		setFirstScreen(true);
		setSecondScreen(false);
		setFree(false);
		document.body.classList.add("disableScroll");
	}

	const style1 = {
		opacity: 1,
		pointerEvents: "auto",
		transform: "translateY(0px)",
	};
	const style2 = {
		opacity: 0,
		pointerEvents: "none",
		transform: "translateY(100px)",
		transitionDelay: "0s",
	};

	const style3 = {
		opacity: 0,

		transform: "translateY(-100px)",
	};
	const style4 = {
		opacity: 1,

		transform: "translateY(0px)",
		transitionDelay: "0.7s",
	};

	const style3_1 = {
		pointerEvents: "none",
	};

	const style4_1 = {
		pointerEvents: "auto",
	};

	const style5 = {
		opacity: 1,
		pointerEvents: "auto",
	};
	const style6 = {
		opacity: 0,
		pointerEvents: "none",
	};

	useEffect(() => {
		if (location.pathname === baseUrl + "/") {
			document.body.classList.add("disableScroll");
		}
		return () => {
			if (location.pathname !== baseUrl + "/") {
				state.firstScreen = true;
				state.secondScreen = false;

				setFirstScreen(true);
				setSecondScreen(false);
				setFree(false);
			}
		};
	}, [firstScreen, secondScreen, free, location]);

	useEffect(() => {
		if (free) document.body.classList.remove("disableScroll");
	}, [free]);

	useEffect(() => {
		if (location.pathname === baseUrl + "/") {
			setTimeout(() => {
				window.scrollTo({
					top: 0,
					left: 0,
					behavior: "instant",
				});
			}, 0);

			setTimeout(() => {
				window.scrollTo({
					top: 0,
					left: 0,
					behavior: "instant",
				});
			}, 30);

			setTimeout(() => {
				document.body.classList.add("disableScroll");
			}, 0);

			setTimeout(() => {
				setFirstScreen(true);
				setSecondScreen(false);
				setFree(false);
			}, 0);

			useTop();
		}

		setTimeout(() => {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: "instant",
			});
		}, 0);
	}, [location]);

	useEffect(() => {
		setTimeout(() => {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: "instant",
			});
		}, 250);
	}, []);

	return (
		<div className={styles.section}>
			<Home_Main style={firstScreen ? [style4, style4_1] : [style3, style3_1]} />
			<Home_Main_2 style={secondScreen ? style1 : style2} />
			<Arrow down={down} style={window.pageYOffset === 0 ? style5 : style6} />
			<ArrowUP up={up} />
		</div>
	);
};

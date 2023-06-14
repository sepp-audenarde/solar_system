import React, { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.scss";

import { useGlobalContext } from "../../context/context";
import { state } from "../../context/valtio";
import { useSnapshot } from "valtio";

import { useHide, useTop, useUnblock } from "../../context/customHooks";
import { Link, useLocation } from "react-router-dom";

import guest from "/images/i2.webp";

import { avatars } from "../../context/data";
import { baseUrl } from "../../App";

const Navbar = () => {
	const snap = useSnapshot(state);
	const { activePlanetIdx: planet } = snap;
	const {
		scrollToPlanet,
		setTransit,
		transit,
		secondScreen,
		free,
		firstScreen,
		planet: contextPlanet,
		isFirstPage,
		setFirstScreen,
		setSecondScreen,
		setFree,
		user,
		setReg,
	} = useGlobalContext();

	const planets = ["Меркурий", "Венера", "Земля", "Луна", "Марс", "Юпитер", "Сатурн", "Уран", "Нептун"];

	const ref = useRef();
	const list = useRef();
	const [tempBlock, setTempBlock] = useState(false);

	useHide(list, [isFirstPage]);

	function click(i) {
		if (tempBlock) return;
		if (transit) return;
		if (planet === i) return;

		setTempBlock(true);

		if (i + 2 === planet || i - 2 === planet) {
			setTimeout(() => {
				setTempBlock(false);
			}, 2500);
		} else {
			setTimeout(() => {
				setTempBlock(false);
			}, 1000);
		}

		if (firstScreen) {
			setFirstScreen(true);
			setSecondScreen(false);
			setFree(false);
		}

		if (secondScreen) {
			setFirstScreen(false);
			setSecondScreen(true);
			setFree(false);
		}

		setTimeout(() => {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: "smooth",
			});
		}, 0);

		if (!transit && !free && (firstScreen || secondScreen)) {
			scrollToPlanet(i);
		}
	}

	// useEffect(() => {
	// 	console.log({ transit });
	// }, [transit]);

	useEffect(() => {
		if (planet === 0) ref.current.style.left = "296px";
		if (planet === 1) ref.current.style.left = "204px";
		if (planet === 2) ref.current.style.left = "127px";
		if (planet === 3) ref.current.style.left = "61px";
		if (planet === 4) ref.current.style.left = "-5px";

		if (planet === 5) ref.current.style.left = "-81px";
		if (planet === 6) ref.current.style.left = "-165px";
		if (planet === 7) ref.current.style.left = "-237px";
		if (planet === 8) ref.current.style.left = "-308px";
	}, [planet]);

	const wrapper = useRef();
	useEffect(() => {
		if (transit) {
			wrapper.current.style.pointerEvents = "none";
		} else {
			// setTimeout(() => {
			// console.log("me");

			if (!transit) wrapper.current.style.pointerEvents = "auto";
			// }, 800);
		}
	}, [transit]);

	const location = useLocation();
	const reg = useRef();

	useHide(reg, [location.pathname !== baseUrl + "/profile", !user]);

	return (
		<div className={styles.section}>
			<div className={styles.wrapper} ref={wrapper}>
				<div className={styles.name}>
					<Link
						to={baseUrl + "/"}
						onClick={() => {
							useUnblock();
							useTop();
						}}>
						SOL
					</Link>

					<div className={styles.registration}>
						<Link
							to={baseUrl + "/profile"}
							onClick={() => {
								useUnblock();
								useTop();
								setReg(true);
							}}>
							<div className={styles.user}>
								<div className={styles.avatar}>
									<img draggable={false} src={!user ? guest : avatars[+user.avatar[user.avatar.length - 1]]} alt="userpic" />
								</div>
								<div className={styles.username}>{!user ? "Гость" : user.name}</div>
							</div>
						</Link>
						<div className={styles.links} ref={reg}>
							{location.pathname !== baseUrl + "/profile" && !user ? (
								<div
									className={styles.login}
									style={{
										pointerEvents: transit ? "none" : "auto",
									}}>
									<Link
										to={baseUrl + "/profile"}
										onClick={() => {
											console.log("link");

											useUnblock();
											useTop();
											setReg(false);
										}}>
										Войти
									</Link>
								</div>
							) : null}
						</div>
					</div>
				</div>

				<div className={styles.list1} ref={list}>
					<div className={styles.listPlanets} ref={ref}>
						{planets.map((e, i) => (
							<div
								className={styles.planet1}
								key={i}
								children={e}
								onClick={() => click(i)}
								style={
									i + 3 <= planet || i - 3 >= planet
										? {
												opacity: 0,
												pointerEvents: "none",
										  }
										: {
												opacity: 1,
												pointerEvents: "auto",
										  }
								}
							/>
						))}
					</div>
					<div className={styles.line1}>
						<div className={styles.lineWhite1}>{planets[planet]}</div>
					</div>
				</div>

				<div className={styles.menu}>
					<div className={styles.elem}>
						<Link
							to={baseUrl + "/saturn"}
							onClick={() => {
								useUnblock();
								useTop();
							}}>
							Сатурн
						</Link>
					</div>
					<div className={styles.elem}>|</div>
					<div className={styles.elem}>
						<Link
							to={baseUrl + "/iss"}
							onClick={() => {
								useUnblock();
								useTop();
							}}>
							МКС
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;

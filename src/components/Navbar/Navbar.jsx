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

		setTempBlock(true);
		setTimeout(() => {
			setTempBlock(false);
		}, 1000);

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

	useEffect(() => {
		if (planet === 0) ref.current.style.left = "4px";
		if (planet === 1) ref.current.style.left = "95px";
		if (planet === 2) ref.current.style.left = "172px";
		if (planet === 3) ref.current.style.left = "238px";
		if (planet === 4) ref.current.style.left = "304px";

		if (planet === 5) ref.current.style.left = "381px";
		if (planet === 6) ref.current.style.left = "464px";

		if (planet === 7) ref.current.style.left = "536px";
		if (planet === 8) ref.current.style.left = "607px";
	}, [planet]);

	const wrapper = useRef();
	useEffect(() => {
		if (transit) {
			wrapper.current.style.pointerEvents = "none";
		} else {
			setTimeout(() => {
				wrapper.current.style.pointerEvents = "auto";
			}, 800);
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
								<div className={styles.login}>
									<Link
										to={baseUrl + "/profile"}
										onClick={() => {
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
				<div className={styles.list} ref={list}>
					{planets.map((e, i) => (
						<div className={styles.planet} key={i} children={e} onClick={() => click(i)} />
					))}
					<div className={styles.line} ref={ref}>
						<div className={styles.lineWhite}>{planets[planet]}</div>
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

import React from "react";
import styles from "./Footer.module.scss";
import { Link, useLocation } from "react-router-dom";
import { useTop } from "../../context/customHooks";
import { baseUrl } from "../../App";

const Footer = () => {
	const location = useLocation();

	return (
		<div className={styles.section}>
			<div className={styles.wrapper}>
				<div className={styles.container}>
					<div className={styles.left}>
						{location.pathname !== baseUrl + "/" && (
							<div className={styles.home}>
								<Link
									onClick={() =>
										window.scrollTo({
											top: 0,
											left: 0,
											behavior: "smooth",
										})
									}
									to={baseUrl + "/"}>
									НА ГЛАВНУЮ
								</Link>
							</div>
						)}
						<div className={styles.articles}>Избранные статьи:</div>
						<div className={styles.article}>
							<Link
								onClick={() =>
									window.scrollTo({
										top: 0,
										left: 0,
										behavior: "smooth",
									})
								}
								to={baseUrl + "/saturn"}>
								Сатурн
							</Link>
						</div>
						<div className={styles.article}>
							<Link
								onClick={() =>
									window.scrollTo({
										top: 0,
										left: 0,
										behavior: "smooth",
									})
								}
								to={baseUrl + "/iss"}>
								МКС
							</Link>
						</div>
					</div>
					<div className={styles.right}>
						<div className={styles.wrap}>
							<div className={styles.link}>
								<a target="_blank" href="https://www.behance.net/krdimitry">
									Behance
								</a>
							</div>
							<div className={styles.link}>
								<a target="_blank" href="https://github.com/sepp-audenarde">
									Github
								</a>
							</div>
						</div>
						{/* <div className={styles.about}>О проекте</div> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;

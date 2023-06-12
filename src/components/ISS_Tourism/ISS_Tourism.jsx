import React, { useEffect, useRef } from "react";

import styles from "./ISS_Tourism.module.scss";
import { useGlobalContext } from "../../context/context";

const ISS_Tourism = ({ reference }) => {
	const image1 = "images/space_x.webp";
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

	useEffect(() => {
		setISS_Tourism_ref(reference);
	}, [window.pageYOffset, location]);

	return (
		<div className={styles.section}>
			<div className={styles.wrapper}>
				<div className={styles.container} ref={reference}>
					<div className={styles.left}>
						<div className={styles.overview}>
							<p>Туристические полеты</p>
						</div>
						<div className={styles.topTitle}>
							Все больше коммерческих компаний начинают развивать космический туризм. <br />
							Среди них Blue Origin, Space X и Virgin Galactic
						</div>
						<div className={styles.wrapBottom}>
							<p className={styles.textBottom}>
								Космический туризм предоставляет шанс человеку, не имеющего отношения к профессиональной подготовке космонавта, совершить
								полет за орбиту Земли. Космические туристы - состоятельные люди, готовые оплатить десятки миллионов долларов за возможность
								отправиться за пределы Земли.
							</p>
							<p className={styles.textBottom}>
								Началом космического туризма был полёт бизнесмена Денниса Тито. Вторым космическим туристом был бизнесмен из ЮАР Марк
								Шаттлворт.
								<br /> В настоящее время единственной используемой целью космического туризма является МКС.
							</p>
						</div>
						<div
							className={styles.bottom}
							onClick={() => {
								ISS_ToKnow_ref.current.scrollIntoView({ behavior: "smooth" });
							}}>
							<p className={styles.linkNextSection}>Далее - </p>
							<p className={styles.linkNextSection}>Интеренсные факты об МКС </p>
						</div>
					</div>
					<div className={styles.right}>
						<img draggable={false} src={image1} alt="cassini_in_clouds" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default ISS_Tourism;

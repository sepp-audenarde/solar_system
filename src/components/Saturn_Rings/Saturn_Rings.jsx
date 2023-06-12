import React, { useEffect, useRef } from "react";

import styles from "./Saturn_Rings.module.scss";
import { useGlobalContext } from "../../context/context";
import { Link } from "react-router-dom";
import { baseUrl } from "../../App";

const Saturn_Rings = ({ reference }) => {
	const image1 = "images/cassini_in_clouds.webp";

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
		setSaturn_Rings_ref(reference);
	}, []);

	return (
		<div className={styles.section}>
			<div className={styles.wrapper}>
				<div className={styles.container} ref={reference}>
					<div className={styles.left}>
						<div className={styles.overview}>
							<p>Уникальная планета</p>
						</div>
						<div className={styles.topTitle}>
							Сатурн - не единственная планета, у которой есть кольца, но его кольца определенно самые красивые.
						</div>
						<div className={styles.wrapBottom}>
							<p className={styles.textBottom}>
								Кольца, которые мы видим, состоят из групп крошечных колечек, окружающих Сатурн, они сделаны из кусков льда и камня. Как и
								Юпитер, Сатурн в основном представляет собой шар из водорода и гелия.
							</p>
							<p className={styles.textBottom}>
								Когда Галилео Галлей увидел Сатурн в телескоп в 1600-х годах. он не был уверен в том, что видит. Сначала он подумал, что
								смотрит на три планеты или планету с ответвлениями, теперь мы знаем, что эти "ветви" оказались кольцами Сатурна.
							</p>
						</div>
						<div className={styles.bottom}>
							<Link
								to={baseUrl + "/iss"}
								onClick={() => {
									setTimeout(() => {
										window.scrollTo({
											top: 0,
											left: 0,
											behavior: "smooth",
										});
									}, 0);
								}}>
								<p className={styles.linkNextSection}>Следующая страница - </p>
								<p className={styles.linkNextSection}>О Международной Космической Станции</p>
							</Link>
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

export default Saturn_Rings;

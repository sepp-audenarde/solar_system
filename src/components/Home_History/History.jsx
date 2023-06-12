import React, { useEffect, useRef } from "react";
import styles from "./History.module.scss";

export const Wrap = ({ children }) => {
	const { date, idx } = children.props;

	const history = useRef();
	useEffect(() => {
		let timeout;

		if (date === idx) {
			history.current.style.display = "flex";
			timeout = setTimeout(() => {
				history.current.style.opacity = 1;
				history.current.style.poinerEvents = "auto";
			}, 650);
		} else {
			history.current.style.poinerEvents = "none";
			history.current.style.opacity = 0;
			timeout = setTimeout(() => {
				history.current.style.display = "none";
			}, 1000);
		}

		return () => clearTimeout(timeout);
	}, [date]);

	return (
		<div className={styles.container} ref={history}>
			{children}
		</div>
	);
};

const History = ({ children }) => {
	return <div className={styles.historyWrapper}>{children}</div>;
};

export const History1 = () => {
	const text1 = "31 января 1961 — полет шимпанзе Хэма. Корабль Хэма приводнился в Атлантическом океане и был поднят на спасательное судно.";
	const text2 =
		"5 мая 1961 — первый суборбитальный полет человека. Хотя полёт был суборбитальным и кратким, пилот имел возможность управлять кораблём.";
	const text3 =
		"12 апреля 1961 — первый полёт человека в космос. Первый полёт длился 108 минут, за это время корабль совершил один полный оборот вокруг Земли.";

	const image1 = "images/ham.webp";
	const image2 = "images/yuri.webp";
	const image3 = "images/alan.webp";

	return (
		<History>
			{/* <img draggable={false} className={styles.picture} src={test_space1} alt="" /> */}
			<div className={styles.slide}>
				<div className={styles.top_1}>
					<div className={styles.left_top_1}>
						<img draggable={false} src={image1} alt="monkey_astronaut" />
					</div>
					<div className={styles.right_top_1}>
						<div className={styles.date_top_1}>1961</div>
						<div className={styles.text_top_1}>{text1}</div>
					</div>
				</div>

				<div className={styles.line_1}>
					<div className={styles.line_line} />
				</div>

				<div className={styles.bottom_1}>
					<div className={styles.pic_bottom_1}>
						<img draggable={false} src={image2} alt="astronaut1" />
						<div className={styles.text_bottom_1}>{text3}</div>
					</div>
					<div className={styles.pic_bottom_1}>
						<img draggable={false} src={image3} alt="astronaut2" />
						<div className={styles.text_bottom_1}>{text2}</div>
					</div>
				</div>
			</div>
		</History>
	);
};

export const History2 = () => {
	const text1 =
		"18 марта 1965 года — Первый выход в космос космонавтом Алексеем Леоновым с борта космического корабля. Для выхода был разработан скафандр с многослойной оболочкой.";

	const text2 = "Первые фото Марса, сделанные аппаратом «Маринер 4»";
	const text3 =
		"Июль 1965 года — Космическая станция «Маринер 4» приблизилась к Марсу и сделала несколько снимков другой планеты. Для этого была использована большая аналоговая камера, смонтированная в нижней части аппарата.";
	const text4 =
		"Фотографии Марса позволили перейти от домыслов о строении поверхности к фактам и теориям. Так был опровергнут миф о каналах на поверхности Марса.";

	const image1 = "images/leonov.webp";
	const image2 = "images/mars1.webp";
	const image3 = "images/mars2.webp";
	const image4 = "images/mars3.webp";

	return (
		<History>
			{/* <img draggable={false} className={styles.picture} src={test_space2} alt="" /> */}
			<div className={styles.slide}>
				<div className={styles.top_2}>
					<div className={styles.left_top_2}>
						<img draggable={false} src={image1} alt="monkey_astronaut" />
					</div>
					<div className={styles.right_top_2}>
						<div className={styles.date_top_2}>1965</div>
						<div className={styles.text_top_2}>{text1}</div>
					</div>
				</div>

				<div className={styles.line_2}>
					<div className={styles.line_line_2} />
				</div>

				<div className={styles.bottom_2}>
					<div className={styles.mars_slides}>
						<div className={styles.pic_bottom_2}>
							<img draggable={false} src={image2} alt="mars1" />
						</div>
						<div className={styles.pic_bottom_2}>
							<img draggable={false} src={image3} alt="mars2" />
						</div>
						<div className={styles.pic_bottom_2}>
							<img draggable={false} src={image4} alt="mars3" />
						</div>
					</div>
					<div className={styles.name_2}>{text2}</div>
					<div className={styles.text1_2}>{text3}</div>
					<div className={styles.text2_2}>{text4}</div>
				</div>
			</div>
		</History>
	);
};

export const History3 = () => {
	const text1 =
		"Начало космической эры было ознаменовано и жертвами. Первыми погибли В.Гриссом, Э.Уайт и Р.Чаффи . Во время подготовки к полёту по программе «Аполлон», на корабле произошло возгорание.";

	const text2 =
		"Запуск корабля «Союз-1» — первый пилотируемый корабль серии «Союз». На борту «Союза-1» находился один космонавт В.М.Комаров, погибший во время приземления.";

	const text3 =
		"Программа предполагала первую в мире стыковку кораблей и переход двоих космонавтов для возвращения на «Союзе-1». Из-за неполадок на «Союзе-1» старт корабля «Союз-2» был отменён, что спасло жизни его экипажу.";

	const image1 = "images/apollo1.webp";
	const image2 = "images/souz1.webp";

	return (
		<History>
			{/* <img draggable={false} className={styles.picture} src={test_space3} alt="" /> */}
			<div className={styles.slide}>
				<div className={styles.top_3}>
					<div className={styles.left_top_3}>
						<img draggable={false} src={image1} alt="apollo_crew" />
						<div className={styles.text_top_3}>{text1}</div>
					</div>

					<div className={styles.right_top_3}>
						<div className={styles.date_top_3}>1967</div>
					</div>
				</div>

				<div className={styles.bottom_3}>
					<div className={styles.left_bottom_3}></div>
					<div className={styles.right_bottom_3}>
						<img draggable={false} src={image2} alt="apollo_crew" />
						<div className={styles.text_bottom_3}>{text2}</div>
						<div className={styles.text_bottom_3}>{text3}</div>
					</div>
				</div>
			</div>
		</History>
	);
};

export const History4 = () => {
	const text1 = " 20 июля 1969 года — Астронавты Нил Армстронг и Базз Олдрин ступили на поверхность Луны.";

	const text2 =
		"Экипаж «Аполлона» не только побывал Луне, но и привез пробы грунта на Землю. Всего по программе «Аполлон» было выполнено 6 полётов с посадкой на Луне. За эти годы на спутнике побывало 12 человек.";

	const text3 =
		"Cостоялась первая стыковка кораблей — «Союз-4» и «Союз-5». Тогда космонавты Е.Хрунов и А.Елисеев перешли из одного корабля в другой.";
	const text4 =
		"Командовал экипажем Б.Волынов. На другом корабле их встречал пилот В.Шаталов. Так на орбите была создана первая в мире космическая станция.";

	const image1 = "images/moon.webp";
	const image2 = "images/souz2.webp";

	return (
		<History>
			{/* <img draggable={false} className={styles.picture} src={test_space4} alt="" /> */}
			<div className={styles.slide}>
				<div className={styles.date_4}>1969</div>
				<div className={styles.top_4}>
					<img draggable={false} src={image1} alt="moon" />
					<div className={styles.text_top_4}>{text1}</div>
					<div className={styles.text_top_4}>{text2}</div>
				</div>
				<div className={styles.bottom_4}>
					<img draggable={false} src={image2} alt="moon" />
					<div className={styles.text_bottom_4}>{text3}</div>
					<div className={styles.text_bottom_4}>{text4}</div>
				</div>
			</div>
		</History>
	);
};

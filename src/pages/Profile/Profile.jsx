import React, { useEffect, useRef, useState } from "react";

import { useGlobalContext } from "../../context/context";

import styles from "./Profile.module.scss";
import { Link, useLocation } from "react-router-dom";

import { avatars as list } from "../../context/data";
import { baseUrl } from "../../App";

const Register = ({ setReg, setSuccess }) => {
	const { createUser } = useGlobalContext();

	const url = "https://i.pinimg.com/236x/78/85/cb/7885cbfbf06f3cb55a0db8efad5cc560.webp?nii=t";

	const [values, setValues] = useState({
		name: "",
		email: "",
		password: "",
		avatar: "https://i.pinimg.com/236x/78/85/cb/7885cbfbf06f3cb55a0db8efad5cc560.webp?nii=t1",
	});

	const handleChange = ({ target: { value, name } }) => {
		setValues({ ...values, [name]: value });
	};

	const handleAvatar = (value) => {
		setValues({ ...values, ["avatar"]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const isNotEmpty = Object.values(values).every((val) => val);

		if (inputRef.current.value.length <= 3) {
			inputRef.current.setCustomValidity("Пароль должен содержать хотя бы 4 символа! Максимальная длина не ограничена.");
			inputRef.current.reportValidity();
			return;
		}

		if (!isNotEmpty) return;

		setSuccess(true);
		createUser(values);
	};

	const inputRef = useRef();

	const location = useLocation();

	const style1 = {
		display: "none",
	};

	const style2 = {
		display: "flex",
	};

	return (
		<>
			<div className={styles.block}>
				<div className={styles.title}>Регистрация</div>
				<form className={styles.form} onSubmit={handleSubmit}>
					<div className={styles.group}>
						<input type="email" placeholder="Email" name="email" value={values.email} autoComplete="off" onChange={handleChange} required />
					</div>

					<div className={styles.group}>
						<input
							type="name"
							placeholder="Имя пользователя"
							name="name"
							value={values.name}
							autoComplete="off"
							onChange={handleChange}
							required
						/>
					</div>

					<div className={styles.group}>
						<input
							type="password"
							placeholder="Пароль"
							name="password"
							value={values.password}
							autoComplete="off"
							onChange={handleChange}
							ref={inputRef}
							required
						/>
					</div>

					<div className={styles.avatarTitle}>Выберите аватар:</div>
					<div className={styles.group}>
						{/* <input
						type="avatar"
						placeholder="Your avatar"
						name="avatar"
						value={values.avatar}
						autoComplete="off"
						onChange={handleChange}
						required
					/> */}
						<Avatars handleAvatar={handleAvatar} />
					</div>

					<div className={styles.link} onClick={() => setReg((p) => !p)}>
						У меня уже есть аккаунт
					</div>

					<button type="submit" className={styles.submit} onClick={() => {}}>
						Создать аккаунт
					</button>
					{/* <button
					type="button"
					className={styles.submit}
					onClick={() => {

					}}>
					тест
				</button> */}
				</form>
			</div>
		</>
	);
};

const Auth = ({ setReg, setSuccess }) => {
	const { loginUser } = useGlobalContext();

	const [values, setValues] = useState({
		email: "",
		password: "",
	});

	const handleChange = ({ target: { value, name } }) => {
		setValues({ ...values, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const isNotEmpty = Object.values(values).every((val) => val);

		if (!isNotEmpty) return;

		setSuccess(true);
		loginUser(values);
	};

	return (
		<>
			<div className={styles.block}>
				<div className={styles.title}>Войти в аккаунт</div>
				<form className={styles.form} onSubmit={handleSubmit}>
					<div className={styles.group}>
						<input type="email" placeholder="Email" name="email" value={values.email} autoComplete="off" onChange={handleChange} required />
					</div>

					<div className={styles.group}>
						<input
							type="password"
							placeholder="Пароль"
							name="password"
							value={values.password}
							autoComplete="off"
							onChange={handleChange}
							required
						/>
					</div>

					<div className={styles.link} onClick={() => setReg((p) => !p)}>
						У меня нет аккаунта
					</div>

					<button type="submit" className={styles.submit}>
						Войти
					</button>
				</form>
			</div>
		</>
	);
};

const Profile = () => {
	const { user, logError, reg, setReg } = useGlobalContext();

	const [success, setSuccess] = useState(false);

	const message = useRef();
	useEffect(() => {
		if (!message.current) return;
		message.current.style.opacity = 0;
		setTimeout(() => {
			message.current.style.opacity = 1;
		}, 300);
	}, [success]);

	if (success)
		return (
			<div className={styles.success}>
				<p ref={message}>{logError ? "Произошла ошибка" : "Вход выполнен успешно"}</p>
				<Link to={baseUrl + "/"}>Вернуться на главную страницу</Link>
			</div>
		);

	return (
		<div className={styles.section}>
			{!user ? (
				<div className={styles.wrapper}>
					{reg ? <Register setReg={setReg} setSuccess={setSuccess} /> : <Auth setReg={setReg} setSuccess={setSuccess} />}
				</div>
			) : (
				<UpdateUser setReg={setReg} />
			)}
		</div>
	);
};

const Avatars = ({ handleAvatar }) => {
	const [select, setSelect] = useState(1);
	const url = "https://i.pinimg.com/236x/78/85/cb/7885cbfbf06f3cb55a0db8efad5cc560.webp?nii=t";

	return (
		<div className={styles.avatars}>
			{list.map((e, i) => (
				<img
					draggable={false}
					className={styles.icon}
					src={e}
					alt="icon"
					key={i}
					onClick={() => {
						setSelect(i);
						handleAvatar(url + i);
					}}
					style={{
						outline: select === i ? "2px solid orange" : null,
					}}
				/>
			))}
		</div>
	);
};

const UpdateAvatars = ({ handleAvatar }) => {
	const { user } = useGlobalContext();
	const [select, setSelect] = useState(+user.avatar[user.avatar.length - 1]);

	const url = "https://i.pinimg.com/236x/78/85/cb/7885cbfbf06f3cb55a0db8efad5cc560.webp?nii=t";

	return (
		<div className={styles.avatars}>
			{list.map((e, i) => (
				<img
					draggable={false}
					className={styles.icon}
					src={e}
					alt="icon"
					key={i}
					onClick={() => {
						setSelect(i);
						handleAvatar(url + i);
					}}
					style={{
						outline: select === i ? "2px solid orange" : null,
					}}
				/>
			))}
		</div>
	);
};

const UpdateUser = ({ setReg }) => {
	const url = "https://i.pinimg.com/236x/78/85/cb/7885cbfbf06f3cb55a0db8efad5cc560.webp?nii=t";

	const { updateUser, user, setUser } = useGlobalContext();

	const [values, setValues] = useState({
		name: "",
		email: "",
		password: "",
		avatar: url + user.avatar[user.avatar.length - 1],
	});

	const handleChange = ({ target: { value, name } }) => {
		setValues({ ...values, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const isNotEmpty = Object.values(values).every((val) => val);

		if (!isNotEmpty) return;

		if (inputRef.current.value.length <= 3) {
			inputRef.current.setCustomValidity("Пароль должен содержать хотя бы 4 символа! Максимальная длина не ограничена.");
			inputRef.current.reportValidity();
			return;
		}
		updateUser(values);
	};

	const handleAvatar = (value) => {
		setValues({ ...values, ["avatar"]: value });
	};

	const inputRef = useRef();

	return (
		<div className={styles.blockUpdate}>
			<div className={styles.title}>Обновить данные пользователя</div>
			<form className={styles.form} onSubmit={handleSubmit}>
				<div className={styles.group}>
					<input type="email" placeholder="Email" name="email" value={values.email} autoComplete="off" onChange={handleChange} required />
				</div>

				<div className={styles.group}>
					<input
						type="name"
						placeholder="Имя пользователя"
						name="name"
						value={values.name}
						autoComplete="off"
						onChange={handleChange}
						required
						//
					/>
				</div>

				<div className={styles.group}>
					<input
						type="password"
						placeholder="Пароль"
						name="password"
						value={values.password}
						autoComplete="off"
						onChange={handleChange}
						required
						ref={inputRef}
					/>
				</div>

				<div className={styles.group}>
					<UpdateAvatars handleAvatar={handleAvatar} />
				</div>

				<button type="submit" className={styles.submit}>
					Изменить
				</button>
			</form>
			<button
				type="button"
				className={styles.leave}
				onClick={() => {
					setUser(null);
					setReg(false);
				}}>
				Выйти из аккаунта
			</button>
		</div>
	);
};

export default Profile;

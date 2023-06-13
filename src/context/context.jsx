import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

const AppContext = React.createContext();
import { useLocation } from "react-router-dom";
import { state } from "./valtio";
import { baseUrl } from "../App";

const AppProvider = ({ children }) => {
	const [planet, setPlanet] = useState(2);
	const [date, setDate] = useState(0);

	const [firstScreen, setFirstScreen] = useState(true);
	const [secondScreen, setSecondScreen] = useState(false);
	const [free, setFree] = useState(false);
	const [scrollEvent, setScrollEvent] = useState(0);

	const [isFirstPage, setIsFirstPage] = useState(true);

	const [Saturn_Overview_ref, setSaturn_Overview_ref] = useState(null);
	const [Saturn_ToKnow_ref, setSaturn_ToKnow_ref] = useState(null);
	const [Saturn_Pop_ref, setSaturn_Pop_ref] = useState(null);
	const [Saturn_Rings_ref, setSaturn_Rings_ref] = useState(null);

	const [ISS_Overview_ref, setISS_Overview_ref] = useState(null);
	const [ISS_Tourism_ref, setISS_Tourism_ref] = useState(null);
	const [ISS_ToKnow_ref, setISS_ToKnow_ref] = useState(null);
	const [ISS_Pop_ref, setISS_Pop_ref] = useState(null);

	const [сontainer, setContainer] = useState(null);

	const [go, setGo] = useState(0);
	const [scrollPlanet, setScrollPlanet] = useState(planet);
	const [transit, setTransit] = useState(false);

	const [loading, setLoading] = useState(false);
	const [user, setUser] = useState(null);
	const [reg, setReg] = useState(true);
	const [logError, setLogError] = useState(false);

	const BASE_URL = "https://api.escuelajs.co/api/v1";

	const createUser = async (payload) => {
		try {
			const res = await axios.post(`${BASE_URL}/users`, payload);

			setUser(res.data);
			setLogError(false);
			return res.data;
		} catch (err) {
			console.log(err);
			return err;
		}
	};

	const updateUser = async (payload) => {
		try {
			const res = await axios.put(`${BASE_URL}/users/${user.id}`, payload);
			setUser(res.data);
			setLogError(false);

			return res.data;
		} catch (err) {
			console.log(err);
			setLogError(true);
			return err;
		}
	};

	const loginUser = async (payload) => {
		try {
			const res = await axios.post(`${BASE_URL}/auth/login`, payload);
			const login = await axios(`${BASE_URL}/auth/profile`, {
				headers: {
					Authorization: `Bearer ${res.data.access_token}`,
				},
			});
			setLogError(false);
			setUser(login.data);

			return login.data;
		} catch (err) {
			console.log(err);
			setLogError(true);
			return err;
		}
	};

	const location = useLocation();

	function scrollToPlanet(nth_planet) {
		if (transit) return;
		setGo((p) => p + 1);
		if (planet !== nth_planet) setScrollPlanet(nth_planet);
	}

	useEffect(() => {
		function onWheel(e) {
			setScrollEvent(e);
		}

		document.body.addEventListener("wheel", onWheel);

		return () => document.body.removeEventListener("wheel", onWheel);
	}, []);

	useEffect(() => {
		setScrollEvent(0);
	}, [location]);

	function changePlanet(payload) {
		setPlanet((prev) => prev + payload);
	}

	function changeDate(payload) {
		setDate(payload);
	}

	function clickPlanet(payload) {
		if (transit) return;

		сontainer.current.style.opacity = 0;
		сontainer.current.style.pointerEvents = "none";
		setTransit(true);

		setTimeout(() => {
			changePlanet(payload);
			сontainer.current.style.opacity = 1;
			сontainer.current.style.pointerEvents = "none";

			setTransit(false);
			state.activePlanetIdx = planet;
		}, 800);

		setTimeout(() => {
			setTransit(false);
		}, 1000);

		state.activePlanetIdx += payload;
	}

	useEffect(() => {
		if (location.pathname === baseUrl + "/") {
			setIsFirstPage(true);
		} else {
			setIsFirstPage(false);
		}

		if (!isFirstPage) document.body.classList.remove("disableScroll");
		return () => setIsFirstPage(false);
	}, [isFirstPage, location]);

	return (
		<AppContext.Provider
			value={{
				changePlanet,
				changeDate,
				planet,
				date,

				setFirstScreen,
				setSecondScreen,
				setFree,

				firstScreen,
				secondScreen,
				free,
				scrollEvent,

				scrollToPlanet,
				setTransit,
				setIsFirstPage,
				scrollPlanet,
				transit,
				isFirstPage,

				go,

				Saturn_Overview_ref,
				setSaturn_Overview_ref,
				Saturn_ToKnow_ref,
				setSaturn_ToKnow_ref,
				Saturn_Pop_ref,
				setSaturn_Pop_ref,
				Saturn_Rings_ref,
				setSaturn_Rings_ref,

				ISS_Overview_ref,
				setISS_Overview_ref,
				ISS_ToKnow_ref,
				setISS_ToKnow_ref,
				ISS_Pop_ref,
				setISS_Pop_ref,
				ISS_Tourism_ref,
				setISS_Tourism_ref,

				сontainer,
				setContainer,
				clickPlanet,

				loading,
				setLoading,
				user,
				setUser,

				createUser,
				loginUser,
				updateUser,
				logError,
				reg,
				setReg,
			}}>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };

import React, { useEffect } from "react";

import { Routes, Route } from "react-router-dom";
import "./App.scss";

import Home from "./pages/Home/Home";
import ISS from "./pages/ISS/ISS";
import Saturn from "./pages/Saturn/Saturn";
import Profile from "./pages/Profile/Profile";
import Error from "./pages/Error/Error";

import Navbar from "./components/Navbar/Navbar";

import Footer from "./components/Footer/Footer";

// в случае необходимости, baseUrl заменяется на пустую строку
export const baseUrl = "/solar_system";
// export const baseUrl = "";

// import { useLocation } from "react-router-dom";

function App() {
	// const location = useLocation();
	// console.log(location);

	// console.log(import.meta.env.BASE_URL);

	useEffect(() => {
		if (window.pageYOffset === 0) {
			document.body.classList.add("disableScroll");
		}
	}, []);

	return (
		<div className="App" translate="no">
			<Navbar />

			<Routes>
				<Route element={<Home />} path={baseUrl + "/"} />
				{/* <Route element={<About />} path="/about" /> */}
				<Route element={<ISS />} path={baseUrl + "/iss"} />
				<Route element={<Saturn />} path={baseUrl + "/saturn"} />
				<Route element={<Profile />} path={baseUrl + "/profile"} />
				<Route element={<Error />} path={baseUrl + "/*"} />
			</Routes>

			<Footer />
		</div>
	);
}

export default App;

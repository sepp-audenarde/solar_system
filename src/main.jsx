import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { AppProvider } from "./context/context";

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
	<Router
		// basename={import.meta.env.VITE_PUBLIC_URL}
		//
	>
		<AppProvider>
			{/* <Provider store={store}> */}
			<App />
			{/* </Provider> */}
		</AppProvider>
	</Router>,
);

import { proxy } from "valtio";

const state = proxy({
	firstScreen: true,
	secondScreen: false,
	activePlanetIdx: 2,
});

export { state };

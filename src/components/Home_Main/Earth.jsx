import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

import EarthCloudsMap from "/images/2k_earth_clouds.webp";
import EarthDayMap from "/images/2k_earth_daymap.webp";
import { TextureLoader } from "three";

import { easing } from "maath";

import { useGlobalContext } from "../../context/context";
import { useSnapshot } from "valtio";
import { state } from "../../context/valtio";

export function Earth(props) {
	const { idx } = props;
	const snap = useSnapshot(state);
	const { clickPlanet, transit, setTransit } = useGlobalContext();

	const [colorMap, cloudsMap] = useLoader(TextureLoader, [EarthDayMap, EarthCloudsMap]);

	const earthRef = useRef();
	const cloudsRef = useRef();
	const refOpacity = useRef();

	useFrame(({ clock }, dt) => {
		const elapsedTime = clock.getElapsedTime();

		earthRef.current.rotation.y = elapsedTime / 10;
		cloudsRef.current.rotation.y = elapsedTime / 5;

		if (state.activePlanetIdx === idx) {
			easing.damp(refOpacity.current, "opacity", 0.4, 0.5, dt);
		} else {
			easing.damp(refOpacity.current, "opacity", 0, 0.5, dt);
		}
	});

	function click() {
		if (!transit) {
			setTransit(true);
			setTimeout(() => {
				setTransit(false);
			}, 800);

			if (idx - 1 === snap.activePlanetIdx) {
				clickPlanet(1);
			} else if (idx + 1 === snap.activePlanetIdx) {
				clickPlanet(-1);
			}
		}
	}

	return (
		<group {...props} >
			<mesh ref={cloudsRef} onClick={() => click()}>
				<sphereGeometry args={[1.01, 32, 32]} />
				<meshPhongMaterial map={cloudsMap} opacity={0.4} depthWrite={true} transparent={true} ref={refOpacity} />
			</mesh>
			<mesh ref={earthRef}>
				<sphereGeometry args={[1, 48, 48]} />
				<meshStandardMaterial map={colorMap} metalness={0.5} roughness={0.75} />
			</mesh>
		</group>
	);
}

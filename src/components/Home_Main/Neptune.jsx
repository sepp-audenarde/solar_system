import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

import NeptuneMap from "/images/2k_neptune.webp";

import { TextureLoader } from "three";

import { useGlobalContext } from "../../context/context";
import { useSnapshot } from "valtio";
import { state } from "../../context/valtio";

export function Neptune(props) {
	const { idx } = props;
	const snap = useSnapshot(state);
	const { clickPlanet, transit, setTransit } = useGlobalContext();

	const [colorMap] = useLoader(TextureLoader, [NeptuneMap]);

	const neptuneRef = useRef();

	useFrame(({ clock }) => {
		const elapsedTime = clock.getElapsedTime();
		neptuneRef.current.rotation.y = elapsedTime / 4;
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
		<group {...props} rotation={[0, 0, -0.1]}>
			<mesh ref={neptuneRef} position={[0, 0, 0]} scale="1" onClick={() => click()}>
				<sphereGeometry args={[1, 48, 48]} />
				<meshStandardMaterial map={colorMap} metalness={0.5} roughness={0.75} />
			</mesh>
		</group>
	);
}

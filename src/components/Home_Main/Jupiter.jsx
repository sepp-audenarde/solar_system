import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

import JupiterMap from "/images/2k_jupiter.webp";

import { TextureLoader } from "three";

import { useGlobalContext } from "../../context/context";
import { useSnapshot } from "valtio";
import { state } from "../../context/valtio";

export function Jupiter(props) {
	const { idx } = props;
	const snap = useSnapshot(state);
	const { clickPlanet, transit, setTransit } = useGlobalContext();

	const [colorMap] = useLoader(TextureLoader, [JupiterMap]);

	const jupiterRef = useRef();

	useFrame(({ clock }) => {
		const elapsedTime = clock.getElapsedTime();
		jupiterRef.current.rotation.y = elapsedTime / 5;
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
		<group {...props} rotation={[0, 0, 0]}>
			<mesh ref={jupiterRef} position={[0, 0, 0]} scale="1" onClick={() => click()}>
				<sphereGeometry args={[1, 48, 48]} />
				{/* <meshPhongMaterial /> */}

				<meshStandardMaterial
					map={colorMap}
					metalness={0.2}
					roughness={0.5}
					//
				/>
			</mesh>
		</group>
	);
}

import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

import SaturnMap from "/images/2k_saturn.webp";
import RingsMap from "/images/2k_saturn_rings.webp";

import { TextureLoader } from "three";

import { useGlobalContext } from "../../context/context";
import { useSnapshot } from "valtio";
import { state } from "../../context/valtio";
import { useGLTF } from "@react-three/drei";
import { easing } from "maath";

import { Model as Rings } from "./Rings_saturn";

export function Saturn(props) {
	const { idx } = props;
	const snap = useSnapshot(state);
	const { clickPlanet, transit, setTransit, secondScreen, firstScreen } = useGlobalContext();

	const [colorMap, ringsMap] = useLoader(TextureLoader, [SaturnMap, RingsMap]);

	const saturnRef = useRef();
	const ringsRef = useRef();
	const groupRef = useRef();

	useFrame(({ clock }, dt) => {
		const elapsedTime = clock.getElapsedTime();
		saturnRef.current.rotation.y = elapsedTime;
		ringsRef.current.rotation.y = elapsedTime / 2;

		if (
			firstScreen &&
			state.activePlanetIdx === idx
			//
		) {
			easing.damp(groupRef.current.rotation, "x", 0, 0.85, dt);
			easing.damp(groupRef.current.rotation, "z", 0, 0.85, dt);
		} else {
			easing.damp(groupRef.current.rotation, "x", 0.3, 0.85, dt);
			easing.damp(groupRef.current.rotation, "z", 0.5, 0.85, dt);
		}
	});

	ringsMap.rotation = Math.PI / 2;
	ringsMap.offset.y = 1.2;

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

	// const { scene } = useGLTF("models/rings_saturn.gltf");

	return (
		<group
			{...props}
			rotation={[0.3, 0, 0.5]}
			ref={groupRef}
			//
		>
			<mesh ref={saturnRef} position={[0, 0, 0]} scale="1" onClick={() => click()}>
				<sphereGeometry args={[1, 48, 48]} />
				<meshStandardMaterial map={colorMap} metalness={0.5} roughness={0.75} />
			</mesh>
			<Rings
				scale={0.21}
				ringsRef={ringsRef}
				secondScreen={secondScreen}
				idx={idx}
				activePlanetIdx={state.activePlanetIdx}
				//
			/>
			{/* <primitive

				object={scene}
				scale={0.21}
				// rotation={[0.1, 0, 0]}
				//
			/> */}
		</group>
	);
}

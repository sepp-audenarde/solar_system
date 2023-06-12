import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

import VenusCloudsMap from "/images/2k_venus_atmosphere.webp";
import VenusDayMap from "/images/2k_venus_surface.webp";
import { TextureLoader } from "three";

import { easing } from "maath";

import { useGlobalContext } from "../../context/context";
import { useSnapshot } from "valtio";
import { state } from "../../context/valtio";

export function Venus(props) {
	const { idx } = props;
	const snap = useSnapshot(state);
	const { clickPlanet, transit, setTransit } = useGlobalContext();

	const [colorMap, cloudsMap] = useLoader(TextureLoader, [VenusDayMap, VenusCloudsMap]);

	const venusRef = useRef();
	const cloudsRef = useRef();
	const refOpacity = useRef();

	useFrame(({ clock }, dt) => {
		const elapsedTime = clock.getElapsedTime();

		venusRef.current.rotation.y = elapsedTime / 7;
		cloudsRef.current.rotation.y = elapsedTime / 2.15;

		if (snap.activePlanetIdx === idx) {
			easing.damp(refOpacity.current, "opacity", 0.8, 0.5, dt);
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
		<group {...props}>
			<mesh ref={cloudsRef} position={[0, 0, 0]} onClick={() => click()}>
				<sphereGeometry args={[1.02, 48, 48]} />
				<meshPhongMaterial map={cloudsMap} opacity={0.8} depthWrite={true} transparent={true} side={THREE.DoubleSide} ref={refOpacity} />
			</mesh>
			<mesh ref={venusRef} position={[0, 0, 0]} scale="1">
				<sphereGeometry args={[1, 48, 48]} />
				<meshStandardMaterial map={colorMap} metalness={0.75} />
			</mesh>
		</group>
	);
}

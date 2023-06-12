import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

export function Model(props) {
	const { ringsRef, secondScreen, idx, activePlanetIdx } = props;
	// console.log(ringsRef);

	const { nodes, materials } = useGLTF("models/rings_saturn.gltf");

	// materials["Rings.002"].opacity = 0.8;

	useFrame((state, dt) => {
		if (secondScreen || activePlanetIdx !== idx) {
			easing.damp(materials["Rings.002"], "opacity", 0.6, 0.5, dt);
		} else {
			easing.damp(materials["Rings.002"], "opacity", 0, 0.5, dt);
		}
	});

	return (
		<group {...props} dispose={null} ref={ringsRef}>
			<mesh geometry={nodes.Saturn.geometry} material={materials["Rings.002"]} position={[0, 0.04, 0]} />
		</group>
	);
}

useGLTF.preload("models/rings_saturn.gltf");

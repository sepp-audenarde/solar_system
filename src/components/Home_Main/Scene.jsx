import React, { Suspense, useEffect, useRef, useState } from "react";
import styles from "./Scene.module.scss";
import { easing } from "maath";

import * as THREE from "three";
import { Stars, useGLTF, useCursor } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";

import { state } from "../../context/valtio";
import { useSnapshot } from "valtio";

import { Mercury } from "./Mercury";
import { Venus } from "./Venus";
import { Earth } from "./Earth";
import { Moon } from "./Moon";
import { Mars } from "./Mars";

import { Jupiter } from "./Jupiter";
import { Saturn } from "./Saturn";
import { Uranus } from "./Uranus";
import { Neptune } from "./Neptune";

export const Scene = () => {
	setTimeout(() => {
		state.position = [16.5, -1.6, -60];
	}, 2000);

	// const control = {
	// 	before: [-21, -1.6, -60],
	// 	left: [-16.5, -1.6, -60],
	// 	active: [0, -2.2, 0],
	// 	right: [16.5, -1.6, -60],
	// 	after: [21, -1.6, -60],
	// };

	const Planet = ({ children, idx }) => {
		const snap = useSnapshot(state);
		const ref = useRef();

		const [hovered, setHovered] = useState(false);
		useCursor(hovered);

		function getPos(index, activePlanetIdx) {
			if (index - 1 > activePlanetIdx) return control["after"];
			if (index - 1 === activePlanetIdx) return control["right"];
			if (index === activePlanetIdx) return control["active"];
			if (index + 1 === activePlanetIdx) return control["left"];
			if (index + 1 < activePlanetIdx) return control["before"];
		}

		const { size } = useThree();

		// const screenWidth = window.innerWidth;
		// const screenHeight = window.innerHeight;

		let percent = 0;
		let control;
		if (size.width >= 1200 && size.width <= 1920) {
			let num = size.width - 1200;
			percent = (num / 720) * 100;
			control = {
				before: [-21 - 3 - 0.06 * percent, -1.6, -60],
				left: [-16.5 + 3.8 - 0.045 * percent, -1.6, -60],
				active: [0, -2.2, 0],
				right: [16.5 - 3.8 + 0.045 * percent, -1.6, -60],
				after: [21 + 3 + 0.06 * percent, -1.6, -60],
			};
		}

		if (size.width >= 200 && size.width <= 1200) {
			let num = size.width - 500;
			percent = (num / 700) * 100;
			control = {
				before: [-21 - 3 - 0.06 * percent, -1.6, -60],
				left: [-16.5 + 10 - 0.045 * percent, -1.6, -60],
				active: [0, -2.2, -7],
				right: [16.5 - 10 + 0.045 * percent, -1.6, -60],
				after: [21 + 3 + 0.06 * percent, -1.6, -60],
			};
		}

		useFrame((state, dt) => {
			if (snap.firstScreen && !snap.secondScreen) {
				easing.damp3(ref.current.position, new THREE.Vector3(...getPos(idx, snap.activePlanetIdx)), 0.5, dt);
			}

			if (!snap.firstScreen && snap.secondScreen && snap.activePlanetIdx === idx) {
				easing.damp3(ref.current.position, new THREE.Vector3(...[2, 0, -8]), 0.5, dt);
			}

			if (!snap.firstScreen && snap.secondScreen && snap.activePlanetIdx > idx) {
				easing.damp3(ref.current.position, new THREE.Vector3(...control["before"]), 0.5, dt);
			}

			if (!snap.firstScreen && snap.secondScreen && snap.activePlanetIdx < idx) {
				easing.damp3(ref.current.position, new THREE.Vector3(...control["after"]), 0.5, dt);
			}
		});

		return (
			<group
				ref={ref}
				position={[0, -2.2, 0]}
				onPointerOver={() => (idx !== snap.activePlanetIdx ? setHovered(true) : null)}
				onPointerOut={() => setHovered(false)}>
				{children}
			</group>
		);
	};

	const PlanetMesh = () => {
		return (
			<mesh scale={1.8}>
				<sphereGeometry args={[1, 18, 18]} />
				<meshStandardMaterial wireframe={true} />
			</mesh>
		);
	};

	const BackgroundStars = () => {
		const refStars = useRef();
		useFrame(() => {
			refStars.current.rotation.y += 0.0001;
		});

		return (
			<group ref={refStars}>
				<Suspense fallback={null}>
					<Stars radius={300} depth={60} count={5000} factor={7} saturation={0} fade={false} />
				</Suspense>
			</group>
		);
	};

	const Model = ({ url, ...props }) => {
		const { scene } = useGLTF(url);
		return <primitive object={scene} {...props} />;
	};

	return (
		<div className={styles.scene}>
			Scene
			<Canvas
				shadows
				gl={{ antialias: false }}
				dpr={[1, 1.5]}
				camera={{ position: [0, 0, 10], fov: 20, near: 0.01, far: 1000 }}
				style={{ pointerEvents: "auto" }}>
				<ambientLight intensity={0.5} />
				<directionalLight intensity={2} position={[5, 5, 5]} />
				<directionalLight intensity={1} position={[10, -7, 5]} />
				<directionalLight intensity={1.25} position={[5, 10, 5]} />

				<BackgroundStars />

				<Planet idx={0}>
					<Mercury scale={1.8} idx={0} />
				</Planet>

				<Planet idx={1}>
					<Venus scale={1.8} idx={1} />
				</Planet>

				<Planet idx={2}>
					<Earth scale={1.8} rotation={[0, 3.5, 0]} idx={2} />
				</Planet>

				<Planet idx={3}>
					<Moon scale={1.8} idx={3} />
				</Planet>

				<Planet idx={4}>
					<Mars scale={1.8} idx={4} />
				</Planet>

				<Planet idx={5}>
					<Jupiter scale={1.8} idx={5} />
				</Planet>

				<Planet idx={6}>
					<Saturn scale={1.8} idx={6} />
				</Planet>

				<Planet idx={7}>
					<Uranus scale={1.8} idx={7} />
				</Planet>

				<Planet idx={8}>
					<Neptune scale={1.8} idx={8} />
				</Planet>
			</Canvas>
		</div>
	);
};

export default Scene;

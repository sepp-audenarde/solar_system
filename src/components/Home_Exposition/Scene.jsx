import React, { useRef, Suspense } from "react";
import styles from "./Scene.module.scss";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { easing } from "maath";

import * as THREE from "three";

const fallback1 = "images/fallback1.webp";
const fallback2 = "images/fallback2.webp";
const fallback3 = "images/fallback3.webp";

export const Solar = ({ idx }) => {
	return (
		<div className={styles.container}>
			<Suspense fallback={<img className={styles.img1} src={fallback1} alt="fallback1" />}>
				<Canvas shadows style={{}}>
					<OrthographicCamera />
					<OrbitControls enableZoom={false} autoRotate autoRotateSpeed={20} minPolarAngle={Math.PI} maxPolarAngle={Math.PI} />
					<ambientLight intensity={1} />
					{/* <directionalLight intensity={0.7} position={[5,5, 5]} /> */}
					<mesh scale={0.8}>
						<sphereGeometry />
						<meshStandardMaterial color={"white"} />
					</mesh>
					<mesh scale={0.2} position={[1.2, 0, 1.2]}>
						<sphereGeometry />
						<meshStandardMaterial color={"white"} />
					</mesh>
					<mesh scale={0.25} position={[-2, 0, 1.2]}>
						<sphereGeometry />
						<meshStandardMaterial color={"white"} />
					</mesh>
					<mesh scale={0.3} position={[-1, 0, -1.5]}>
						<sphereGeometry />
						<meshStandardMaterial color={"white"} />
					</mesh>

					{/*  */}
					<mesh rotation={[Math.PI / 2, 0, 0]}>
						<ringGeometry args={[1.85, 1.9, 32]} />
						<meshStandardMaterial color={"white"} />
					</mesh>
					<mesh rotation={[Math.PI / 2, 0, 0]}>
						<ringGeometry args={[1.65, 1.7, 32]} />
						<meshStandardMaterial color={"white"} />
					</mesh>
					<mesh rotation={[Math.PI / 2, 0, 0]}>
						<ringGeometry args={[2.35, 2.4, 32]} />
						<meshStandardMaterial color={"white"} />
					</mesh>
				</Canvas>
			</Suspense>
		</div>
	);
};

export const Rings = ({ idx }) => {
	const group = useRef();

	const Service = () => {
		useFrame((state, dt) => {
			group.current.rotation.x += 0.04;

			easing.damp(state.camera.position, new THREE.Vector3([11.76, -25.23, -5.09]), 0.5, 2);
			easing.damp(state.camera.rotation, new THREE.Euler([1.76, 0.42, -2.022]), 0.5, 2);

			if (Math.sin(state.clock.elapsedTime) === 0) {
				state.camera.fov = 12;
			}

			if (Math.sin(state.clock.elapsedTime) > 0) {
				group.current.rotation.z += 0.00025;
			} else {
				group.current.rotation.z += -0.00025;
			}
		});
	};

	return (
		<div className={styles.container}>
			<Suspense fallback={<img className={styles.img2} src={fallback2} alt="fallback2" />}>
				<Canvas
					shadows
					style={{}}
					camera={{
						position: [11.76, -25.23, -5.09],
						rotation: [1.33, -0.424, 1.04],

						fov: 12,
					}}>
					<OrbitControls enableZoom={false} enableRotate={false} />

					<Service />

					<ambientLight intensity={1} />
					{/* <directionalLight intensity={1} position={[5,5, 5]} /> */}

					<group ref={group}>
						<mesh scale={0.9}>
							<sphereGeometry />
							<meshStandardMaterial color={"white"} />
						</mesh>

						<mesh scale={0.14} position={[0, 0, -2]}>
							<sphereGeometry args={[1, 5]} />
							<meshStandardMaterial color={"lightgray"} />
						</mesh>
						<mesh scale={0.08} position={[0, -1, 1.4]}>
							<sphereGeometry args={[1, 5]} />
							<meshStandardMaterial color={"lightgray"} />
						</mesh>

						<group>
							<mesh rotation={[Math.PI / 2.001, Math.PI / 2, Math.PI / 7]}>
								<ringGeometry args={[1.85, 1.9, 32]} />
								<meshStandardMaterial color={"white"} />
							</mesh>
							<mesh rotation={[Math.PI / 2, Math.PI / 2, Math.PI / 7]}>
								<ringGeometry args={[1.65, 1.7, 32]} />
								<meshStandardMaterial color={"white"} />
							</mesh>
							<mesh rotation={[Math.PI / 2, Math.PI / 2, Math.PI / 7]}>
								<ringGeometry args={[2.35, 2.4, 32]} />
								<meshStandardMaterial color={"white"} />
							</mesh>

							<mesh rotation={[-Math.PI / 2, -Math.PI / 2, -Math.PI / 7]}>
								<ringGeometry args={[1.85, 1.9, 32]} />
								<meshStandardMaterial color={"white"} />
							</mesh>
							<mesh rotation={[-Math.PI / 2, -Math.PI / 2, -Math.PI / 7]}>
								<ringGeometry args={[1.65, 1.7, 32]} />
								<meshStandardMaterial color={"white"} />
							</mesh>
							<mesh rotation={[-Math.PI / 2, -Math.PI / 2, -Math.PI / 7]}>
								<ringGeometry args={[2.35, 2.4, 32]} />
								<meshStandardMaterial color={"white"} />
							</mesh>

							<mesh rotation={[Math.PI / 2, Math.PI / 2, Math.PI / 7]}>
								<ringGeometry args={[1.95, 2, 32]} />
								<meshStandardMaterial color={"white"} />
							</mesh>
							<mesh rotation={[Math.PI / 2, Math.PI / 2, Math.PI / 7]}>
								<ringGeometry args={[1.65, 1.7, 32]} />
								<meshStandardMaterial color={"white"} />
							</mesh>
							<mesh rotation={[Math.PI / 2, Math.PI / 2, Math.PI / 7]}>
								<ringGeometry args={[2.35, 2.4, 32]} />
								<meshStandardMaterial color={"white"} />
							</mesh>
						</group>
					</group>
				</Canvas>
			</Suspense>
		</div>
	);
};

export const Planet = ({ idx }) => {
	return (
		<div className={styles.container}>
			{/* <div className="test"></div> */}

			<Suspense fallback={<img className={styles.img3} src={fallback3} alt="fallback3" />}>
				<Canvas shadows style={{}}>
					<OrthographicCamera />
					<OrbitControls enableZoom={false} autoRotate autoRotateSpeed={20} minPolarAngle={Math.PI} maxPolarAngle={Math.PI} />
					<ambientLight intensity={1} />
					{/* <directionalLight intensity={1} position={[5,5, 5]} /> */}
					<mesh scale={0.9}>
						<sphereGeometry />
						<meshStandardMaterial color={"white"} />
					</mesh>
					<mesh scale={0.3} position={[1.4, 0, 1.4]}>
						<sphereGeometry />
						<meshStandardMaterial color={"white"} />
					</mesh>

					{/*  */}

					<mesh rotation={[-Math.PI / 2, 0, 0]}>
						<ringGeometry args={[1.9, 2, 32]} />
						<meshStandardMaterial color={"white"} />
					</mesh>

					{/*  */}

					<mesh rotation={[Math.PI / 2, 0, 0]}>
						<ringGeometry args={[1.95, 2, 32]} />
						<meshStandardMaterial color={"white"} />
					</mesh>
				</Canvas>
			</Suspense>
		</div>
	);
};

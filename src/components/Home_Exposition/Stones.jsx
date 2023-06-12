import React from "react";
import styles from "./Scene.module.scss";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, OrthographicCamera, PerspectiveCamera } from "@react-three/drei";

export const Stones = () => {
	function rand() {
		return 1;
	}

	const Floater = ({ children }) => {
		return (
			<Float speed={10} rotationIntensity={1.4} floatIntensity={1.2} rotation={[Math.PI, 0, 0]} floatingRange={[-0.3, 0.7]}>
				{children}
			</Float>
		);
	};

	return (
		<group>
			<mesh scale={0.9}>
				<sphereGeometry />
			</mesh>
			{/* <Floater> */}
			<mesh scale={0.22 * rand()} position={[1.7 * rand(), 0, 1.5 * rand()]}>
				<sphereGeometry args={[1, 5]} />
			</mesh>
			{/* </Floater> */}
			<Floater>
				<mesh scale={0.22 * rand()} position={[-1.7 * rand(), 0, -1.5 * rand()]}>
					<sphereGeometry args={[1, 5]} />
				</mesh>
			</Floater>
			{/* <Floater> */}
			<mesh scale={0.22 * rand()} position={[-1.7 * rand(), 0, -1.5 * rand()]}>
				<sphereGeometry args={[1, 5]} />
			</mesh>
			{/* </Floater> */}
			{/* <Floater> */}
			{/* <mesh scale={0.22 * rand()} position={[-1.7 * rand(), 0, -1.5 * rand()]}>
					<sphereGeometry args={[1, 5]} />
				</mesh> */}
			{/* </Floater> */}
			<Floater>
				<mesh scale={0.5 * rand()} position={[-1.7 * rand(), 0, -1.5 * rand()]}>
					<sphereGeometry args={[1, 5]} />
				</mesh>
			</Floater>
			{/* <Floater> */}
			{/* <mesh scale={0.22 * rand()} position={[-1.7 * rand(), 0, -1.5 * rand()]}>
					<sphereGeometry args={[1, 5]} />
				</mesh> */}
			{/* </Floater> */}
			{/* <Floater> */}
			{/* <mesh scale={0.22 * rand()} position={[1.7 * rand(), 0, -1.5 * rand()]}>
					<sphereGeometry args={[1, 5]} />
				</mesh> */}
			{/* </Floater> */}
			{/* <Floater> */}
			<mesh scale={0.225} position={[0.8 * rand(), 0, -2 * rand()]}>
				<sphereGeometry args={[1, 5]} />
			</mesh>
			{/* </Floater> */}
			{/* <Floater> */}
			<mesh scale={0.225} position={[0 * rand(), 0, -2.2 * rand()]}>
				<sphereGeometry args={[1, 5]} />
			</mesh>
			{/* </Floater> */}
			<Floater>
				<mesh scale={0.225} position={[-0.5 * rand(), 0, -2.2 * rand()]}>
					<sphereGeometry args={[1, 5]} />
				</mesh>
			</Floater>
			{/* <Floater> */}
			{/* <mesh scale={0.22 * rand()} position={[-1.2 * rand(), 0, -2 * rand()]}>
					<sphereGeometry args={[1, 5]} />
				</mesh> */}
			{/* </Floater> */}
			{/* <Floater> */}
			{/* <mesh scale={0.22 * rand()} position={[-2 * rand(), 0, -0.6 * rand()]}>
					<sphereGeometry args={[1, 5]} />
				</mesh> */}
			{/* </Floater> */}
			{/* <Floater> */}
			{/* <mesh scale={0.22 * rand()} position={[-2.1 * rand(), 0, 0 * rand()]}>
					<sphereGeometry args={[1, 5]} />
				</mesh> */}
			{/* </Floater> */}
			{/* <Floater> */}
			{/* <mesh scale={0.22 * rand()} position={[-2 * rand(), 0, 0.5 * rand()]}>
					<sphereGeometry args={[1, 5]} />
				</mesh> */}
			{/* </Floater> */}
			{/* <Floater> */}
			{/* <mesh scale={0.22 * rand()} position={[-1.8 * rand(), 0, 1 * rand()]}>
					<sphereGeometry args={[1, 5]} />
				</mesh> */}
			{/* </Floater> */}
			{/* <Floater> */}
			{/* <mesh scale={0.22 * rand()} position={[-1.3 * rand(), 0, 1.5 * rand()]}>
					<sphereGeometry args={[1, 5]} />
				</mesh> */}
			{/* </Floater> */}
			{/* <Floater> */}
			{/* <mesh scale={0.22 * rand()} position={[-0.6 * rand(), 0, 1.9 * rand()]}>
					<sphereGeometry args={[1, 5]} />
				</mesh> */}
			{/* </Floater> */}
			{/* <Floater> */}
			{/* <mesh scale={0.22 * rand()} position={[0 * rand(), 0, 2.1 * rand()]}>
					<sphereGeometry args={[1, 5]} />
				</mesh> */}
			{/* </Floater> */}
			{/* <Floater> */}
			{/* <mesh scale={0.22 * rand()} position={[0.7 * rand(), 0, 2 * rand()]}>
					<sphereGeometry args={[1, 5]} />
				</mesh> */}
			{/* </Floater> */}
			{/* <Floater> */}
			{/* <mesh scale={0.3 * rand()} position={[1.3 * rand(), 0, 1.8 * rand()]}>
					<sphereGeometry args={[1, 5]} />
				</mesh> */}
			{/* </Floater> */}
			{/* <Floater> */}
			{/* <mesh scale={0.22 * rand()} position={[2 * rand(), 0, 1 * rand()]}>
					<sphereGeometry args={[1, 5]} />
				</mesh> */}
			{/* </Floater> */}
			{/* <Floater> */}
			{/* <mesh scale={0.22 * rand()} position={[2.2 * rand(), 0, 0.4 * rand()]}>
					<sphereGeometry args={[1, 5]} />
				</mesh> */}
			{/* </Floater> */}
			{/* <Floater> */}
			{/* <mesh scale={0.22 * rand()} position={[2.2 * rand(), 0, -0.2 * rand()]}>
					<sphereGeometry args={[1, 5]} />
				</mesh> */}
			{/* </Floater> */}
			{/* <Floater> */}
			{/* <mesh scale={0.22 * rand()} position={[2.1 * rand(), 0, -0.9 * rand()]}>
					<sphereGeometry args={[1, 5]} />
				</mesh> */}
			{/* </Floater>{" "} */}
			{/* <Floater> */}
			{/* <mesh scale={0.22 * rand()} position={[1.7 * rand(), 0, 1.5 * rand()]}>
					<sphereGeometry args={[1, 5]} />
				</mesh> */}
			{/* </Floater> */}
			{/* <Floater> */}
			{/* <mesh scale={0.22 * rand()} position={[-1.7 * rand(), 0, -1.5 * rand()]}>
					<sphereGeometry args={[1, 5]} />
				</mesh> */}
			{/* </Floater> */}
			<Floater>
				<mesh scale={0.22 * rand()} position={[-1.7 * rand(), 0, -1.5 * rand()]}>
					<sphereGeometry args={[1, 5]} />
				</mesh>
			</Floater>
			{/* <Floater> */}
			{/* <mesh scale={0.22 * rand()} position={[-1.7 * rand(), 0, -1.5 * rand()]}>
					<sphereGeometry args={[1, 5]} />
				</mesh> */}
			{/* </Floater> */}
			{/* <Floater> */}
			<mesh scale={0.2 * rand()} position={[-1.7 * rand(), 0, -1.5 * rand()]}>
				<sphereGeometry args={[1, 5]} />
			</mesh>
			{/* </Floater> */}
			{/* <Floater> */}
			{/* <mesh scale={0.22 * rand()} position={[-1.7 * rand(), 0, -1.5 * rand()]}>
					<sphereGeometry args={[1, 5]} />
				</mesh> */}
			{/* </Floater> */}
			{/* <Floater> */}
			{/* <mesh scale={0.22 * rand()} position={[1.7 * rand(), 0, -1.5 * rand()]}>
					<sphereGeometry args={[1, 5]} />
				</mesh> */}
			{/* </Floater> */}
			{/* <Floater> */}
			{/* <mesh scale={0.225} position={[0.8 * rand(), 0, -2 * rand()]}>
					<sphereGeometry args={[1, 5]} />
				</mesh> */}
			{/* </Floater> */}
			{/* <Floater> */}
			{/* <mesh scale={0.225} position={[0 * rand(), 0, -2.2 * rand()]}>
					<sphereGeometry args={[1, 5]} />
				</mesh> */}
			{/* </Floater> */}
			{/* <Floater> */}
			{/* <mesh scale={0.225} position={[-0.5 * rand(), 0, -2.2 * rand()]}>
					<sphereGeometry args={[1, 5]} />
				</mesh> */}
			{/* </Floater> */}
			{/* <Floater> */}
			{/* <mesh scale={0.22 * rand()} position={[-1.2 * rand(), 0, -2 * rand()]}>
					<sphereGeometry args={[1, 5]} />
				</mesh> */}
			{/* </Floater> */}
			<Floater>
				{/* <mesh scale={0.22 * rand()} position={[-2 * rand(), 0, -0.6 * rand()]}>
					<sphereGeometry args={[1, 5]} />
				</mesh> */}
			</Floater>
			{/* <Floater> */}
			{/* <mesh scale={0.22 * rand()} position={[-2.1 * rand(), 0, 0 * rand()]}>
					<sphereGeometry args={[1, 5]} />
				</mesh> */}
			{/* </Floater> */}
			{/* <Floater> */}
			{/* <mesh scale={0.22 * rand()} position={[-2 * rand(), 0, 0.5 * rand()]}>
					<sphereGeometry args={[1, 5]} />
				</mesh> */}
			{/* </Floater> */}
			{/* <Floater> */}
			<mesh scale={0.22 * rand()} position={[-1.8 * rand(), 0, 1 * rand()]}>
				<sphereGeometry args={[1, 5]} />
			</mesh>
			{/* </Floater> */}
			{/* <Floater> */}
			<mesh scale={0.22 * rand()} position={[-1.3 * rand(), 0, 1.5 * rand()]}>
				<sphereGeometry args={[1, 5]} />
			</mesh>
			{/* </Floater> */}
			{/* <Floater> */}
			<mesh scale={0.22 * rand()} position={[-0.6 * rand(), 0, 1.9 * rand()]}>
				<sphereGeometry args={[1, 5]} />
			</mesh>
			{/* </Floater> */}
			{/* <Floater> */}
			<mesh scale={0.4 * rand()} position={[0 * rand(), 0, 2.1 * rand()]}>
				<sphereGeometry args={[1, 5]} />
			</mesh>
			{/* </Floater> */}
			{/* <Floater> */}
			<mesh scale={0.22 * rand()} position={[0.7 * rand(), 0, 2 * rand()]}>
				<sphereGeometry args={[1, 5]} />
			</mesh>
			{/* </Floater> */}
			<Floater>
				<mesh scale={0.3 * rand()} position={[1.3 * rand(), 0, 1.8 * rand()]}>
					<sphereGeometry args={[1, 5]} />
				</mesh>
			</Floater>
			{/* <Floater> */}
			<mesh scale={0.22 * rand()} position={[2 * rand(), 0, 1 * rand()]}>
				<sphereGeometry args={[1, 5]} />
			</mesh>
			{/* </Floater> */}
			{/* <Floater> */}
			<mesh scale={0.22 * rand()} position={[2.2 * rand(), 0, 0.4 * rand()]}>
				<sphereGeometry args={[1, 5]} />
			</mesh>
			{/* </Floater> */}
			{/* <Floater> */}
			<mesh scale={0.22 * rand()} position={[2.2 * rand(), 0, -0.2 * rand()]}>
				<sphereGeometry args={[1, 5]} />
			</mesh>
			{/* </Floater> */}
			<Floater>
				<mesh scale={0.22 * rand()} position={[2.1 * rand(), 0, -0.9 * rand()]}>
					<sphereGeometry args={[1, 5]} />
				</mesh>
			</Floater>
		</group>
	);
};

export const Planet = ({ idx }) => {
	return (
		<div className={styles.container}>
			<Canvas shadows style={{}}>
				<OrthographicCamera />
				<OrbitControls enableZoom={false} autoRotate autoRotateSpeed={20} minPolarAngle={Math.PI} maxPolarAngle={Math.PI} />
				<ambientLight intensity={1} />
				{/* <directionalLight intensity={1} position={[5,5]} /> */}
				<mesh scale={0.9}>
					<sphereGeometry />
				</mesh>
				<mesh scale={0.3} position={[1.4, 0, 1.4]}>
					<sphereGeometry />
				</mesh>

				{/*  */}

				<mesh rotation={[-Math.PI / 2, 0, 0]}>
					<ringGeometry args={[1.9, 2, 32]} />
				</mesh>

				{/*  */}

				<mesh rotation={[Math.PI / 2, 0, 0]}>
					<ringGeometry args={[1.95, 2, 32]} />
				</mesh>
			</Canvas>
		</div>
	);
};

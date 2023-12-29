'use client'

import { Canvas, useFrame, extend } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls, useVideoTexture, useTexture } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
extend({ Canvas, OrbitControls })

function LaptopModel(props) {
	const gltf = useLoader(GLTFLoader, "/laptop/scene.gltf")
	const video = useVideoTexture("/laptop/textures/screen.mov")
	const normals = useTexture("/laptop/textures/keyboard-normals.jpg")
	let laptop = gltf.scene.children[0].children[0]
	laptop.children.find((child) => child.name == "Object_4").material.map = video;
	laptop.children.find((child) => child.name == "Object_3").material.normalMap = normals;

	return <primitive object={laptop} rotation-x={-3.14/2.0} {...props} />
}

export default function Laptop(props) {
	return (
		<div {...props} >
			<Canvas>
				<Suspense fallback={null}>
					<ambientLight />
					<pointLight position={[0, 10, -5]} intensity={1} />
					<LaptopModel position={[0, -0.35, 0]} scale={1.2} />
				</Suspense>
				<OrbitControls enablePan={false} enableZoom={false} minPolarAngle={1.2} maxPolarAngle={1.2} autoRotate={true} autoRotateSpeed={1.25} damping={0.01} />
			</Canvas>
		</div>
	)
}


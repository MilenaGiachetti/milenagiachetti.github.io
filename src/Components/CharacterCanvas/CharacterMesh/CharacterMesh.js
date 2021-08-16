/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect, useState } from 'react'
import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
	const group = useRef();
	const [coordinates, setCoordinates] = useState({x: 0, y:0});
	const {nodes, materials, animations} = useGLTF(`${process.env.PUBLIC_URL}/model/mannequin.glb`);
	const {actions} = useAnimations(animations, group);
	const {camera} = useThree();
	useEffect(() => {
        let vector = new THREE.Vector3(1, -1, 0).unproject(camera);
		setCoordinates({x: vector.x, y: vector.y});
	}, [camera])
	useFrame(() => {
		if (group.current.position.x < (coordinates.x - coordinates.x * 0.1)) {
			actions.walking.play();
			group.current.position.x += 0.025;
			actions.right_turn.weight = 0.3;
		} else if (group.current.rotation.z < 0) {
			actions.walking.weight -= 0.1;
			actions.right_turn.weight += 0.1;
			actions.right_turn.play();

			actions.walking.stop();
			group.current.rotation.z += 0.025;
		} else {
			actions.right_turn.weight -= 0.1;
			actions.walking.stop();

			actions.wave.play();
		}
	})
	return (
		<group ref={group} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.01} position={[-coordinates.x, coordinates.y, 0]} {...props} dispose={null}>
			<primitive object={nodes.mixamorig1Hips} />
			<skinnedMesh geometry={nodes.Ch36.geometry} material={materials.Ch36_Body} skeleton={nodes.Ch36.skeleton} />
		</group>
	)
}

useGLTF.preload('/mannequin.glb')
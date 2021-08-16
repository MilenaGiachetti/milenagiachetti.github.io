import React, { useRef } from 'react';
import * as THREE from 'three';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import useMouseCoordinates from '../../../hooks/mouseCoordinates';

export default function Model({image, fading}) {
    const { x, y } = useMouseCoordinates();
    const mesh = useRef();
    const { camera } = useThree();
    const [colorMap] = useLoader(TextureLoader, [`${process.env.PUBLIC_URL}/images/${image}.jpg`]);

    useFrame(() => {
        mesh.current.material.opacity = THREE.MathUtils.lerp(mesh.current.material.opacity, fading ? 0 : 1, 0.1);
        let vector = new THREE.Vector3(x, y, 0).unproject(camera);
        if (mesh.current.position.x !== vector.x * 2 || mesh.current.position.y !== vector.y * 2){
            mesh.current.position.x = vector.x * 2;
            mesh.current.position.y = vector.y * 2;
        }
    })

    return (
        <mesh
        ref={mesh}
        position={[0,0,0]}
        >
            <planeGeometry args={[3, 3]}/>
            <meshBasicMaterial map={colorMap} transparent={true} opacity={0}/>
        </mesh>
    )
}
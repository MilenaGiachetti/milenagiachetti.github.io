import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import {useThree} from '@react-three/fiber';
import {useFrame, useLoader} from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader'

export default function Model(props) {
    const mesh = useRef();
    const { camera } = useThree();
    const [position, setPosition] = useState([0,0,0]);
    const [colorMap] = useLoader(TextureLoader, [`${process.env.PUBLIC_URL}/images/${props.image}.jpg`])
    useFrame(() => {
        mesh.current.material.opacity = THREE.MathUtils.lerp(mesh.current.material.opacity, props.fading ? 0 : 1, 0.1);
    })
    useEffect(() => {
        var vector = new THREE.Vector3(props.cursor.x, props.cursor.y, 0).unproject(camera);
        if (mesh.current.position.x !== vector.x * 2 || mesh.current.position.y !== vector.y * 2){
            setPosition([vector.x * 2, vector.y * 2, 0]);
        }
    }, [props, camera])

    return (
        <>
            <mesh
            ref={mesh}
            position={position}
            >
                <planeGeometry args={[2, 2]}/>
                <meshBasicMaterial map={colorMap} transparent={true}/>
            </mesh>
        </>
    )
}
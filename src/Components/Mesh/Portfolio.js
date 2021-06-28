/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF(`${process.env.PUBLIC_URL}/portfolio.glb`);
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[7, -4, 0]} rotation={[0, -0.3, 0]} scale={[4.06 * 1.2, 0.43 * 1.2, 0.14 * 1.2]}>
        <mesh geometry={nodes.Plane006.geometry} material={materials['Material.001']} />
        <mesh geometry={nodes.Plane006_1.geometry} material={materials['Material.004']} />
        <mesh geometry={nodes.Plane006_2.geometry} material={materials['Material.005']} />
        <mesh geometry={nodes.Plane006_3.geometry} material={materials.Material} />
        <mesh geometry={nodes.Plane006_4.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Plane006_5.geometry} material={materials['Material.006']} />
        <mesh geometry={nodes.Plane006_6.geometry} material={materials['Material.002']} />
      </group>
    </group>
  )
}

useGLTF.preload('/portfolio.glb')

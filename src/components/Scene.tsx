import { Environment, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, type ReactElement } from 'react'
import { Desk } from './Desk'
import { CanvasContainer } from '../styles/canvas.styled'

function Scene (): ReactElement {
  return (
    <CanvasContainer>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 3.5]} />
        <Suspense fallback={null}>
          <Desk />
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </CanvasContainer>
  )
}

export default Scene

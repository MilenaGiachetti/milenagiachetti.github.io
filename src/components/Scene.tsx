import React, { Suspense, type ReactElement } from 'react'

import { Environment, OrthographicCamera, useContextBridge } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { type DefaultTheme } from 'styled-components'

import ModelButtons from '@/components/ModelButtons'
import { Room } from '@/components/Room'
import ThreeLoader from '@/components/ThreeLoader'
import { CanvasContainer } from '@/styles/canvas.styled'

interface Props {
  ThemeContext: React.Context<DefaultTheme>
}

function Scene ({ ThemeContext }: Props): ReactElement {
  const ContextBridge = useContextBridge(ThemeContext)

  return (
    <CanvasContainer>
      <Canvas dpr={[1, 2]}>
        <Suspense fallback={<ThreeLoader />}>
          <ContextBridge>
            {/* Camera in 60deg */}
            {/* eslint react/no-unknown-property: 0 */}
            <group position={[7, 7.68, 7]} rotation={[1.18, 0.36, -0.71]}>
              <OrthographicCamera zoom={75} makeDefault far={100} near={0.1} rotation={[-Math.PI / 2, 0, 0]} />
            </group>
            {/* Camera in 54deg */}
            {/* <group position={[7, 8.83, 7]} rotation={[1.11, 0.42, -0.68]}>
              <OrthographicCamera zoom={55} makeDefault far={100} near={0.1} rotation={[-Math.PI / 2, 0, 0]} />
            </group> */}
            <ModelButtons />
            <Room />
          </ContextBridge>
          <Environment preset="warehouse" />
        </Suspense>
      </Canvas>
    </CanvasContainer>
  )
}

export default Scene

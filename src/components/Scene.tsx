import React, { Suspense, type ReactElement } from 'react'

import { Environment, PerspectiveCamera, useContextBridge } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { type DefaultTheme } from 'styled-components'

import { Desk } from '@/components/Desk'
import ThreeLoader from '@/components/ThreeLoader'
import { CanvasContainer } from '@/styles/canvas.styled'

interface Props {
  ThemeContext: React.Context<DefaultTheme>
}

function Scene ({ ThemeContext }: Props): ReactElement {
  const ContextBridge = useContextBridge(ThemeContext)

  return (
    <CanvasContainer>
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 3.5]} />
        <Suspense fallback={<ThreeLoader />}>
          <ContextBridge>
            <Desk />
          </ContextBridge>
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </CanvasContainer>
  )
}

export default Scene

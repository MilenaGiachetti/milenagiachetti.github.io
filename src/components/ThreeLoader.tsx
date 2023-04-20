import React, { type ReactElement } from 'react'

import { Html, useProgress } from '@react-three/drei'

function ThreeLoader (): ReactElement {
  const { progress } = useProgress()
  return (
    <Html center>{progress} % loaded</Html>
  )
}

export default ThreeLoader

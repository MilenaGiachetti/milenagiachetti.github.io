import React, { type ReactElement } from 'react'
import { useParams } from 'react-router-dom'

function Project (): ReactElement {
  const { projectId } = useParams()

  return (
    <div>Project: {projectId}</div>
  )
}

export default Project

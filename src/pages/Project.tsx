import React from 'react'
import { useParams } from 'react-router-dom';

type Props = {}

function Project({}: Props) {
  const {projectId} = useParams();

  return (
    <div>Project: {projectId}</div>
  )
}

export default Project
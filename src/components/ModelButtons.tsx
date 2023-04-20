import React, { type ReactElement } from 'react'

import { DiReact } from 'react-icons/di'
import { FiArchive, FiBook, FiGithub } from 'react-icons/fi'

import ModelButton from './ModelButton'
import { type modelButton } from '@/types/modelButton'

const buttonsData: modelButton[] = [
  {
    position: [1, 1.75, 0],
    iconElement: <DiReact size={26} />,
    label: 'technologies.title',
    section: 'work'
  },
  {
    position: [0.4, 1, 0],
    iconElement: <FiArchive size={18} />,
    label: 'experience.title',
    section: 'technologies'
  },
  {
    position: [-0.5, 0.75, 0],
    iconElement: <FiGithub size={18} />,
    label: 'projects.title',
    section: 'projects'
  },
  {
    position: [1.25, 0.5, 0],
    iconElement: <FiBook size={18} />,
    label: 'education.title',
    section: 'studies'
  }
]

const ModelButtons = (): ReactElement => {
  return (
    <>
      {buttonsData.map(({ position, iconElement, label, section }) => (
        <ModelButton
          position={position}
          iconElement={iconElement}
          label={label}
          section={section}
          key={section}
        />
      ))}
    </>
  )
}

export default ModelButtons

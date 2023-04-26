import React, { type ReactElement } from 'react'

import { DiReact } from 'react-icons/di'
import { FiArchive, FiBook, FiGithub } from 'react-icons/fi'

import ModelButton from './ModelButton'
import { type modelButton } from '@/types/modelButton'

const buttonsData: modelButton[] = [
  {
    position: [-1.18, 3.07, -1.96],
    iconElement: <DiReact size={26} />,
    label: 'technologies.title',
    section: 'technologies'
  },
  {
    position: [-1.56, 1.62, 0.87],
    iconElement: <FiArchive size={18} />,
    label: 'experience.title',
    section: 'work'
  },
  {
    position: [-1.69, 2.63, 1.44],
    iconElement: <FiGithub size={18} />,
    label: 'projects.title',
    section: 'projects'
  },
  {
    position: [0.85, 1.19, -1.6],
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

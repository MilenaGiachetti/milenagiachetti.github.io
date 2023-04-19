import React, { type ReactElement, useEffect, useState } from 'react'

import routes from '@/constants/routes'
import projects from '@/data/projects'
import technologies from '@/data/technologies'
import { Arrow, ArrowButton, Filter, FiltersContainer, NoResults, ProjectStyled } from '@/styles/projects.styled'
import { type Project } from '@/types/project'

const Projects = (): ReactElement => {
  const [filter, setFilter] = useState('all')
  const [filteredProjects, setFilteredProjects] = useState(projects)

  useEffect(() => {
    const newFilteredProjects = filter === 'all' ? projects : projects.filter((p) => p.technologies.includes(filter))
    setFilteredProjects(newFilteredProjects)
  }, [filter])

  return (
    <>
      <FiltersContainer>
        <Filter onClick={() => { setFilter('all') }} type='button' active={filter === 'all'}>ALL</Filter>
        {
          technologies.filter((t) => t.isProjectFilter).map((t) => (
            <Filter active={filter === t.name} key={t.name} onClick={() => { setFilter(t.name) }} type='button'>{t.name}</Filter>
          ))
        }
      </FiltersContainer>
      <div>
        {
          (filteredProjects.length > 0)
            ? filteredProjects.map(({ order, name, id }: Project) => (
              <ProjectStyled key={id}>
                <h3>{order} - {name}</h3>
                <ArrowButton to={`${routes.PROJECT_BASE}${id}`}>
                  <Arrow />
                </ArrowButton>
              </ProjectStyled>
            ))
            : <NoResults>No results</NoResults>
        }
      </div>
    </>
  )
}

export default Projects

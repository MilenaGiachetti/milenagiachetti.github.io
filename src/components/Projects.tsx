import React, { useEffect, useState } from 'react'
import projects from '../data/projects'
import technologies from '../data/technologies'
import { Project } from '../types/project';
import { Arrow, ArrowButton, Filter, FiltersContainer, NoResults, ProjectStyled } from '../styles/projects.styled';
import routes from '../constants/routes';

const Projects = () => {
  const [ filter, setFilter ] = useState('all');
  const [ filteredProjects, setFilteredProjects ] = useState(projects);

  useEffect(() => {
    const newFilteredProjects = filter === "all" ? projects : projects.filter((p) => p.technologies.includes(filter))
    setFilteredProjects(newFilteredProjects)
  }, [filter])
  

  return (
    <>
      <FiltersContainer>
        <Filter onClick={() => setFilter('all')} type='button' active={filter === 'all'}>ALL</Filter>
        {
          technologies.filter((t) => t.isProjectFilter).map((t) => (
            <Filter onClick={() => setFilter(t.name)} type='button' active={filter === t.name}>{t.name}</Filter>
          ))
        }
      </FiltersContainer>    
      <div>
        {
          filteredProjects.length 
          ? filteredProjects.map(({order, name, id}: Project) => (
            <ProjectStyled key={id}>
              <h3>{order} - {name}</h3>
              <ArrowButton to={`${routes.PROJECT_BASE}${id}`}>
                <Arrow/>
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
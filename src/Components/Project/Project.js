import classes from './Project.module.scss';

function Project({project}) {
	return (
        <article className={classes.project}>
            {project.screenPath ?
                <img src={project.screenPath} alt={`Screenshot de ${project.projectName}`} className={classes.projectScreen}/> 
                : null
            }
            <div className={classes.projectContent}>
                <h3 className={classes.projectName}>{project.projectName}</h3>
                <p className={classes.projectTech}>{project.projectTech}</p>
                <p className={classes.projectDescription}>{project.projectDescription}</p>
                <div className={classes.projectBtnCtn}>
                    <a href={project.githubLink} target='_blank' rel='noreferrer' className={classes.projectBtn}>
                        Ver código
                    </a>
                    {
                        project.liveLink !== undefined ?
                        <a href={project.liveLink} target='_blank' rel='noreferrer' className={classes.codeLink}>
                            <span></span>
                        </a> :
                        ''
                    }
                </div>
            </div>
        </article>
	)
}

export default Project;
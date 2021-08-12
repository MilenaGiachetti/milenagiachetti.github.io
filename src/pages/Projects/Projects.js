import classes from './Projects.module.scss';
import {useState, useRef} from 'react';
import projectsData from './data/contentData';
import ScreenImage from '../../Components/ScreenImage/ScreenImage';
import ProjectCanvas from '../../Components/ProjectCanvas/ProjectCanvas';

function Projects(props) {
    const canvasCtn = useRef();
    const [otherProject, setOtherProject] = useState("image1");
    const [otherProjectFading, setOtherProjectFading] = useState(true);

    const otherProjectsMouseEnterHandler = (image) => {
        setOtherProject(image);
        setOtherProjectFading(false);
    }

    const otherProjectsMouseLeaveHandler = (image) => {
        setOtherProject(image)
        setOtherProjectFading(true);
    }

	return (
        <section className={classes.Projects} id="projects" ref={props.refFx}>
            <div className={classes.content}>
                <h2>Proyectos</h2>
                {projectsData.map(project=> {
                    return (
                    // separate component, change to article?
                    <div className={classes.project} key={project.projectName}>
                        <div className={classes.projectContent}>
                            {project.screenPath ?
                                <ScreenImage screenPath={project.screenPath} projectName={project.projectName}/> :
                                null
                            }
                        </div>
                        <div className={classes.projectTextContent}>
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
                    </div>
                    )
                })}
            </div>
            <div className={classes.otherProjects} ref={canvasCtn}>
                <ProjectCanvas otherProject={otherProject} otherProjectFading={otherProjectFading}/>
                <h3>Otros Proyectos</h3>
                <a href="/#top" target="_blank" rel="noreferrer" className={classes.otherProject} onMouseEnter={()=>otherProjectsMouseEnterHandler("image1")} onMouseLeave={()=>otherProjectsMouseLeaveHandler("image1")}>
                    <div>
                        <p>Resto Backend</p>
                        <small>NODE | EXPRESS | MySQL</small>
                    </div>
                    <div className={classes.codeLink}><span></span></div>
                </a>
                <a href="/#top" target="_blank" rel="noreferrer" className={classes.otherProject} onMouseEnter={()=>otherProjectsMouseEnterHandler("image2")} onMouseLeave={()=>otherProjectsMouseLeaveHandler("image2")}>
                    <div>
                        <p>Resto Backend</p>
                        <small>NODE | EXPRESS | MySQL</small>
                    </div>
                    <div className={classes.codeLink}><span></span></div>
                </a>
                <a href="/#top" target="_blank" rel="noreferrer" className={classes.otherProject} onMouseEnter={()=>otherProjectsMouseEnterHandler("image3")} onMouseLeave={()=>otherProjectsMouseLeaveHandler("image3")}>
                    <div>
                        <p>Resto Backend</p>
                        <small>NODE | EXPRESS | MySQL</small>
                    </div>
                    <div className={classes.codeLink}><span></span></div>
                </a>
            </div>
        </section>
	);
}

export default Projects;
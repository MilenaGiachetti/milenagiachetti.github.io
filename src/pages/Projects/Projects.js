import classes from './Projects.module.scss';
import {useState, useRef} from 'react';
import {projectsData, otherProjectsData} from './data/contentData';
import Project from '../../Components/Project/Project';
import OtherProject from '../../Components/OtherProject/OtherProject';
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
            <h2 className="right">Proyectos</h2>
            {projectsData.map(project=> {
                return (
                    <Project project={project} key={project.projectName}/>
                )
            })}
            <div className={classes.otherProjects} ref={canvasCtn}>
                <ProjectCanvas otherProject={otherProject} otherProjectFading={otherProjectFading}/>
                <h3>Otros Proyectos</h3>
                {otherProjectsData.map(project=> {
                    return (
                        <OtherProject project={project} key={project.number} mouseEnterHandler={otherProjectsMouseEnterHandler} mouseLeaveHandler={otherProjectsMouseLeaveHandler}/>
                    )
                })}
            </div>
        </section>
	);
}

export default Projects;
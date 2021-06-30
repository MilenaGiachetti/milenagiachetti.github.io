import classes from './Projects.module.scss';
import {useState, useRef} from 'react';
import projectsData from './data/contentData';
import ScreenImage from '../../Components/ScreenImage/ScreenImage';
import CustomCanvas from '../../Components/ImageCanvas/ImageCanvas';

function Projects(props) {
    const canvasCtn = useRef()
    const [proyect, setProyect] = useState(0);
    const [otherProyect, setOtherProyect] = useState("image1");
    const [otherProyectFading, setOtherProyectFading] = useState(true);

    // var style = { '--bg-image': `url(${projectsData[proyect].screenPath})`};
    const clickHandler = (n) => {
        setProyect(previousState => {
            if (n === 1 && previousState === (projectsData.length - 1)) {
                return 0;
            } else if (n === -1 && previousState === 0) {
                return projectsData.length - 1;
            }
            return previousState + n;
        })
    }

    const otherProjectsMouseEnterHandler = (image) => {
        setOtherProyect(image);
        setOtherProyectFading(false);
    }


    const otherProjectsMouseLeaveHandler = (image) => {
        setOtherProyect(image)
        setOtherProyectFading(true);
    }

	return (
        <section className={classes.Proyects} id="projects" ref={props.refFx}>
            {/* <div className={classes.title} data-point='ProyectosProyectosProyectosProyectos'></div> */}
            <div className={classes.content}>
                <h2>Proyectos</h2>
                <div className={classes.proyect}>
                    <div className={classes.proyectContent}>
                        {projectsData[proyect].screenPath ?
                            <ScreenImage screenPath={projectsData[proyect].screenPath} proyectName={projectsData[proyect].proyectName}/> :
                            null
                        }
                    </div>
                    <div className={classes.proyectTextContent}>
                        <h3 className={classes.proyectName}>{projectsData[proyect].proyectName}</h3>
                        <p className={classes.proyectTech}>{projectsData[proyect].proyectTech}</p>
                        <p className={classes.proyectDescription}>{projectsData[proyect].proyectDescription}</p>
                        <div className={classes.proyectBtnCtn}>
                            <a href={projectsData[proyect].githubLink} target='_blank' rel='noreferrer' className={classes.proyectBtn}>
                                Ver código
                            </a>
                            {
                                projectsData[proyect].liveLink !== undefined ?
                                <a href={projectsData[proyect].liveLink} target='_blank' rel='noreferrer' className={classes.codeLink}>
                                    <span></span>
                                </a> :
                                ''
                            }
                        </div>
                    </div>
                    <div className={classes.changeProyectBtnCtn}>
                        <button onClick={() => clickHandler(-1)} title='Ver proyecto anterior' className={`${classes.changeProyect} ${classes.left}`}>
                            <span className={classes.titleCtaArrow}></span>
                        </button>
                        <button onClick={() => clickHandler(1)} title='Ver proyecto siguiente' className={classes.changeProyect}>
                            <span className={classes.titleCtaArrow}></span>
                        </button>
                    </div>
                </div>
            </div>
            <div className={classes.otherProjects} ref={canvasCtn}>
                <CustomCanvas otherProyect={otherProyect} otherProyectFading={otherProyectFading}/>
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
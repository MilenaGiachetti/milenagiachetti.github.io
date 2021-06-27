import classes from './Projects.module.scss';
import {useState, useRef, useEffect} from 'react';
import React from 'react';
import projectsData from './data/contentData';
import ScreenImage from '../../Components/ScreenImage/ScreenImage';
import { gsap } from "gsap";

function Projects() {
    const [proyect, setProyect] = useState(0);
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

	return (
        <section className={classes.Proyects}>
            {/* <div className={classes.title} data-point='ProyectosProyectosProyectosProyectos'></div> */}
            <div className={classes.content}>
                <h2>Proyectos</h2>
                <div className={classes.proyect}>
                    {/* <div style={style} className={classes.proyectImage}></div> */}
                    <div className={classes.proyectContent}>
                        {/* <Canvas>
                            <ambientLight />
                            <pointLight position={[10, 10, 10]} />
                            <Box position={[0, 0, 0]} innerSize={3.5} outerSize={4} baseColor="red"/>
                            <Box position={[0, 0, -0.1]} innerSize={3} outerSize={4.1} baseColor="yellow"/>
                            <Box position={[0, 0, -0.2]} innerSize={2.5} outerSize={4.2} baseColor="blue"/>
                        </Canvas> */}
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
                            {
                                projectsData[proyect].liveLink !== undefined ?
                                <a href={projectsData[proyect].liveLink} target='_blank' rel='noreferrer' className={classes.proyectBtn}>
                                    Ver en vivo
                                </a> :
                                ''
                            }
                            <a href={projectsData[proyect].githubLink} target='_blank' rel='noreferrer' className={classes.proyectBtn}>
                                Ver código
                            </a>
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
                    <div className={classes.proyectBg}>
                        <p className={classes.proyectNumber} data-number={projectsData[proyect].number}>{projectsData[proyect].number}</p>
                    </div>
                </div>
            </div>
        </section>
	);
}

export default Projects;
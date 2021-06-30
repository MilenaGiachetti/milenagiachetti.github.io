import classes from './Projects.module.scss';
import {useState, useRef} from 'react';
import projectsData from './data/contentData';
import ScreenImage from '../../Components/ScreenImage/ScreenImage';
import CustomCanvas from '../../Components/ImageCanvas/ImageCanvas';

function Projects(props) {
    const canvasCtn = useRef()
    const [proyect, setProyect] = useState(0);
    const [panel, setPanel] = useState(false);
    const [otherProyect, setOtherProyect] = useState("image1");
    const [otherProyectFading, setOtherProyectFading] = useState(true);
    const [cursor, setCursor] = useState({x: 0, y:0});

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

    const togglePanelHandler = (panel) => {
        setPanel((previousState)=>{
            if(previousState === panel) {
                return false;
            } else {
                return panel;
            }
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

    const mouseMoveHandler = (e) => {
        // const x = e.clientX / canvasCtn.current.clientWidth - 0.5;
        // const y = -(e.clientY  / canvasCtn.current.clientHeight - 0.5);
        
        const x = e.clientX / window.innerWidth - 0.5;
        const y = -(e.clientY  / window.innerHeight - 0.5);
        // const x = (e.clientX / canvasCtn.current.clientWidth) * 2 - 1; 
        // const y = -(e.clientY / canvasCtn.current.clientHeight) * 2 + 1;
        setCursor({x,y});
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
            <div className={classes.otherProjects} ref={canvasCtn} onMouseMove={(e)=>mouseMoveHandler(e)}>
                <CustomCanvas otherProyect={otherProyect} cursor={cursor} otherProyectFading={otherProyectFading}/>
                <h3>Otros Proyectos</h3>
                {/* onClick open text with more info -> link shouldnt activate button */}
                <div className={classes.otherProject} onMouseEnter={()=>otherProjectsMouseEnterHandler("image1")} onMouseLeave={()=>otherProjectsMouseLeaveHandler("image1")}>
                    <button type="button" className={classes.otherProjectPanelHeading} onClick={()=>togglePanelHandler('1')}>
                        <div>
                            <p>Resto Backend</p>
                            <small>NODE | EXPRESS | MySQL</small>
                        </div>
                        <a href="/#top" target="_blank" rel="noreferrer" className={classes.codeLink}><span></span></a>
                    </button>
                    <div className={panel === '1' ?  `${classes.otherProjectPanelContent} ${classes.otherProjectPanelOpen}` : classes.otherProjectPanelContent}>
                        <p>Desarrollo de un backend para un restaurante ficticio utilizando NodeJS, Express y MySQL. CRUD de usuarios, productos y ordenes, login y sistema de autorización y autenticación de usuarios realizado con Json Web Tokens.</p>
                    </div>
                </div>
                <div className={classes.otherProject} onMouseEnter={()=>otherProjectsMouseEnterHandler("image2")} onMouseLeave={()=>otherProjectsMouseLeaveHandler("image2")}>
                    <button type="button" className={classes.otherProjectPanelHeading} onClick={()=>togglePanelHandler('2')}>
                        <div>
                            <p>Resto Backend</p>
                            <small>NODE | EXPRESS | MySQL</small>
                        </div>
                        <a href="/#top" target="_blank" rel="noreferrer" className={classes.codeLink}><span></span></a>
                    </button>
                    <div className={panel === '2' ?  `${classes.otherProjectPanelContent} ${classes.otherProjectPanelOpen}` : classes.otherProjectPanelContent}>
                        <p>Desarrollo de un backend para un restaurante ficticio utilizando NodeJS, Express y MySQL. CRUD de usuarios, productos y ordenes, login y sistema de autorización y autenticación de usuarios realizado con Json Web Tokens.</p>
                    </div>
                </div>
                <div className={classes.otherProject} onMouseEnter={()=>otherProjectsMouseEnterHandler("image3")} onMouseLeave={()=>otherProjectsMouseLeaveHandler("image3")}>
                    <button type="button" className={classes.otherProjectPanelHeading} onClick={()=>togglePanelHandler('3')}>
                        <div>
                            <p>Resto Backend</p>
                            <small>NODE | EXPRESS | MySQL</small>
                        </div>
                        <a href="/#top" target="_blank" rel="noreferrer" className={classes.codeLink}><span></span></a>
                    </button>
                    <div className={panel === '3' ?  `${classes.otherProjectPanelContent} ${classes.otherProjectPanelOpen}` : classes.otherProjectPanelContent}>
                        <p>Desarrollo de un backend para un restaurante ficticio utilizando NodeJS, Express y MySQL. CRUD de usuarios, productos y ordenes, login y sistema de autorización y autenticación de usuarios realizado con Json Web Tokens.</p>
                    </div>
                </div>
            </div>
        </section>
	);
}

export default Projects;
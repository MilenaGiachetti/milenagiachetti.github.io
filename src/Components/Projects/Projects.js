import classes from './Projects.module.scss';
import asset from './../../assets/images/old_computer.png';
import React from 'react';

function Projects() {
    var style = { "--bg-image": `url(${asset})`};

	return (
        <section className={classes.Proyects}>
            <div className={classes.title} data-point="ProyectosProyectosProyectosProyectosProyectosProyectosProyectosProyectosProyectosProyectosProyectosProyectosProyectosProyectos"></div>
            <div className={classes.content}>
                <h2>Proyectos</h2>
                <div className={classes.proyect}>
                    <div style={style} className={classes.proyectImage}></div>
                    <p className={classes.proyectNumber} data-number="01">01</p>
                    <div className={classes.proyectTextContent}>
                        <h3 className={classes.proyectName}>Experiencia 3D</h3>
                        <p className={classes.proyectTech}>THREE.JS | CANNON-ES | WEBPACK</p>
                        <p className={classes.proyectDescription}>Experiencia Web 3D construída con three.js y cannon-es y modelo y animaciones de mixamo. En proceso.</p>
                        <div className={classes.proyectBtnCtn}>
                            <a href="http://localhost:3000/projects" target="_blank" rel="noreferrer" className={classes.proyectBtn}>
                                Ver en vivo
                            </a>
                            <a href="http://localhost:3000/projects" target="_blank" rel="noreferrer" className={classes.proyectBtn}>
                                Ver código
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
	);
}

export default Projects;
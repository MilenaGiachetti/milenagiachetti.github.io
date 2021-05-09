import classes from './Projects.module.scss';
import {useState} from 'react';
import asset from './../../assets/images/projectsScreens/old_computer.png';
import React from 'react';

const projectsData = [
    {
        number: '01',
        proyectName: 'Experiencia 3D',
        proyectTech: 'THREE.JS | CANNON-ES | WEBPACK',
        proyectDescription: 'Experiencia Web 3D construída con three.js y cannon-es y modelo y animaciones de mixamo. En proceso.',
        liveLink: 'https://milenagiachetti.github.io/mixamo-three.js/',
        githubLink: 'https://github.com/MilenaGiachetti/mixamo-three.js',
        imagePath: asset
    },
    {
        number: '02',
        proyectName: 'Gif.OS',
        proyectTech: 'JS | CSS | API | RecordRTC',
        proyectDescription: 'Proyecto construído con la API de giphy, librería RecordRTC y Media Capture and Streams API.',
        liveLink: 'https://milenagiachetti.github.io/guifos/',
        githubLink: 'https://github.com/MilenaGiachetti/guifos',
        imagePath: asset
    },
    {
        number: '03',
        proyectName: 'React Chat',
        proyectTech: 'REACT | NODE | EXPRESS | MySQL | SOCKET.IO',
        proyectDescription: 'Proyecto chat en React para aprender sobre WebSockets y Socket.io',
        liveLink: 'https://github.com/MilenaGiachetti/react-chat',
        imagePath: asset
    },
    {
        number: '04',
        proyectName: 'Delilah Resto Backend',
        proyectTech: 'NODE | EXPRESS | MySQL',
        proyectDescription: 'Desarrollo de un backend para un restaurante ficticio utilizando NodeJS, Express y MySQL. CRUD de usuarios, productos y ordenes, login y un sistema de autorización y autenticación de usuarios realizado con Json Web Tokens.',
        githubLink: 'https://github.com/MilenaGiachetti/delilahresto_back',
        imagePath: asset
    }
];

function Projects() {
    const [proyect, setProyect] = useState(0);
    var style = { '--bg-image': `url(${projectsData[proyect].imagePath})`};

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
            <div className={classes.title} data-point='ProyectosProyectosProyectosProyectos'></div>
            <div className={classes.content}>
                <h2>Proyectos</h2>
                <div className={classes.proyect}>
                    <div style={style} className={classes.proyectImage}></div>
                    <p className={classes.proyectNumber} data-number={projectsData[proyect].number}>{projectsData[proyect].number}</p>
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
                </div>
                <div className={classes.changeProyectBtnCtn}>
                    <button onClick={() => clickHandler(-1)} title='Ver proyecto anterior' className={classes.changeProyect}>
                        <span className={`${classes.titleCtaArrow} ${classes.left}`}></span>
                    </button>
                    <button onClick={() => clickHandler(1)} title='Ver proyecto siguiente' className={classes.changeProyect}>
                        <span className={classes.titleCtaArrow}></span>
                    </button>
                </div>
            </div>
        </section>
	);
}

export default Projects;
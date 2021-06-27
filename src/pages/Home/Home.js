import classes from './Home.module.scss';
import React from 'react';
import {Link} from 'react-router-dom';

function Home(props) {
	return (
        <section className={classes.Home}>
            <div className={classes.title} id="home" ref={props.refFx}>
                <h2 className={props.theme === 'dark' ? classes.lined : ''}>Milena Giachetti</h2>
                <p className={classes.titlePosition}>Desarrolladora Web</p>
                <a href="mailto:giachettimilena@gmail.com?Subject=Contacto%20desde%20portfolio" target="_blank" rel="noreferrer" className={classes.titleEmail}aria-label="Mail">giachettimilena@gmail.com</a>
                <div className={classes.titleLine}></div>
                <div className={classes.titleLine}></div>
                <div>
                    <Link to={{pathname: "/projects"}} className={classes.titleCta}>
                        <div className={classes.titleCtaLine}></div>
                        <p className={classes.titleCtaContent}>Ver Proyectos</p>
                    </Link>
                </div>
            </div>
        </section>
	);
}

export default Home;
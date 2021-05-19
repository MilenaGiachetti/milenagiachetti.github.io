import classes from './Home.module.scss';

import CloudBig from '../../Components/Clouds/CloudBig';
import CloudMedium from '../../Components/Clouds/CloudMedium';
import CloudSmall from '../../Components/Clouds/CloudSmall';

import {Link} from 'react-router-dom';

function Home() {
	return (
        <section className={classes.Home}>
            <div className={classes.title}>
                <h2>Milena Giachetti</h2>
                <p className={classes.titlePosition}>Desarrolladora Web</p>
                <a href="mailto:giachettimilena@gmail.com?Subject=Contacto%20desde%20portfolio" target="_blank" rel="noreferrer" className={classes.titleEmail}aria-label="Mail">giachettimilena@gmail.com</a>
                <div className={classes.titleArrow}></div>
                <div>
                    <Link to={{pathname: "/projects"}} className={classes.titleCta}>
                        <div className={classes.titleCtaArrow}></div>
                        <p className={classes.titleCtaContent}>Ver Proyectos</p>
                    </Link>
                </div>
            </div>
            <div className={classes.background}>
                <div className={classes.sunset}>
                    <div className={classes.sun}></div>
                    <CloudBig className={classes.cloudBig} color={'rgba(255, 255, 255, 0.5)'} id="1"/>
                    <CloudBig className={classes.cloudBig} color={'rgba(255, 255, 255, 0.25)'} id="2"/>
                    <CloudBig className={classes.cloudBig} color={'rgba(255, 255, 255, 0.75)'} id="3"/>
                    <CloudBig className={classes.cloudBig} color={'rgba(255, 255, 255, 0.95)'} id="4"/>
                    <CloudMedium className={classes.cloudMedium} color={'rgba(255, 255, 255, 0.25)'} id="4"/>
                    <CloudSmall className={classes.cloudSmall} color={'rgba(255, 255, 255, 0.65)'} id="4"/>
                </div>
            </div>
        </section>
	);
}

export default Home;
import {useEffect, useRef} from 'react';
import { gsap } from "gsap";
import classes from './Home.module.scss';

import CloudBig from '../../Components/Clouds/CloudBig';
import CloudMedium from '../../Components/Clouds/CloudMedium';
import CloudSmall from '../../Components/Clouds/CloudSmall';

import {Link} from 'react-router-dom';

function Home(props) {
    let background = useRef(null);
    let title = useRef(null);

    useEffect(() => {
        gsap.from(title, {
            delay: 0,
            ease: "power3.out",
            x: -200,
        })        
        gsap.from(background, {
            delay: 0,
            ease: "power3.out",
            x:200,
        });
        gsap.to(title, {
            duration: 0.8,
            ease: "power3.out",
            x: 0,
        });
        gsap.to(background, {
            duration: 0.8,
            ease: "power3.out",
            x: 0,
        });
    }, [title, background]);

	return (
        <section className={classes.Home}>
            <div className={classes.title} ref={el => (title = el)}>
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
            <div className={classes.backgroundMobile}>
                <CloudBig className={classes.cloudBig} color="rgba(28, 114, 147, 0.1)" id="mob-big-0"/>
                <CloudMedium className={classes.cloudMedium} color="rgba(28, 114, 147, 0.2)" id="mob-med-0"/>
            </div>
            <div className={classes.background} ref={el => (background = el)}>
                <div className={classes.sunset}>
                    <div className={classes.sun}></div>
                    <CloudBig className={classes.cloudBig} color={props.theme === 'light' ? 'rgba(243, 246, 244, 0.5)' : 'rgba(14, 20, 40, 0.5)'} id="desk-big-1"/>
                    <CloudBig className={classes.cloudBig} color={props.theme === 'light' ? 'rgba(243, 246, 244, 0.75)' : 'rgba(14, 20, 40, 0.75)'} id="desk-big-2"/>
                    <CloudBig className={classes.cloudBig} color={props.theme === 'light' ? 'rgba(243, 246, 244, 0.95)' : 'rgba(14, 20, 40, 0.95)'} id="desk-big-3"/>
                    <CloudBig className={classes.cloudBig} color={props.theme === 'light' ? 'rgba(243, 246, 244, 0.25)' : 'rgba(14, 20, 40, 0.25)'} id="desk-big-4"/>
                    <CloudMedium className={classes.cloudMedium} color={props.theme === 'light' ? 'rgba(243, 246, 244, 0.25)' : 'rgba(14, 20, 40, 0.25)'} id="desk-med-1"/>
                    <CloudSmall className={classes.cloudSmall} color={props.theme === 'light' ? 'rgba(243, 246, 244, 0.65)' : 'rgba(14, 20, 40, 0.65)'} id="desk-sm-1"/>
                </div>
            </div>
        </section>
	);
}

export default Home;
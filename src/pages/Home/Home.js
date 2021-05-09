import classes from './Home.module.scss';
import {Link} from 'react-router-dom';

function Home() {
	return (
        <section className={classes.Home}>
            <div className={classes.title}>
                <p className={classes.titleGreeting}>hola! soy</p>
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
        </section>
	);
}

export default Home;
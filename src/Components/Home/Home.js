import classes from './Home.module.scss';
import { Link} from 'react-router-dom';

function Home() {
	return (
        <section className={classes.title}>
            <p className={classes.titleGreeting}>hola! soy</p>
            <h1>Milena Giachetti</h1>
            <p className={classes.titlePosition}>Desarrolladora Web</p>
            <a href="mailto:giachettimilena@gmail.com?Subject=Contacto%20desde%20portfolio" target="_blank" rel="noreferrer" className={classes.titleEmail}>giachettimilena@gmail.com</a>
            <div className={classes.titleArrow}></div>
            <div>
                <Link to={{pathname: "/projects"}} className={classes.titleCta}>
                    <div className={classes.titleCtaArrow}></div>
                    <p className={classes.titleCtaContent}>Ver Proyectos</p>
				</Link>
            </div>
        </section>
	);
}

export default Home;
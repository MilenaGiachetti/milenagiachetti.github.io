import classes from './App.module.scss';
import { Route, NavLink, Switch, Redirect, Link} from 'react-router-dom';
import Home from './Components/Home/Home';

function App() {
	return (
		<>
			<header>
				<Link to={{pathname: "/"}} className={classes.logo}>
					<p className={classes.logoText}>g_</p>
				</Link>
				<nav className={classes.nav}>
					<ul className={classes.navList}>
						<li>
							<NavLink to="/" exact activeClassName={classes.currentNavLink} className={classes.navLink}>Home</NavLink>
						</li>
						<li>
							<NavLink to="/projects" exact activeClassName={classes.currentNavLink} className={classes.navLink}>Proyectos</NavLink>
						</li>
						<li>
							<NavLink to="/tech" exact activeClassName={classes.currentNavLink} className={classes.navLink}>Tech</NavLink>
						</li>
					</ul>
				</nav>
			</header>
			<main>
				<Switch>
					<Route path="/" exact component={Home}/>
					<Route path="/projects" exact component={Home}/>
					<Route path="/tech" exact component={Home}/>
					<Redirect to="/" />
				</Switch>
			</main>
			<footer>
				<a href="mailto:giachettimilena@gmail.com?Subject=Contacto%20desde%20portfolio" target="_blank" rel="noreferrer" className={classes.socialLink}>
					<p className={classes.socialLinkExtra}>E-mail</p>
					<i className={`${classes.smallIcon} fas fa-envelope`}></i>
				</a>
				<a href="https://www.linkedin.com/in/milena-giachetti-7640a21b8/" target="_blank" rel="noreferrer" className={classes.socialLink}>
					<p className={classes.socialLinkExtra}>Linkedin</p>
					<i className={`${classes.smallIcon} fab fa-linkedin-in`}></i>
				</a>
				<a href="https://github.com/MilenaGiachetti" target="_blank" rel="noreferrer" className={classes.socialLink}>
					<p className={classes.socialLinkExtra}>Github</p>
					<i className={`${classes.smallIcon} fab fa-github`}></i>
				</a>
			</footer>
		</>
	);
}

export default App;

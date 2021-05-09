import classes from './App.module.scss';
import {useState, useEffect} from 'react';
import {Route, NavLink, Switch, Redirect, Link} from 'react-router-dom';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Tech from './Components/Tech/Tech';

function App() {
	const [theme, setTheme] = useState("light");
	const [menuOpen, setMenuOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

	useEffect(() => {
		window.addEventListener("resize", () => setIsMobile(window.innerWidth <= 767));
	}, []);

	const toggleThemeHandler = () => {
        var newTheme = (theme === "dark" ? "light" : "dark");
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme)
    }
	
	const menuHandler = () => {
		setMenuOpen(prevState => {
			return !prevState;
		})
	}

	return (
		<>
			<header>
				<h1>Milena Giachetti</h1>
				<Link to={{pathname: "/"}} className={classes.logo}>
					<p className={classes.logoText}>g_</p>
				</Link>
				{
					isMobile ?
					<button className={`${classes.burgerBtn} ${menuOpen ? classes.opened : ''}`} onClick={menuHandler} aria-label="Main Menu">
						<svg width="100" height="100" viewBox="0 0 100 100">
							<path className={`${classes.line} ${classes.line1}`} d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" aria-expanded={menuOpen ? 'true': 'false'}/>
							<path className={`${classes.line} ${classes.line2}`} d="M 20,50 H 80" aria-expanded={menuOpen ? 'true': 'false'}/>
							<path className={`${classes.line} ${classes.line3}`} d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" aria-expanded={menuOpen ? 'true': 'false'}/>
						</svg>
					</button>
					:
					null
				}
				{
					!isMobile || menuOpen ?
					<nav className={isMobile ? classes.mobileNav : classes.nav}>
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
					:
					null
				}
			</header>
			<main>
				<Switch>
					<Route path="/" exact component={Home}/>
					<Route path="/projects" exact component={Projects}/>
					<Route path="/tech" exact component={Tech}/>
					<Redirect to="/" />
				</Switch>
			</main>
			<footer>
				<div className={classes.pageBtnCtn}>
					<button type="button" className={classes.themeBtn}
						onClick={toggleThemeHandler}>{
							theme === "dark" ? 
							<i className="fas fa-sun" aria-hidden="true"></i> : 
							<i className="fas fa-moon" aria-hidden="true"></i>
						}
					</button>
				</div>
				<div className={classes.socialLinkCtn}>
					<a href="mailto:giachettimilena@gmail.com?Subject=Contacto%20desde%20portfolio" target="_blank" rel="noreferrer" className={classes.socialLink} aria-label="Mail">
						<p className={classes.socialLinkExtra}>Email</p>
						<i className={`${classes.smallIcon} fas fa-envelope`}></i>
					</a>
					<a href="https://www.linkedin.com/in/milena-giachetti-7640a21b8/" target="_blank" rel="noreferrer" className={classes.socialLink} aria-label="Linkedin">
						<p className={classes.socialLinkExtra}>Linkedin</p>
						<i className={`${classes.smallIcon} fab fa-linkedin-in`}></i>
					</a>
					<a href="https://github.com/MilenaGiachetti" target="_blank" rel="noreferrer" className={classes.socialLink} aria-label="Gihub">
						<p className={classes.socialLinkExtra}>Github</p>
						<i className={`${classes.smallIcon} fab fa-github`}></i>
					</a>
				</div>
			</footer>
		</>
	);
}

export default App;

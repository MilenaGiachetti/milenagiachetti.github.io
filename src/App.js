import classes from './App.module.scss';

function App() {
	return (
		<>
			<header>
				<div className={classes.logo}>
					<p className={classes.logoText}>g_</p>
				</div>
				<nav className={classes.nav}>
					<ul className={classes.navList}>
						<li><a href="./tech">Tech</a></li>
						<li><a href="./projects">Proyectos</a></li>
						<li><a href="./home">Home</a></li>
					</ul>
				</nav>
			</header>
			<main>
				<div className={classes.title}>
					<p className={classes.titleGreeting}>hola, soy</p>
					<h1>Milena Giachetti</h1>
					<p className={classes.titlePosition}>Desarrolladora Web</p>
					<p className={classes.titleEmail}>giachettimilena@gmail.com</p>
					<div className={classes.titleArrow}></div>
					<div>
						<a href="./projects" className={classes.titleCta}>
							<div className={classes.titleCtaArrow}></div>
							<p className={classes.titleCtaContent}>Ver Proyectos</p>
						</a>
					</div>
				</div>
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

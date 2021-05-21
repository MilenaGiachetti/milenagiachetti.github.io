import classes from './App.module.scss';
import {useState, useEffect} from 'react';
import {Route, Link} from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Routes from './routes/routes';
import ThemeBtn from './Components/ThemeBtn/ThemeBtn';
import SocialLinks from './Components/SocialLinks/SocialLinks';

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
					isMobile 
					? <button className={`${classes.burgerBtn} ${menuOpen ? classes.opened : ''}`} onClick={menuHandler} aria-label="Main Menu">
						<svg width="100" height="100" viewBox="0 0 100 100">
							<path className={`${classes.line} ${classes.line1}`} d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" aria-expanded={menuOpen ? 'true': 'false'}/>
							<path className={`${classes.line} ${classes.line2}`} d="M 20,50 H 80" aria-expanded={menuOpen ? 'true': 'false'}/>
							<path className={`${classes.line} ${classes.line3}`} d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" aria-expanded={menuOpen ? 'true': 'false'}/>
						</svg>
					</button>
					: null
				}
				{ !isMobile || menuOpen ? <Nav isMobile={isMobile} theme={theme} toggleThemeHandler={toggleThemeHandler}/> : null }
			</header>
			<main>
				<Route path="/" component={(props) => (
					<Routes {...props} theme={theme} />
				)}/>
			</main>
			<footer>
				{
					isMobile
					? null
					: <ThemeBtn theme={theme} toggleThemeHandler={toggleThemeHandler}/>
				}
				<SocialLinks/>
			</footer>
		</>
	);
}

export default App;

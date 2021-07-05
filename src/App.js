import classes from './App.module.scss';
import {useState, useEffect, useRef} from 'react';
import {HashLink} from 'react-router-hash-link';
import Nav from './Components/Nav/Nav';
import ThemeBtn from './Components/ThemeBtn/ThemeBtn';
import SocialLinks from './Components/SocialLinks/SocialLinks';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Tech from './pages/Tech/Tech';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import history from './history';
gsap.registerPlugin(ScrollTrigger);

function App() {
	const [theme, setTheme] = useState("light");
	const [menuOpen, setMenuOpen] = useState(false);
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
    const revealRefs = useRef([]);
    revealRefs.current = [];
    const addToRefs = el => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    };
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

	
    // useEffect(() => {
 
    //     revealRefs.current.forEach((el, index) => {
	// 		// gsap.to(el, {
	// 		// 	scrollTrigger: el, 
	// 		// 	duration: 2, 
	// 		// 	onStart: () => {
	// 		// 		history.push("/#" + el.id);
	// 		// 		history.push("/#" + el.id);
	// 		// 		history.goBack();
	// 		// 	},
	// 		// 	toggleActions: "restart pause reverse pause"
	// 		// });
			
    //         gsap.from(el,  {
    //             scrollTrigger: {
    //                 trigger: el,
    //             },
	// 			onStart: () => {
	// 				if(history.location.hash !== "#" + el.id) {
	// 					history.push("/#" + el.id);
	// 					history.push("/#" + el.id);
	// 					history.goBack();
	// 				}
	// 			}
    //         });
    //     });
     
    // }, [props.history]);


	return (
		<>
			<header>
				<h1>Milena Giachetti</h1>
				<HashLink to="#top" smooth className={classes.logo}>
					<p className={classes.logoText}>g_</p>
				</HashLink>
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
				{ !isMobile || menuOpen ? <Nav isMobile={isMobile} theme={theme} toggleThemeHandler={toggleThemeHandler}  menuHandler={menuHandler}/> : null }
			</header>
			<main>
				<Home theme={theme} refFx={addToRefs}/>
				<Projects refFx={addToRefs}/>
				<Tech refFx={addToRefs}/>
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

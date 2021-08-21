import classes from './App.module.scss';
import {useState, useEffect, useRef} from 'react';
import {HashLink} from 'react-router-hash-link';
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import history from './history';
import Nav from './Components/Nav/Nav';
import ThemeBtn from './Components/ThemeBtn/ThemeBtn';
import SocialLinks from './Components/SocialLinks/SocialLinks';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Tech from './pages/Tech/Tech';
import About from './pages/About/About';
import CollapseButton from './Components/UI/CollapseButton';

gsap.registerPlugin(ScrollTrigger);

function App() {
	const [theme, setTheme] = useState("light");
	const [menuOpen, setMenuOpen] = useState(false);
	const [endOfPage, setEndOfPage] = useState(false);
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
    const revealRefs = useRef([]);
	let isLinkScroll = useRef({scroll: false, page: "#home"});
    revealRefs.current = [];

    const addToRefs = el => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    };

	const toggleThemeHandler = () => {
        var newTheme = (theme === "dark" ? "light" : "dark");
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
		localStorage.setItem('theme', newTheme);
    }
	
	const menuHandler = () => {
		setMenuOpen(prevState => {
			return !prevState;
		})
	}

	useEffect(() => {
		const handleTrigger = el => {
			if(!isLinkScroll.current.scroll && history.location.hash !== "#" + el.id) {
				history.push("/#" + el.id);
				history.push("/#" + el.id);
				history.goBack();
			} else if(isLinkScroll.current.scroll && (isLinkScroll.current.page === "#" + el.id)) {
				isLinkScroll.current = {scroll: false, page: isLinkScroll.current.page};
			}
		}

		ScrollTrigger.matchMedia({
			// bottom of the page animation
			"(min-width: 992px)": function() {
				ScrollTrigger.create({
					trigger: "body",
					start: `bottom bottom`,
					onEnter: () => setEndOfPage(true),
				});
			},
			"all": function() {
				revealRefs.current.forEach((el) => {
					ScrollTrigger.create({
						trigger: el,
						start: "top",
						onEnter: () => handleTrigger(el),
						onEnterBack: () => handleTrigger(el)
					});
				});
			}
			  
		}); 

		
		if ( localStorage.getItem('theme') === 'dark') {
			setTheme('dark');
			document.documentElement.setAttribute('data-theme', 'dark');	
		} else {
			setTheme('light');
			document.documentElement.setAttribute('data-theme', 'light');	
		}

		window.addEventListener("resize", () => setIsMobile(window.innerWidth <= 767));     
		
		return () => {
			window.removeEventListener("resize", () => setIsMobile(window.innerWidth <= 767));
		}
	}, []);

	return (
		<>
			<header>
				<h1>Milena Giachetti</h1>
				<HashLink to="#home" smooth className={classes.logo} onClick={() => isLinkScroll.current = {scroll: true, page: "#home"}}>
					<p className={classes.logoText}>g_</p>
				</HashLink>
				{
					isMobile 
					? <CollapseButton menuOpen={menuOpen} menuHandler={menuHandler}/>
					: null
				}
				{ !isMobile || menuOpen ? <Nav isMobile={isMobile} theme={theme} toggleThemeHandler={toggleThemeHandler}  menuHandler={menuHandler} clickHandler={(page) => isLinkScroll.current = {scroll: true, page}}/> : null }
			</header>
			<main>
				<Home theme={theme} refFx={addToRefs}/>
				<Projects refFx={addToRefs}/>
				<Tech refFx={addToRefs}/>
				<About refFx={addToRefs} animationActive={endOfPage}/>
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
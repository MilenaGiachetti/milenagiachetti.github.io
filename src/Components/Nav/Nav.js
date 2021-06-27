import classes from './Nav.module.scss';
import {NavHashLink} from 'react-router-hash-link';
import ThemeBtn from '../ThemeBtn/ThemeBtn';

function Nav(props) {
	return (
        <nav className={props.isMobile ? classes.mobileNav : classes.nav}>
			<ul className={classes.navList}>
                <li {...(props.isMobile && {onClick: props.menuHandler})}>
                    <NavHashLink to="#home" smooth activeClassName={classes.currentNavLink} className={classes.navLink}>Home</NavHashLink>
                </li>
                <li {...(props.isMobile && {onClick: props.menuHandler})}>
                    <NavHashLink to="#projects" smooth activeClassName={classes.currentNavLink} className={classes.navLink}>Proyectos</NavHashLink>
                </li>
                <li {...(props.isMobile && {onClick: props.menuHandler})}>
                    <NavHashLink to="#tech" smooth activeClassName={classes.currentNavLink} className={classes.navLink}>Tech</NavHashLink>   
                </li>
                {
                    props.isMobile 
                    ? <li onClick={props.menuHandler}>
                        <ThemeBtn theme={props.theme} toggleThemeHandler={props.toggleThemeHandler}/>
                    </li>
                    : null
                }
            </ul>
        </nav>
	);
}

export default Nav;
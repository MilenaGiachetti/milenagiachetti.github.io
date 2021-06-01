import classes from './Nav.module.scss';
import {NavLink} from 'react-router-dom';
import ThemeBtn from '../ThemeBtn/ThemeBtn';

function Nav(props) {
	return (
        <nav className={props.isMobile ? classes.mobileNav : classes.nav}>
			<ul className={classes.navList}>
                <li {...(props.isMobile && {onClick: props.menuHandler})}>
                    <NavLink to="/" exact activeClassName={classes.currentNavLink} className={classes.navLink}>Home</NavLink>
                </li>
                <li {...(props.isMobile && {onClick: props.menuHandler})}>
                    <NavLink to="/projects" exact activeClassName={classes.currentNavLink} className={classes.navLink}>Proyectos</NavLink>
                </li>
                <li {...(props.isMobile && {onClick: props.menuHandler})}>
                    <NavLink to="/tech" exact activeClassName={classes.currentNavLink} className={classes.navLink}>Tech</NavLink>
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
import classes from './Nav.module.scss';
import {NavLink} from 'react-router-dom';

function Nav(props) {
	return (
        <nav className={props.isMobile ? classes.mobileNav : classes.nav}>
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
	);
}

export default Nav;
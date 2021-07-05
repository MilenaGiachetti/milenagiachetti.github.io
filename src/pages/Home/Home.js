import classes from './Home.module.scss';
import React from 'react';
import ReactDom from 'react-dom';
import HomeCanvas from '../../Components/HomeCanvas/HomeCanvas';

function Home(props) {
	return (
        <section className={classes.Home}>
            <div className={classes.title} id="home" ref={props.refFx}>
                <h2 className={props.theme === 'dark' ? classes.lined : ''}>Milena <br/>Giachetti</h2>
                <p className={classes.titlePosition}>Desarrolladora Web</p>
                <a href="mailto:giachettimilena@gmail.com?Subject=Contacto%20desde%20portfolio" target="_blank" rel="noreferrer" className={classes.titleEmail}aria-label="Mail">giachettimilena@gmail.com</a>
            </div>
            {ReactDom.createPortal(<HomeCanvas/>, document.getElementById("canvas-root"))}
        </section>
	);
}

export default Home;
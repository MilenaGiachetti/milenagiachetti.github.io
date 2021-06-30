import classes from './Home.module.scss';
import React, { Suspense } from 'react';
import {Canvas} from '@react-three/fiber';
import Porfolio from '../../Components/HomeMesh/HomeMesh';

function Home(props) {
	return (
        <section className={classes.Home}>
            <div className={classes.title} id="home" ref={props.refFx}>
                <h2 className={props.theme === 'dark' ? classes.lined : ''}>Milena Giachetti</h2>
                <p className={classes.titlePosition}>Desarrolladora Web</p>
                <a href="mailto:giachettimilena@gmail.com?Subject=Contacto%20desde%20portfolio" target="_blank" rel="noreferrer" className={classes.titleEmail}aria-label="Mail">giachettimilena@gmail.com</a>
            </div>
            <Canvas camera={{ position: [6, 2, 10] }} gl={{ antialias: true }} className={classes.Canvas}>
                <ambientLight intensity={0.5} />
                <spotLight intensity={0.8} color={0x00ff00} position={[3, 3, 4]} />
                <Suspense fallback={null}>{<Porfolio />}</Suspense>
            </Canvas>
        </section>
	);
}

export default Home;
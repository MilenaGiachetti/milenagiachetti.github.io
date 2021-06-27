
import classes from './ScreenImage.module.scss';
import {useRef, useEffect} from 'react';
import { gsap } from "gsap";

function ScreenImage(props) {
    
    let screenImage = useRef(null);

    // useEffect(() => {
    //     gsap.from(screenImage, {
    //         delay: 0.8,
    //         ease: "power3.out",
    //         scale: 0,
    //     })        
    //     gsap.to(screenImage, {
    //         duration: 0.8,
    //         ease: "power3.out",
    //         scale: 1
    //     });
    //     return () => {
    //         gsap.from(screenImage, {
    //             delay: 0,
    //             ease: "power3.out",
    //             scale: 1
    //         });
    //         gsap.to(screenImage, {
    //             duration: 0.8,
    //             ease: "power3.out",
    //             scale: 0,
    //         })        
    //     };
    // }, [screenImage, props.proyectName]);

	return (
        <div ref={el => (screenImage = el)} className={classes.proyectScreenCtn}>
            <img src={props.screenPath} alt={`Screenshot de ${props.proyectName}`} className={classes.proyectScreen}/> 
        </div>
	)
}

export default ScreenImage;
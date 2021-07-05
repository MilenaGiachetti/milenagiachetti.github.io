
import classes from './ScreenImage.module.scss';

function ScreenImage(props) {
	return (
        <img src={props.screenPath} alt={`Screenshot de ${props.proyectName}`} className={classes.proyectScreen}/> 
	)
}

export default ScreenImage;
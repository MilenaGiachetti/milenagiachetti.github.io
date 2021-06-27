
import classes from './ScreenImage.module.scss';

function ScreenImage(props) {
	return (
        <div className={classes.proyectScreenCtn}>
            <img src={props.screenPath} alt={`Screenshot de ${props.proyectName}`} className={classes.proyectScreen}/> 
        </div>
	)
}

export default ScreenImage;
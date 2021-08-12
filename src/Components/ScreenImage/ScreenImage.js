
import classes from './ScreenImage.module.scss';

function ScreenImage(props) {
	return (
        <img src={props.screenPath} alt={`Screenshot de ${props.projectName}`} className={classes.projectScreen}/> 
	)
}

export default ScreenImage;
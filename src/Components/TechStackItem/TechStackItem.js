import classes from './TechStackItem.module.scss';

const TechStackItem = (props) => {
    return (
        <li className={classes.techItem}>
            <img src={props.tech.icon} alt={props.tech.name} className={classes.techItemImg}></img>
            <p className={classes.techItemName}>{props.tech.name}</p>
        </li>
    )
}

export default TechStackItem;
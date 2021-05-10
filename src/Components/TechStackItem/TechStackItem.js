import classes from './TechStackItem.module.scss';

const TechStackItem = (props) => {
    return (
        <div className={classes.techItem}>
            <div className={classes.techItemWrapper}>
                <img src={props.tech.icon} alt={props.tech.name} className={classes.techItemImg}></img>
                <p className={classes.techItemName}>{props.tech.name}</p>
            </div>
        </div>
    )
}

export default TechStackItem;
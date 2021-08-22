import classes from './OtherProject.module.scss';

function OtherProject(props) {
	return (
        <a href="/#top" target="_blank" rel="noreferrer" className={classes.otherProject} onMouseEnter={()=>props.mouseEnterHandler(props.project.image)} onMouseLeave={()=>props.mouseLeaveHandler(props.project.image)}>
            <div>
                <p>{props.project.projectName}</p>
                <small>{props.project.projectTech}</small>
            </div>
            <div className={classes.codeLink}><span></span></div>
        </a>
	)
}

export default OtherProject;
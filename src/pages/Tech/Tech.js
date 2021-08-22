import classes from './Tech.module.scss';
import techStackData from './data/contentData';
import TechStackItem from '../../Components/TechStackItem/TechStackItem';

function Tech(props) {
	return (
        <section className={classes.Tech} id="tech" ref={props.refFx}>
            <h2 className="right">Tech</h2>
            <ul className={classes.techCtn}>
                {
                    techStackData.map((tech) => {
                        return (
                            <TechStackItem key={tech.name} tech={tech}/>
                        )
                    })
                }
            </ul>
        </section>
	);
}

export default Tech;
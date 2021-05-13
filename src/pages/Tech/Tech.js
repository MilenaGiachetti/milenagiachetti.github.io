import classes from './Tech.module.scss';
import techStackData from './data/contentData';
import TechStackItem from '../../Components/TechStackItem/TechStackItem';

function Tech() {
	return (
        <section className={classes.Tech}>
            <div className={classes.title} data-point='TechTechTechTechTechTechTech'></div>
            <div className={classes.content}>
                <h2>Tech</h2>
                <div className={classes.techCtn}>
                    {
                        techStackData.map((tech) => {
                            return (
                                <TechStackItem key={tech.name} tech={tech}/>
                            )
                        })
                    }
                </div>
            </div>
        </section>
	);
}

export default Tech;
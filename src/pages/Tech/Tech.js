import classes from './Tech.module.scss';
import css from './../../assets/images/techIcons/css.svg';
import git from './../../assets/images/techIcons/git.svg';
import github from './../../assets/images/techIcons/github.svg';
import html from './../../assets/images/techIcons/html.svg';
import javascript from './../../assets/images/techIcons/javascript.svg';
import jquery from './../../assets/images/techIcons/jquery.svg';
import react from './../../assets/images/techIcons/react.svg';
import sass from './../../assets/images/techIcons/sass.svg';
import threejs from './../../assets/images/techIcons/threejs.svg';

const techStack = [
    {
        icon: css,
        name: 'CSS'
    },
    {
        icon: git,
        name: 'Git'
    },
    {
        icon: github,
        name: 'Github'
    },
    {
        icon: html,
        name: 'HTML'
    },
    {
        icon: javascript,
        name: 'JavaScript'
    },
    {
        icon: jquery,
        name: 'JQuery'
    },
    {
        icon: react,
        name: 'React'
    },
    {
        icon: sass,
        name: 'SCSS'
    },
    {
        icon: threejs,
        name: 'ThreeJS'
    }
]

function Tech() {
	return (
        <section className={classes.Tech}>
            <div className={classes.title} data-point='TechTechTechTechTechTechTech'></div>
            <div className={classes.content}>
                <h2>Tech</h2>
                <div className={classes.techCtn}>
                    {
                        techStack.map((tech) => {
                            return (
                                <div key={tech.name} className={classes.techItem}>
                                    <div className={classes.techItemWrapper}>
                                        <img src={tech.icon} alt={tech.name} className={classes.techItemImg}></img>
                                        <p className={classes.techItemName}>{tech.name}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
	);
}

export default Tech;
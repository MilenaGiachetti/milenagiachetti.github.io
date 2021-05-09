import classes from './SocialLinks.module.scss';

function SocialLinks() {
	return (
        <div className={classes.socialLinkCtn}>
            <a href="mailto:giachettimilena@gmail.com?Subject=Contacto%20desde%20portfolio" target="_blank" rel="noreferrer" className={classes.socialLink} aria-label="Mail">
                <p className={classes.socialLinkExtra}>Email</p>
                <i className={`${classes.smallIcon} fas fa-envelope`}></i>
            </a>
            <a href="https://www.linkedin.com/in/milena-giachetti-7640a21b8/" target="_blank" rel="noreferrer" className={classes.socialLink} aria-label="Linkedin">
                <p className={classes.socialLinkExtra}>Linkedin</p>
                <i className={`${classes.smallIcon} fab fa-linkedin-in`}></i>
            </a>
            <a href="https://github.com/MilenaGiachetti" target="_blank" rel="noreferrer" className={classes.socialLink} aria-label="Gihub">
                <p className={classes.socialLinkExtra}>Github</p>
                <i className={`${classes.smallIcon} fab fa-github`}></i>
            </a>
        </div>
	);
}

export default SocialLinks;
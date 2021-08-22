import classes from './ThemeBtn.module.scss';

function ThemeBtn(props) {
	return (
        <button
            type="button"
            className={classes.themeBtn}
            onClick={props.toggleThemeHandler}>
            {
                props.theme === "dark" ?
                <i className="fas fa-sun" aria-hidden="true"></i> :
                <i className="fas fa-moon" aria-hidden="true"></i>
            }
        </button>
	);
}

export default ThemeBtn;

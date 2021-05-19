import classes from './ThemeBtn.module.scss';

function ThemeBtn(props) {
	return (
        <div className={classes.pageBtnCtn}>
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
        </div>
	);
}

export default ThemeBtn;

import classes from './About.module.scss';

function About(props) {
	return (
        <section className={classes.About} id="about" ref={props.refFx}>
            <div className={classes.content}>
                <h2>Acerca</h2>
                <div>
                    <p>Hola, Lorem ipsum dolor sit amet, <span className="circled">consectetur adipiscing</span> elit. Fusce eget massa quis enim vulputate facilisis faucibus eget odio. Vestibulum quis lobortis elit. Nunc id lacus ac urna porta quis eget massa. Praesent imperdiet scelerisque enim sed feugiat. Nullam nec leo leo. Maecenas elementum sapien metus, a ultrices nulla vehicula eu. Sed eu velit eu nisl vulputate vulputate ac ut sapien. Sed sit amet sapien at leo gravida ullamcorper. Nunc dictum, justo et feugiat varius, nulla leo lobortis magna, sed <span className="circled">venenatis</span> eros eros non eros. Nullam vestibulum odio nunc, at scelerisque elit suscipit a. Nullam a turpis quis massa tincidunt luctus. Etiam convallis at mauris non tempor. Quisque et ligula facilisis, tempor neque ac, feugiat ex. In fermentum at mi nec dictum. Aenean fermentum nisi et nibh venenatis, id vulputate est mollis. Vivamus et massa magna. </p>
                </div>
            </div>
        </section>
	);
}

export default About;
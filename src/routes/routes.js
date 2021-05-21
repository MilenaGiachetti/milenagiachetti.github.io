import { TransitionGroup, Transition } from "react-transition-group";
import { useRef } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import Home from '../pages/Home/Home';
import Projects from '../pages/Projects/Projects';
import Tech from '../pages/Tech/Tech';
import { gsap } from "gsap";

const completeCall = (target, parent) => {
    gsap.set(target, { clearProps: "autoAlpha, width" });
    parent && gsap.set(parent, { clearProps: "left" });
};

const Routes = (props) => {
    let loadingScreenRef = useRef(null);

    const onEnterHandler = (node) => {
        gsap.killTweensOf(node);
        gsap.set(node, {
            autoAlpha: 0,
            width: 0
        });
        gsap.to(node, {
            duration: 0,
            autoAlpha: 1,
            delay: 0.3,
            width: '100%',
            onComplete: completeCall,
            onCompleteParams: [node, loadingScreenRef.current]
        });
    };
    
    const onExitHandler = (node) => {
        gsap.killTweensOf(node);
        gsap.set(node, {
            autoAlpha: 1
        });
        gsap.to(node, {
            duration: 0.3,
            autoAlpha: 0
        });
        gsap.set(loadingScreenRef.current, { left: '-100vw' });
        gsap.to(loadingScreenRef.current, { left: '0', duration: 0.3 });
        gsap.to(loadingScreenRef.current, { left: '-100vw', delay: 0.6, ease: "sine.inOut" }); 
     };

    return (
        <>
            <div className="loadingScreen" ref={loadingScreenRef} />
            <TransitionGroup component={null}>
                <Transition
                    timeout={600}
                    key={props.location.pathname}
                    onEnter={onEnterHandler}
                    onExit={onExitHandler}
                >
                    <Switch location={props.location}>
                        <Route path="/" exact>
                            <Home {...props} theme={props.theme} />
                        </Route>
                        <Route path="/projects" exact>
                            <Projects />
                        </Route>
                        <Route path="/tech" exact>
                            <Tech />
                        </Route>
                        <Redirect to="/"/>
                    </Switch>
                </Transition>
            </TransitionGroup>
        </>
  );
};

export default Routes;
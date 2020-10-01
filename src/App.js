import React, {Component, Fragment} from 'react';
import './App.css';
import AOS from 'aos';
import {Switch, Route, Link, NavLink, useLocation} from 'react-router-dom';
import Home from './Components/Home';
import Coding from './Components/Coding';
import Creative from './Components/Creative';
import About from './Components/About';
import {AnimatePresence} from 'framer-motion';
import ScrollToTop from './Components/ScrollToTop';
import { ParallaxProvider} from 'react-scroll-parallax';
import "bootstrap/dist/css/bootstrap.css";

AOS.init({duration: 1200});



function App() {
    const location = useLocation();
    
    return(
        <ParallaxProvider>
            <div id='site'>
                <nav id='navbar'>
                <NavLink to="/" exact className="link" activeClassName='active' id='home' >Home</NavLink>
                <NavLink to="/creative" className="link" activeClassName='active' id='creative' >Creative</NavLink>
                <NavLink to="/coding" className="link" activeClassName='active' id='coding' >Coding</NavLink>
                <NavLink to="/about" className="link" activeClassName='active' id='about' >About</NavLink>
                </nav>
                <div id='switch'>
                    <Fragment>
                        <AnimatePresence>
                            <ScrollToTop />
                            <Switch location={location} key={location.pathname}>
                                <Route exact path="/" component={Home}/>
                                <Route path="/creative" component={Creative}/>
                                <Route path="/coding" component={Coding}/>
                                <Route path="/about" component={About}/>
                            </Switch>
                        </AnimatePresence>
                    </Fragment>
                </div>
            </div>
        </ParallaxProvider>
    )
}

export default App;
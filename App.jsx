import Topuria from './topuria.jsx'
import Calc from './calc.jsx'
import Bmi from './website/bmi.jsx'; 

import { BrowserRouter } from "react-router-dom";

import Nav from './website/nav.jsx';  
import Home from "./website/home.jsx";
import About from "./website/about.jsx";
import Projects from './website/projects.jsx';
import Contact from "./website/contact.jsx";

import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Routes, Route, useLocation } from 'react-router-dom';
import './website/transition.css';

function App() {

  const location = useLocation();

    return (
      <>
        <Nav />
        <TransitionGroup>
          <CSSTransition key={location.pathname} classNames="fade" timeout={400}>
            <div className="page">
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/bmi" element={<Bmi />} />
              </Routes>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </>
    );
} 


export default App;



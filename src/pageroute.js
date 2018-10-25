import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Start from './start/Start';
import About from './about/About';
import Top from './header/top/Top'

const PageRoute = () => (
  <Router>
    <div>
      <div className='top'>
        <nav className='flex-row flex-space-between'>
          <Top />
          <ul className='menu flex-row flex-align-center'>
            <li className='right-space'>
              <Link className='menu__item' to="/">Start</Link>
            </li>
            <li>
              <Link className='menu__item' to="/projekt">Projekt</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Route exact path="/" component={Start} />
      <Route path="/projekt" component={About} />
    </div>
  </Router>
);

export default PageRoute;
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Start from './start/Start';
import Project from './project/Project';
import Top from './header/top/Top'

const PageRoute = () => (
  <Router>
    <div>
      <div className='top'>
        <div className='top__container flex-row flex-space-between'>
          <Top />
          <ul className='menu flex-row flex-align-center'>
            <li className='right-space'>
              <Link className='menu__item' to="/">Start</Link>
            </li>
            <li>
              <Link className='menu__item' to="/projekt">Projekt</Link>
            </li>
          </ul>
        </div>
      </div>
      <Route exact path="/" component={Start} />
      <Route path="/projekt" component={Project} />
    </div>
  </Router>
);

export default PageRoute;
import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import App from './App';
import './index.css';

const deployRegex = /^https?:\/\/www\.mymtanzania\.se/
const isDeployed = document.location.href.match(deployRegex)
if (isDeployed) {
  ReactGA.initialize('UA-819513-7');
  ReactGA.pageview(window.location.pathname + window.location.search);
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

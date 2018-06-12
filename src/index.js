import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import App from './App';
import './index.css';
ReactGA.initialize('UA-819513-7');

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

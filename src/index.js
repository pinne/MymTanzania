import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import App from './App';
import './index.css';

const contentful = require('contentful')
contentful.createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: '22kovaj11tjg',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: '752b4d09e0a3c9cc42baa37b0f0f36ac262a6cc5ec75624aa85af4b895d626c9'
});
// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
// client.getEntry('752b4d09e0a3c9cc42baa37b0f0f36ac262a6cc5ec75624aa85af4b895d626c9')
//   .then((entry) => console.log(entry));

ReactGA.initialize('UA-819513-7');

ReactDOM.render( <
  App / > ,
  document.getElementById('root')
);
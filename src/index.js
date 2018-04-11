import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import App from './App';
import './index.css';
import { createClient } from 'contentful';

const client = createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: 'kl86qt22vgc9',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: 'faa977ce007881a00f698b518482190e13c037b0b1011766101aad9c6bb5f107'
});

ReactGA.initialize('UA-819513-7');

const fetchEntry = async entry => {
  try {
    const result = await client.getEntry(entry)
    const status = result.status
    if (status >= 400 && status <= 409) {
      throw new Error(`HTTP ${status} error`)
    }
    return result.fields
  } catch (error) {
    return error
  }
}
fetchEntry('3ESKTo0plSs4UUEee8gCGy').then(res => console.log(res))

ReactGA.initialize('UA-819513-7');

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

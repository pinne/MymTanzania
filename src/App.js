import React, { Component } from 'react';
import * as contentful from 'contentful';

import './App.css';
import Footer from './footer/Footer.js';
import PageRoute from './pageroute.js';

class App extends Component {
  constructor() {
    super()
    this.getPost = this.getPost.bind(this);
    this.setPosts = this.setPosts.bind(this);
    console.log(this.state.contentfulSettings.accessToken)
  }

  state = {
    posts: [],
    assets: [],
    isLoading: true,
    contentfulSettings: {
      space: 'r72rp0hpbzql',
      accessToken: process.env.REACT_APP_ACCESSTOKEN ||
        '268aeba4109f013e9a6e2e229c9b53417b56ce6300abc9592d73f683f914ce20',
      host: process.env.REACT_APP_ACCESSTOKEN
        ? 'preview.contentful.com'
        : 'cdn.contentful.com'
    }
  }

  client = contentful.createClient(this.state.contentfulSettings)

  componentDidMount() {
    this.fetchProjects()
      .then(this.setPosts)
      .catch(error => console.log('ERROR: ' + error))
  }

  fetchPosts = () => this.client.getEntries()

  fetchProjects = () => this.client.getEntries({
    'content_type': 'projekt'
  })

  setPosts (response) {
    if (!response.includes || !response.includes.Asset) {
      return
    }
    this.setState({
      posts: response.items,
      assets: response.includes.Asset,
      isLoading: false
    })
  }

  getPost = id => this.state.posts.filter(post => post.sys.id === id)[0]
  getImage = id => this.state.assets.filter(asset => asset.sys.id === id)[0]

  render() {
    return (
      <div className="App">
        <PageRoute />
        <Footer />
      </div>
    );
  }
}

export default App;

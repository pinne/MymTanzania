import React, { Component } from 'react';
import * as contentful from 'contentful';

import './App.css';
import Header from './header/Header.js';
import Block1 from './block1/Block1.js';
import Block2 from './block2/Block2.js';
import Block3 from './block3/Block3.js';
import Block4 from './block4/Block4.js';
import Footer from './footer/Footer.js';
import GetPost from './post/GetPost';

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
    this.fetchPosts()
      .then(this.setPosts)
      // .catch(error => console.log('ERROR: ' + error))
  }

  fetchPosts = () => this.client.getEntries()

  setPosts (response) {
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
        <Header />
        <GetPost
          content={this.getPost('1lZy65LD8MAeeeEsYIyaky')}
          image={this.getImage('1lZy65LD8MAeeeEsYIyaky')}
          isLoading={this.state.isLoading}
        />
        <Block1 />
        <Block2 />
        <Block3 />
        <Block4 />

        {
          !this.state.isLoading &&
          <div>
            {/* ryan gosling <3 */}
            {/*<Post content={this.getPost('Ud0LVOaTqCGWG6IKsUiaO')} />*/}
          </div>
        }
        <Footer />
      </div>
    );
  }
}

export default App;

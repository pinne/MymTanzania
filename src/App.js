import React, { Component } from 'react';
import * as contentful from 'contentful';

import './App.css';
import Header from './header/Header.js';
import Block1 from './block1/Block1.js';
import Block2 from './block2/Block2.js';
import Block3 from './block3/Block3.js';
import Block4 from './block4/Block4.js';
import Footer from './footer/Footer.js';
import Post from './Post.js';

class App extends Component {
  constructor() {
    super()
    this.getPost = this.getPost.bind(this);
    console.log(this.state.contentfulSettings.accessToken)
  }

  state = {
    posts: [],
    gotPosts: false,
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
    this.fetchPosts().then(this.setPosts);
  }

  fetchPosts = () => this.client.getEntries()

  setPosts = response => {
    this.setState({
      posts: response.items,
      gotPosts: true
    })
  }

  getPost = id => {
    return this.state.posts.map(post => {
      let postField;
      if (post.sys.id === id) {
        postField = post.fields.post;
      }
      return postField;
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        {
          this.state.gotPosts &&
          <div>
            <Block1 post={this.getPost('1lZy65LD8MAeeeEsYIyaky')} />
          </div>
        }

        <Block2 />
        <Block3 />
        <Block4 />

        {
          this.state.gotPosts &&
          <div>
            {/* ryan gosling <3 */}
            <Post post={this.getPost('Ud0LVOaTqCGWG6IKsUiaO')} />
          </div>
        }
        <Footer />
      </div>
    );
  }
}

export default App;

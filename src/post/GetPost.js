import React, { Component } from 'react';
import Post from './Post.js';

class GetPost extends Component {
  componentWillUpdate(props) {
    console.log(JSON.stringify(props.content, null, 4))
    console.log(JSON.stringify(props.image, null, 4))
  }

  render() {
    if (!this.props.isLoading) {
      const { fields } = this.props.content
      const { rubrik, byline, post, speechBalloon} = fields
      //const { imgUrl, imgTitle } = this.props.image
          {/*imgTitle={imgTitle}*/}
          {/*imgUrl={imgUrl}*/}
      return (
        <Post
          rubrik={rubrik}
          byline={byline}
          post={post}
          speechBalloon={speechBalloon}
        />
      )
    } else {
      return (
        null
      )
    }
  }
}

export default GetPost;

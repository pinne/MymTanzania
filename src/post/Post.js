import React from 'react';
import ReactMarkdown from 'react-markdown';

export default ({
  rubrik = '',
  byline = '',
  post = '',
  imgTitle = '',
  imgUrl = null,
  speechBalloon = false
}) => {
  return (
    <div>
      <h3>{rubrik}</h3>
      speechBalloon: {speechBalloon}
      { imgUrl ?
        <img
          height="200"
          style={{borderRadius: '50%'}}
          src={imgUrl}
          alt={imgTitle}
        />
        : null
      }
      <ReactMarkdown source={byline} />
      <ReactMarkdown source={post} />
    </div>
  )
}

import React from 'react';
import ReactMarkdown from 'react-markdown';

export default ({ content }) => {
  if (!content.fields || !content.fields.rubrik) {
    console.error('Could not load post')
    return null
  }
  return (
    <div>
      <h3>{content.fields.rubrik}</h3>
      <img
        height="200"
        style={{borderRadius: '50%'}}
        src={content.fields.postImage.fields.file.url}
        alt={content.fields.postImage.fields.file.title}
      />
      <ReactMarkdown source={content.fields.byline} />
      <ReactMarkdown source={content.fields.post} />
    </div>
  )
}

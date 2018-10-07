import React from 'react';
import ReactMarkdown from 'react-markdown';

export default ({ content }) => {
  return (
    <div>
      <pre>{JSON.stringify(content, null, 4)}</pre>
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

import React from 'react';

export default (props) => {
  return (
    <div>
      <h3>Post</h3>
      {JSON.stringify(props, null, 2)}
    </div>
  )
}

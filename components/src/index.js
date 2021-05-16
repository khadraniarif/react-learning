import React from 'react';
import ReactDom from 'react-dom';

import CommentDetail from './components/commentDetail';

const App = () => {
  return(
    <div className="ui container comments">
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
      <CommentDetail />
      
    </div>
  );
}

ReactDom.render(
  <App />, document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import ApprovalCard from './components/ApprovalCard';

import CommentDetail from './components/commentDetail';

const App = () => {
  return(
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail author="Ahad" authorImage={faker.image.avatar()} blog="Second blog" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Riyaz" authorImage={faker.image.avatar()} blog="third blog" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Arif" authorImage={faker.image.avatar()} blog="Nice Blog" />
      </ApprovalCard>
    </div>
  );
}

ReactDom.render(
  <App />, document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


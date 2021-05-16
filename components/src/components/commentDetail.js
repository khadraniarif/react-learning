import React from 'react';

const commentDetail = (props) => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
            <img alt="avatar" src={props.authorImage}/>
            </a>
            <div className="content">
            <a href="/" className="author">
                {props.author}
            </a>
            <div className="metadata">
                <span className="date">Today at 6:00 PM</span>
            </div>
            <div className="text">{props.blog}</div>
            </div>
      </div>
    );
};

export default commentDetail;
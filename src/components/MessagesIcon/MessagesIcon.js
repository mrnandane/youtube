import React from 'react';
import './MessagesIcon.css';

export const MessagesIcon = () => {
  return (
    <div className="inlineBlock">
      <span className="messagesButton" title={'Messages'}>
        <i className="fa fa-2x fa-comment"></i>
      </span>
    </div>
  )
};
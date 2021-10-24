import React from 'react';
import style from './CommentCount.module.css';
import classnames from 'classnames';

interface CommentCountProps {
  commentCount: number;
}
function CommentCount({ commentCount }: CommentCountProps) {
  return (
    <div
      className={classnames(style.CommentCount, {
        [style['zero']]: commentCount == 0,
      })}
    >
      {commentCount}
    </div>
  );
}

export default CommentCount;

import React from 'react';
import style from './CommentList.module.css';
import classnames from 'classnames';

interface CommentListProps {
  children: React.ReactNode;
  commentCount: number;
}
function CommentList({ children, commentCount }: CommentListProps) {
  return (
    <div className="card">
      <span className={classnames(style.commentCount)}>
        {commentCount} {commentCount == 1 ? 'Comment' : 'Comments'}
      </span>
      <div className={classnames(style.commentList)}>{children}</div>
    </div>
  );
}

export default CommentList;

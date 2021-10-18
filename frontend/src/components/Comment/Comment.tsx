import React from 'react';
import style from './Comment.module.css';
import classnames from 'classnames';

// const cx = classnames.bind(style);

interface CommentProps {}
function Comment({}: CommentProps) {
  return <div className={style.comment}>green</div>;
}

export default Comment;

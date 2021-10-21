import React from 'react';
import style from './CommentChain.module.css';
import classnames from 'classnames';
import Comment, { CommentProps } from '../Comment/Comment';

interface CommentChainProps {
  comment: CommentProps;
  replies?: CommentProps[];
}
function CommentChain({ comment, replies }: CommentChainProps) {
  return (
    <div className={classnames(style.CommentChain)}>
      <div className={classnames(style.comment)}>
        <Comment {...comment} />
      </div>
      <div className={classnames(style.replies)}>
        {replies && replies.map((reply) => <Comment {...reply} />)}
      </div>
    </div>
  );
}

export default CommentChain;

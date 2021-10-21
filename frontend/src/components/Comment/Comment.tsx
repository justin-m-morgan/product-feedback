import React, { useState } from 'react';
import style from './Comment.module.css';
import classnames from 'classnames';
import { TextArea } from '../TextInput/TextInput';
import Button from '../Button/Button';

// const cx = classnames.bind(style);

export interface CommentProps {
  user: {
    image: string;
    name: string;
    username: string;
  };
  content: string;
  replyTo?: string;
  handleReply: () => void;
}
function Comment({ user, content, replyTo, handleReply }: CommentProps) {
  const [isReplying, setIsReplying] = useState(false);

  const toggleIsReplying = () => setIsReplying(!isReplying);

  return (
    <div className={classnames(style.comment)}>
      <div className={classnames(style.avatar)}>
        <img src={user.image} alt={user.name} />
      </div>
      <div className={classnames(style.user_info)}>
        <h4 className={classnames(style.name)}>{user.name}</h4>
        <h5 className={classnames(style.username)}>@{user.username}</h5>
      </div>
      <p className={classnames('body--alt', style.content)}>
        {replyTo && (
          <span className={classnames(style.replyTo)}>@{replyTo}</span>
        )}{' '}
        {content}
      </p>
      <div
        onClick={toggleIsReplying}
        className={classnames('link', style.reply_button)}
      >
        Reply
      </div>
      {isReplying && (
        <>
          <div className={classnames('body--alt', style.reply_text_area)}>
            <TextArea error={false} />
          </div>
          <div className={classnames(style.post_reply_button)}>
            <Button kind="purple">Post Reply</Button>
          </div>
        </>
      )}
    </div>
  );
}

export default Comment;

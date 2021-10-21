import React from 'react';
import style from './AddCommentInput.module.css';
import classnames from 'classnames';

import { TextArea } from '../TextInput/TextInput';
import Button from '../Button/Button';

interface AddCommentInputProps {}
function AddCommentInput({}: AddCommentInputProps) {
  return (
    <div className={classnames('card', style.AddCommentInput)}>
      <h3 className={classnames('h3', style.label)}>Add Comment</h3>
      <TextArea />
      <div className={style.flex}>
        <span>250 Characters left</span>
        <Button kind="purple">Post Comment</Button>
      </div>
    </div>
  );
}

export default AddCommentInput;

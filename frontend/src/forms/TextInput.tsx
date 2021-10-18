import React from 'react';
import classnames from 'classnames';

import styles from './TextInput.module.css';

interface TextInputProps {
  error: boolean;
}
function TextInput({ error }: TextInputProps) {
  return <input type="text" className={classnames({ error: error })} />;
}

export default TextInput;

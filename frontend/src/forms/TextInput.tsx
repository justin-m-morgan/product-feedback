import React from 'react';
import classnames from 'classnames';

import styles from './TextInput.module.css';

const cx = classnames.bind(styles);

interface TextInputProps {
  error: boolean;
}
function TextInput({ error }: TextInputProps) {
  return <input type="text" className={cx({ error: error })} />;
}

export default TextInput;

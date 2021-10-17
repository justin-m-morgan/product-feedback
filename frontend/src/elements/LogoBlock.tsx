import React from 'react';
import style from './LogoBlock.module.css';
import classnames from 'classnames';

const cx = classnames.bind(style);

interface LogoBlockProps {}
function LogoBlock({}: LogoBlockProps) {
  return (
    <div className={cx('card', 'container')}>
      <h1 className="h2">Frontend Mentor</h1>
      <h2 className="h5">Feedback Board</h2>
    </div>
  );
}

export default LogoBlock;

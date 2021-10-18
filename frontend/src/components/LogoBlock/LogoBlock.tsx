import React from 'react';
import style from './LogoBlock.module.css';
import classnames from 'classnames';



interface LogoBlockProps {}
function LogoBlock({}: LogoBlockProps) {
  return (
    <div className={classnames('card', style.container)}>
      <h1 className="h2">Frontend Mentor</h1>
      <h2 className="h5">Feedback Board</h2>
    </div>
  );
}

export default LogoBlock;

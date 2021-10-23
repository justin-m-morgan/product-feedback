import React from 'react';
import style from './Dot.module.css';
import classnames from 'classnames';

interface DotProps {
  height?: string;
}
function Dot({ height = '0.625rem' }: DotProps) {
  return (
    <svg className={classnames(style.dot)} height={height} viewBox="0 0 10 10">
      <circle cx="5" cy="5" r="5" />
    </svg>
  );
}

export default Dot;

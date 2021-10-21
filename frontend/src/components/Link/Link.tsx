import React from 'react';
import style from './Link.module.css';
import classnames from 'classnames';

interface LinkProps {
  children: React.ReactNode;
}
function Link({ children }: LinkProps) {
  return <button className={classnames(style.Link)}>{children}</button>;
}

export default Link;

import React, { ReactNode } from 'react';
import style from './Button.module.css';
import classnames from 'classnames';

export const ButtonOptions = {
  purple: style.purple,
  blue: style.blue,
  navy: style.navy,
  red: style.red,
  ghost: style.ghost,
};
const cx = classnames.bind(style);

interface ButtonProps {
  /**
   * Background colour of button
   */
  kind: 'purple' | 'blue' | 'navy' | 'red' | 'ghost';
  /**
   * Content of button
   */
  children: ReactNode;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}
function Button({ children, kind = 'purple' }: ButtonProps) {
  return <button className={cx('button', kind)}>{children}</button>;
}

export default Button;

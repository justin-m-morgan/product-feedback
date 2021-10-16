import React, { ReactNode } from 'react';
import style from './Badge.module.css';
import classnames from 'classnames';

const cx = classnames.bind(style);

interface BadgeProps {
  /**
   * Is currently selected
   */
  active?: boolean;

  /**
   * Content of button
   */
  children: ReactNode;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}
function Badge({ children, active = false }: BadgeProps) {
  return (
    <button className={cx('badge', { active: active })}>{children}</button>
  );
}

export default Badge;

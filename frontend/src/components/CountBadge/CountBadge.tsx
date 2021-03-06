import React, { ReactNode } from 'react';
import style from './CountBadge.module.css';
import classnames from 'classnames';
import Badge from '../Badge/Badge';
import Arrow from '../../svg/Arrow';

// const cx = classnames.bind(style);

interface CountBadgeProps {
  /**
   * Is currently selected
   */
  active?: boolean;
  /**
   * Count to display
   */
  count: number;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}
function CountBadge({ count, active = false }: CountBadgeProps) {
  return (
    <Badge active={active}>
      <div className={classnames(style.stack)}>
        <Arrow direction="up" />
        <span className={classnames(style.digits, { active: active })}>{count}</span>
      </div>
    </Badge>
  );
}

export default CountBadge;

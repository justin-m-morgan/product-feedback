import React from 'react';
import classnames from 'classnames';

export const Direction = {
  up: 'rotate-half',
  left: 'rotate-ccw',
  right: 'rotate-cw',
  down: '',
};

interface ArrowProps {
  direction?: 'up' | 'left' | 'down' | 'right';
}
const Arrow = ({ direction = 'down' }: ArrowProps) => (
  <svg
    height="10"
    viewBox="0 0 10 7"
    xmlns="http://www.w3.org/2000/svg"
    className={classnames(Direction[direction])}
  >
    <path
      d="M1 1l4 4 4-4"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      fillRule="evenodd"
    />
  </svg>
);

export default Arrow;

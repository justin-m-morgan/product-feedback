import React from 'react';

interface PlusProps {
  height?: string;
}
const Plus = ({ height = '0.6rem' }: PlusProps) => (
  <svg height={height} viewBox="0 0 9 8" xmlns="http://www.w3.org/2000/svg">
    <text
      transform="translate(-24 -20)"
      fill="#F2F4FE"
      fillRule="evenodd"
      fontFamily="Jost-Bold, Jost"
      fontSize="14"
      fontWeight="bold"
    >
      <tspan x="24" y="27.5">
        +
      </tspan>
    </text>
  </svg>
);

export default Plus;

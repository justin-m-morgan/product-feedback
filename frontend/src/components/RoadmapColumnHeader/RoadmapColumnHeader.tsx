import React from 'react';
import style from './RoadmapColumnHeader.module.css';
import classnames from 'classnames';

interface RoadmapColumnHeaderProps {
  label: string;
  count: number;
  subtitle: string;
}
function RoadmapColumnHeader({
  label,
  count,
  subtitle,
}: RoadmapColumnHeaderProps) {
  return (
    <div className={classnames(style.RoadmapColumnHeader)}>
      <h2 className={style.label}>
        {label} <span className={style.count}>({count})</span>
      </h2>
      <p className={style.subtitle}>{subtitle}</p>
    </div>
  );
}

export default RoadmapColumnHeader;

import React from 'react';
import style from './Roadmap.module.css';
import classnames from 'classnames';

const cx = classnames.bind(style);

export enum Status {
  Suggestion = 'Suggestion',
  Planned = 'Planned',
  InProgress = 'In Progress',
  Live = 'Live',
}
interface DotProps {
  height: string;
}
function Dot({ height }: DotProps) {
  return (
    <svg className={cx('dot')} height={height} viewBox="0 0 10 10">
      <circle cx="5" cy="5" r="5" />
    </svg>
  );
}

interface RoadmapProps {}
function Roadmap({}: RoadmapProps) {
  return (
    <div className={cx('card', 'roadmap')}>
      <h3 className="h3">Roadmap</h3>
      <a href="/" className={cx('link')}>
        View
      </a>
      {Object.entries(Status).map(([key, value]) => (
        <React.Fragment key={key}>
          <div className={cx('entry')}>
            <Dot height="0.625rem" />
            <span>{value}</span>
          </div>

          <span className={cx('count')}>{1}</span>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Roadmap;

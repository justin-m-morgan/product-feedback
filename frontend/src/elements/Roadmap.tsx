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
    <svg className={cx('roadmap__dot')} height={height} viewBox="0 0 10 10">
      <circle cx="5" cy="5" r="5" />
    </svg>
  );
}

interface RoadmapProps {}
function Roadmap({}: RoadmapProps) {
  return (
    <div className={cx('card', 'roadmap')}>
      <div className={cx('roadmap__heading')}>
        <h3 className="h3">Roadmap</h3>
        <a href="/" className={cx('roadmap__link')}>
          View
        </a>
      </div>
      {Object.entries(Status).map(([key, value]) => (
        <div className={cx('roadmap__entry')} key={key}>
          <div>
            <Dot height="0.625rem" />
            <span>{value}</span>
          </div>

          <span className={cx('roadmap__count')}>{1}</span>
        </div>
      ))}
    </div>
  );
}

export default Roadmap;

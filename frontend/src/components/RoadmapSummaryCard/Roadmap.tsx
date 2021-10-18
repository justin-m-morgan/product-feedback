import React from 'react';
import style from './Roadmap.module.css';
import classnames from 'classnames';

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
    <svg className={classnames(style.dot)} height={height} viewBox="0 0 10 10">
      <circle cx="5" cy="5" r="5" />
    </svg>
  );
}

interface RoadmapProps {}
function Roadmap({}: RoadmapProps) {
  return (
    <div className={classnames('card', style.roadmap)}>
      <div className={classnames(style.heading)}>
        <h3 className="h3">Roadmap</h3>
        <a href="/" className={classnames(style.link)}>
          View
        </a>
      </div>
      <div className={classnames(style.entries)}>
        {Object.entries(Status).map(([key, value]) => (
          <div className={classnames(style.entry)} key={key}>
            <div className={classnames(style.labels)}>
              <Dot height="0.625rem" />
              <span>{value}</span>
            </div>

            <span className={classnames(style.count)}>{1}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Roadmap;

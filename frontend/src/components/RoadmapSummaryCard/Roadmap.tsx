import React from 'react';
import style from './Roadmap.module.css';
import classnames from 'classnames';

import { Status } from '../../types/Request.interface';
import Dot from '../Dot/Dot';

interface RoadmapProps {}
function Roadmap({}: RoadmapProps) {
  return (
    <div className={classnames('card', style.roadmap)}>
      <div className={classnames(style.heading)}>
        <h3 className="h3">Roadmap</h3>
        <a href="/" className={classnames('link')}>
          View
        </a>
      </div>
      <div className={classnames(style.entries)}>
        {Object.entries(Status).map(([key, value]) => (
          <div className={classnames(style.entry)} key={key}>
            <div className={classnames(style.labels)}>
              <Dot />
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

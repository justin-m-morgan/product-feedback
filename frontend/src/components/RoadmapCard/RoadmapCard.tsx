import React from 'react';
import style from './RoadmapCard.module.css';
import classnames from 'classnames';
import Dot from '../Dot/Dot';
import { Category, Status } from '../../types/Request.interface';
import classNames from 'classnames';
import Badge from '../Badge/Badge';
import Arrow from '../../svg/Arrow';
import CommentCount from '../CommentCount/CommentCount';

interface RoadmapCardProps {
  status: Status;
  category: Category;
  title: string;
  description: string;
  upvoteCount: number;
  commentCount: number;
}
function RoadmapCard({
  status,
  category,
  title,
  description,
  upvoteCount,
  commentCount,
}: RoadmapCardProps) {
  return (
    <div className={classnames('card', style.RoadmapCard)}>
      <div className={style.status__container}>
        <Dot />
        <div className={style.status__label}>{status}</div>
      </div>

      <h3 className={style.title}>{title}</h3>
      <p className={classNames('body', style.description)}>{description}</p>
      <div className={style.category}>
        <Badge>{category}</Badge>
      </div>
      <div className={style.countContainer}>
        <Badge>
          <div className={style.upvotes}>
            <Arrow direction="up" />
            <span className={style.count}>{upvoteCount}</span>
          </div>
        </Badge>
        <CommentCount commentCount={commentCount} />
      </div>

      {/* Description */}
      {/* Category */}
      {/* Upvotes */}
      {/* CommentCount */}
    </div>
  );
}

export default RoadmapCard;

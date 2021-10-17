import React from 'react';
import style from './SuggestionCard.module.css';
import classnames from 'classnames';
import CountBadge from '../ui/CountBadge';
import { Category } from './CategoryFilter';
import Badge from '../ui/Badge';

const cx = classnames.bind(style);

interface SuggestionCardProps {
  title: string;
  description: string;
  category: Category;
  upvoteCount: number;
  commentCount: number;
}
function SuggestionCard({
  upvoteCount,
  commentCount,
  title,
  description,
  category,
}: SuggestionCardProps) {
  return (
    <div className={cx('card', 'suggestioncard__container')}>
      <div className={cx('suggestioncard__upvote')}>
        <CountBadge count={upvoteCount} />
      </div>
      <h3 className={cx('h3', 'suggestioncard__title')}>{title}</h3>
      <p className={cx('body', 'suggestioncard__description')}>{description}</p>
      <div className={cx('suggestioncard__category')}>
        <Badge>{Category[category]}</Badge>
      </div>
      <div
        className={cx('suggestioncard__comments', { zero: commentCount == 0 })}
      >
        {commentCount}
      </div>
    </div>
  );
}

export default SuggestionCard;

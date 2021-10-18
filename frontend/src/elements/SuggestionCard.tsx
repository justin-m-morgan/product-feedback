import React from 'react';
import style from './SuggestionCard.module.css';
import classnames from 'classnames';
import CountBadge from '../ui/CountBadge';
import { Category } from './CategoryFilter';
import Badge from '../ui/Badge';


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
    <div className={classnames('card', style.container)}>
      <div className={classnames(style.upvote)}>
        <CountBadge count={upvoteCount} />
      </div>
      <h3 className={classnames('h3', style.title)}>{title}</h3>
      <p className={classnames('body', style.description)}>{description}</p>
      <div className={classnames(style.category)}>
        <Badge>{Category[category]}</Badge>
      </div>
      <div className={classnames(style.comments, { zero: commentCount == 0 })}>
        {commentCount}
      </div>
    </div>
  );
}

export default SuggestionCard;

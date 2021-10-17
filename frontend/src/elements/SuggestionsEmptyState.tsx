import React from 'react';
import style from './SuggestionsEmptyState.module.css';
import Button from '../ui/Button';
import Plus from '../svg/Plus';

import emptyImg from '../../assets/suggestions/illustration-empty.svg';
import classNames from 'classnames';

const cx = classNames.bind(style);

interface SuggestionsEmptyStateProps {}
function SuggestionsEmptyState({}: SuggestionsEmptyStateProps) {
  return (
    <div className={cx('card', 'emptystate__container')}>
      <img
        src={emptyImg}
        alt="Sleuth character illustration"
        className={cx('emptystate__illustration')}
      />
      <p className={cx('h1', 'emptystate__pseudoheading')}>
        There is no feedback yet.
      </p>
      <p className={cx('emptystate__text')}>
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </p>
      <Button kind="purple">
        <Plus /> {'  '} Add Feedback
      </Button>
    </div>
  );
}

export default SuggestionsEmptyState;

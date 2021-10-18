import React from 'react';
import style from './SuggestionsEmptyState.module.css';
import Button from '../Button/Button';
import Plus from '../../svg/Plus';

import emptyImg from '../../assets/suggestions/illustration-empty.svg';
import classnames from 'classnames';

interface SuggestionsEmptyStateProps {}
function SuggestionsEmptyState({}: SuggestionsEmptyStateProps) {
  return (
    <div className={classnames('card', style.container)}>
      <img
        src={emptyImg}
        alt="Sleuth character illustration"
        className={classnames(style.illustration)}
      />
      <p className={classnames('h1', style.pseudoheading)}>
        There is no feedback yet.
      </p>
      <p className={classnames(style.text)}>
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

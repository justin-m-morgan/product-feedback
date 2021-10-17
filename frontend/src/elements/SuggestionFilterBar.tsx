import React from 'react';
import style from './SuggestionFilterBar.module.css';
import classnames from 'classnames';
import Suggestions from '../svg/Suggestions';
import SortSelector from '../ui/SortSelector';
import Button from '../ui/Button';
import Plus from '../svg/Plus';
import { SortOption } from '../ui/SortSelector';

const cx = classnames.bind(style);

interface SuggestionFilterBarProps {
  count: number;
  currentSelection: SortOption;
  setFilter: () => void;
}
function SuggestionFilterBar({
  count = 4,
  setFilter = () => null,
  currentSelection = 'Most Comments',
}: SuggestionFilterBarProps) {
  return (
    <div className={cx('card', 'filterbar')}>
      <Suggestions />
      <span className={cx('count')}>{count} Suggestions</span>
      <SortSelector
        handleChange={setFilter}
        fieldName="currentFilter"
        currentSelection={currentSelection}
      />

      <Button kind="purple">
        <Plus />
        {'  '}
        Add Feedback
      </Button>
    </div>
  );
}

export default SuggestionFilterBar;

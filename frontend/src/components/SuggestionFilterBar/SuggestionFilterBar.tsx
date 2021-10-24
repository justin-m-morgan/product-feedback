import React from 'react';
import style from './SuggestionFilterBar.module.css';
import classnames from 'classnames';
import Suggestions from '../../svg/Suggestions';
import SortSelector from '../SortSelector/SortSelector';
import Button from '../Button/Button';
import Plus from '../../svg/Plus';
import { SortOption } from '../SortSelector/SortSelector';

export interface SuggestionFilterBarProps {
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
    <div className={classnames('card', style.filterbar)}>
      <Suggestions />
      <span className={classnames(style.count)}>{count} Suggestions</span>
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

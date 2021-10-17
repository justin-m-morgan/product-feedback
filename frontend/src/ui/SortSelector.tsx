import React, { useState } from 'react';
import style from './SortSelector.module.css';
import classnames from 'classnames';
import Arrow from '../svg/Arrow';
import SelectOptions, {
  Option,
  SelectOptionProps,
} from '../forms/SelectOptions';

const cx = classnames.bind(style);


export type SortOption =
  | 'Most Upvotes'
  | 'Least Upvotes'
  | 'Most Comments'
  | 'Least Comments';

export const sortOptions: SortOption[] = [
  'Most Upvotes',
  'Least Upvotes',
  'Most Comments',
  'Least Comments',
];

interface SortSelectorProps {
  /**
   * Currently selected Sort option
   */
  currentSelection: SortOption;

  /**
   * Field name for grouping values
   */
  fieldName: string;
  /**
   * Whether options are currently visible
   */
  active?: boolean;
  /**
   * Handler for changed values of SelectOptions
   */
  handleChange: () => void;
}
function SortSelector({
  currentSelection,
  fieldName,
  active = false,
  handleChange = () => {},
}: SortSelectorProps) {
  const [isActive, setIsActive] = useState(active);
  const toggleActive = () => setIsActive(!isActive);

  const handleClick = () => {
    handleChange();
    toggleActive();
  };

  return (
    <div className={cx('sortselector__container')}>
      <button className={cx('sortbutton')} onClick={toggleActive}>
        <span className={cx('sortbutton__label')}>Sort by:</span>
        <span className={cx('sortbutton__option')}>{currentSelection}</span>
        <Arrow />
      </button>
      <SelectOptions
        fieldName={fieldName}
        options={sortOptions.map((o) => ({ value: o, label: o }))}
        hidden={!isActive}
        handleClick={handleClick}
      />
    </div>
  );
}


export default SortSelector;

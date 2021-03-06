import React, { useState } from 'react';
import style from './SortSelector.module.css';
import classnames from 'classnames';
import Arrow from '../../svg/Arrow';
import SelectOptions, {
  Option,
  SelectOptionProps,
} from '../SelectOptions/SelectOptions';


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
    <div className={classnames(style.container)}>
      <button className={classnames(style.sortbutton)} onClick={toggleActive}>
        <span className={classnames(style.label)}>Sort by:</span>
        <span className={classnames(style.option)}>{currentSelection}</span>
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

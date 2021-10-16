import React, { useState } from 'react';
import style from './SortSelector.module.css';
import classnames from 'classnames';
import Arrow from '../svg/Arrow';
import SelectOptions, {
  Option,
  SelectOptionProps,
} from '../forms/SelectOptions';

const cx = classnames.bind(style);

interface SortOptions {
  [key: string]: string;
}
const sortOptions: SortOptions = {
  MostUpvotes: 'Most Upvotes',
  LeastUpvotes: 'Least Upvotes',
  MostComments: 'Most Comments',
  LeastComments: 'Least Comments',
};

interface SortSelectorProps {
  /**
   * Currently selected Sort option
   */
  currentSelection: string;
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
  currentSelection = sortOptions.MostComments,
  fieldName = 'default',
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
    <div>
      <button className={cx('sortbutton')} onClick={toggleActive}>
        <span className={cx('sortbutton__label')}>Sort by:</span>
        <span className={cx('sortbutton__option')}>{currentSelection}</span>
        <Arrow />
      </button>
      <SelectOptions
        fieldName={fieldName}
        options={optionTransformer(sortOptions)}
        hidden={!isActive}
        handleClick={handleClick}
      />
    </div>
  );
}

function selectOptionTransformer(
  sortOptions: SortOptions,
  fieldName: string,
): SelectOptionProps {
  return {
    options: optionTransformer(sortOptions),
    fieldName,
  };
}

function optionTransformer(options: SortOptions): Option[] {
  return Object.entries(options).map(([value, label]) => ({ value, label }));
}

export default SortSelector;

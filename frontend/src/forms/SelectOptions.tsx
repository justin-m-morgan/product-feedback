import React from 'react';
import classnames from 'classnames';

import styles from './SelectOptions.module.css';

const cx = classnames.bind(styles);

export interface Option {
  label: string;
  value: any;
}

export interface SelectOptionProps {
  hidden?: boolean;
  fieldName: string;
  options: Option[];
  handleClick?: () => void;
}
function SelectOption({
  hidden = false,
  options = [],
  fieldName = 'default',
  handleClick = () => {},
}: SelectOptionProps) {
  return (
    <fieldset
      className={cx('options', {
        hide: hidden,
      })}
    >
      {options.map(({ value, label }) => (
        <React.Fragment key={value}>
          <input id={value} name={fieldName} value={value} type="radio" />
          <label htmlFor={value} className={cx('option')} onClick={handleClick}>
            {label}
          </label>
        </React.Fragment>
      ))}
    </fieldset>
  );
}


export default SelectOption;

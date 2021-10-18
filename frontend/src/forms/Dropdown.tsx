import React, { useState } from 'react';
import classnames from 'classnames';

import styles from './Dropdown.module.css';
import SelectOptions from './SelectOptions';

const cx = classnames.bind(styles);

interface Option {
  label: string;
  value: any;
}

interface DropdownProps {
  active?: boolean;
  fieldName: string;
  currentSelection: string;
  options: Option[];
  handleChange: () => void;
}
function Dropdown({
  active = false,
  options = [],
  fieldName = 'default',
  currentSelection,
  handleChange = () => {},
}: DropdownProps) {
  const [isActive, setIsActive] = useState(active);
  const toggleActive = () => setIsActive(!isActive);

  const handleClick = () => {
    handleChange();
    toggleActive();
  };

  return (
    <div className={cx('dropdown__container')}>
      <button className={cx('input', 'dropdown')} onClick={toggleActive}>
        {currentSelection}
      </button>

      <SelectOptions
        options={options}
        fieldName={fieldName}
        hidden={!isActive}
        handleClick={handleClick}
      />
    </div>
  );
}

export default Dropdown;

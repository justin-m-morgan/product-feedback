import React, { useState } from 'react';
import classnames from 'classnames';

import style from './Dropdown.module.css';
import SelectOptions from '../SelectOptions/SelectOptions';

export interface Option {
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
    <div className={classnames(style.container)}>
      <button
        className={classnames('input', style.dropdown)}
        onClick={toggleActive}
      >
        {currentSelection}
      </button>
      <div className={style.options}>
        <SelectOptions
          options={options}
          fieldName={fieldName}
          hidden={!isActive}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
}

export default Dropdown;

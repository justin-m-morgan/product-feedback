import React from 'react';
import style from './FormFieldgroup.module.css';
import classnames from 'classnames';

interface FormFieldgroupProps {
  inputName: string;
  label: string;
  instructions?: string;
  children: React.ReactNode;
}
function FormFieldgroup({
  children,
  inputName,
  label,
  instructions,
}: FormFieldgroupProps) {
  return (
    <div className={classnames(style.FormFieldgroup)}>
      <label htmlFor={inputName} className={style.label}>
        {label}
      </label>
      {instructions && (
        <span className={style.instructions}>{instructions}</span>
      )}
      {children}
    </div>
  );
}

export default FormFieldgroup;

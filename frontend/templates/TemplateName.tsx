import React from 'react';
import style from './TemplateName.module.css';
import classnames from 'classnames';

interface TemplateNameProps {}
function TemplateName({}: TemplateNameProps) {
  return <div className={classnames(style.TemplateName)}></div>;
}

export default TemplateName;

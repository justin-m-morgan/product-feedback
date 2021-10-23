import React from 'react';
import style from './FormTemplate.module.css';
import classnames from 'classnames';

interface FormTemplateProps {
  Icon: () => JSX.Element;
  title?: string;
  children: React.ReactNode;
  Buttons: () => JSX.Element;
}
function FormTemplate({ children, title, Buttons, Icon }: FormTemplateProps) {
  return (
    <div className={classnames(style.FormTemplate)}>
      <div className={classnames('card', style.container)}>
        <span className={style.icon}>
          <Icon />
        </span>
        {title && <h1 className={style.title}>{title}</h1>}

        <form>
          <div className={style.inputs}>{children}</div>

          <div className={style.container__buttons}>
            <Buttons />
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormTemplate;

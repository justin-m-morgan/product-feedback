import React from 'react';
import style from './FormPage.module.css';
import classnames from 'classnames';
import Arrow from '../../svg/Arrow';
import Link from '../Link/Link';

interface FormPageProps {
  children: React.ReactNode;
}
function FormPage({ children }: FormPageProps) {
  return (
    <div className={classnames(style.FormPage)}>
      <div className={style.backlink}>
        <Link>
          <Arrow direction="left" />
          Back
        </Link>
      </div>
      {children}
    </div>
  );
}

export default FormPage;

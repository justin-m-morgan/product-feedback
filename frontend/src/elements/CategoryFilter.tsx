import React from 'react';
import style from './CategoryFilter.module.css';
import classnames from 'classnames';
// import { Category } from '../../../src/request/entities/request.entity';
import Badge from '../ui/Badge';

const cx = classnames.bind(style);

export enum Category {
  All = 'All',
  Enhancement = 'Enhancement',
  Feature = 'Feature',
  Bug = 'Bug',
}

interface CategoryFilterProps {
  active?: Category;
}
function CategoryFilter({ active }: CategoryFilterProps) {
  return (
    <div className={cx('card', 'categoryfilter__container')}>
      {Object.entries(Category).map(([key, value]) => (
        <Badge active={key == active}>{value}</Badge>
      ))}
    </div>
  );
}

export default CategoryFilter;

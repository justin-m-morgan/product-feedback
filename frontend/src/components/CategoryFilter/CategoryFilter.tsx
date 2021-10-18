import React from 'react';
import style from './CategoryFilter.module.css';
import classnames from 'classnames';
import Badge from '../Badge/Badge';

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
    <div className={classnames('card', style.container)}>
      {Object.entries(Category).map(([key, value]) => (
        <Badge key={key} active={key == active}>
          {value}
        </Badge>
      ))}
    </div>
  );
}

export default CategoryFilter;

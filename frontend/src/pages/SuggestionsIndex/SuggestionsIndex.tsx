import React from 'react';
import style from './SuggestionsIndex.module.css';
import classnames from 'classnames';
import LogoBlock from '../../components/LogoBlock/LogoBlock';
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter';
import Roadmap from '../../components/RoadmapSummaryCard/Roadmap';
import SuggestionFilterBar, {
  SuggestionFilterBarProps,
} from '../../components/SuggestionFilterBar/SuggestionFilterBar';
import SuggestionsEmptyState from '../../components/SuggestionsEmptyState/SuggestionsEmptyState';
import SuggestionCard, {
  SuggestionCardProps,
} from '../../components/SuggestionCard/SuggestionCard';

interface SuggestionsIndexProps {
  suggestionFilterBarProps: SuggestionFilterBarProps;
  suggestions?: SuggestionCardProps[];
}
function SuggestionsIndex({
  suggestionFilterBarProps,
  suggestions,
}: SuggestionsIndexProps) {
  return (
    <div className={classnames(style.SuggestionsIndex)}>
      <div className={style.header}>
        <LogoBlock />
        <div className={style.controls}>
          <CategoryFilter />
          <Roadmap />
        </div>
      </div>
      <div className={style.index__container}>
        <div className={style.categoryFilter}>
          <SuggestionFilterBar {...suggestionFilterBarProps} />
        </div>
        {noSuggestions(suggestions) ? (
          <SuggestionsEmptyState />
        ) : (
          suggestions?.map((suggestion) => <SuggestionCard {...suggestion} />)
        )}
      </div>
    </div>
  );
}

function noSuggestions(suggestions: SuggestionCardProps[] | undefined) {
  return !suggestions || suggestions.length == 0;
}

export default SuggestionsIndex;

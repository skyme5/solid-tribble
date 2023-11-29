import React, { useEffect, useState } from 'react';

import { IoCloseCircleOutline, IoSearch } from 'react-icons/io5';

import {
  StyledContainer,
  StyledHeader,
  StyledInputActions,
  StyledInputIcon,
  StyledInputWrapper,
  StyledListing,
  StyledListingItemsWrapper,
  StyledNoResults,
  StyledSearchResultSummary,
} from './Landing.styled';

import Anime from '#/components/Anime';
import useDebounce from '#/hooks/useDebounce';
import useQueryState from '#/hooks/useQueryState';
import WithErrorBoundary from '#/hooks/withErrorBoundary';
import useCharacters from '#/services/characters/useCharacters';
import { formatNumber } from '#/utils/common';

const Landing = () => {
  const [queryState, setQueryState] = useQueryState({ searchText: '', page: 1, limit: 15 });
  const [searchText, setSearchText] = useState(queryState.searchText);
  const debouncedSearchText = useDebounce(searchText, 1000);

  const { data, isLoading } = useCharacters({
    ...queryState,
  });

  const totalCount = data?.pagination?.items?.total || 0;

  const handleClearSearchText = () => {
    setQueryState({ searchText: '' });
    setSearchText('');
  };

  useEffect(() => {
    setQueryState({ searchText: debouncedSearchText });
  }, [debouncedSearchText]);

  return (
    <StyledContainer>
      <StyledHeader>
        <span>Search Anime Characters</span>
        <StyledInputWrapper>
          <StyledInputIcon>
            <IoSearch />
          </StyledInputIcon>
          <input onChange={(e) => setSearchText(e.target.value)} value={searchText} />
          <StyledInputActions>
            {searchText && <IoCloseCircleOutline size={20} onClick={handleClearSearchText} />}
          </StyledInputActions>
        </StyledInputWrapper>
        <StyledSearchResultSummary>
          {isLoading ? (
            'Searching anime characters'
          ) : (
            <div>
              Total <span>{formatNumber(totalCount)}</span> {queryState.searchText && 'matching'} anime characters found
            </div>
          )}
        </StyledSearchResultSummary>
      </StyledHeader>
      <StyledListing>
        {totalCount > 0 && (
          <StyledListingItemsWrapper>
            {data.data.map((item) => (
              <Anime
                key={item.mal_id}
                image={item.images.webp.image_url}
                name={item.name}
                favorites={item.favorites}
                nicknames={item.nicknames}
                url={item.url}
              />
            ))}
          </StyledListingItemsWrapper>
        )}
        {!isLoading && totalCount <= 0 && <StyledNoResults>No results found!</StyledNoResults>}
      </StyledListing>
    </StyledContainer>
  );
};

export default WithErrorBoundary(Landing);

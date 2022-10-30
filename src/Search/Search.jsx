import React from 'react'
import { useState } from 'react';
import { IoSearch, IoArrowForward } from 'react-icons/io5'
import { Divider, SearchIconProvider, StyledSearch, StyledSearchHeader, StyledSearchInput, StyledSearchWrapper } from '../Components/SearchComponents'
import ResultTitle from './ResultTitle'
import SearchFeed from './SearchFeed';

export default function Search() {
  const [title, setTitle] = useState('Explore');

  return (
    <StyledSearchWrapper>
      <StyledSearch>
        <StyledSearchHeader>
          Search
        </StyledSearchHeader>
        <Divider/>
        <StyledSearchInput>
          <SearchIconProvider className="left">
            <IoSearch />
          </SearchIconProvider>
          <input type="text" />
          <SearchIconProvider className="right">
            <IoArrowForward onClick={() => setTitle('Result')}/>
          </SearchIconProvider>
        </StyledSearchInput>
      </StyledSearch>
      <ResultTitle title={title}/>
      <SearchFeed />
    </StyledSearchWrapper>
  )
}

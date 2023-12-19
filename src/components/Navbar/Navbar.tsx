import React from 'react';

import { CONTENT_TYPE, SHOW_PLACEHOLDER, MOVIE_PLACEHOLDER } from '@/constants/constantValues';
import useAppDispatch from '@/hooks/useAppDispatch';
import useAppSelector from '@/hooks/useAppSelector';
import { selectContentType, selectSearch, setContentType, setSearch } from '@/redux/rootSlice';
import { ContentType } from '@/types/types';

import './Navbar.css';

export default function Navbar() {
  const dispatch = useAppDispatch();
  const search = useAppSelector(selectSearch);
  const contentType = useAppSelector(selectContentType);
  const searchContent = contentType === CONTENT_TYPE.TV_SHOW ? SHOW_PLACEHOLDER : MOVIE_PLACEHOLDER;

  // Handle content for tv shows or movies and change button style to active
  const handleContent = ({ currentTarget: { value } }: React.MouseEvent<HTMLButtonElement>) => {
    if (contentType !== value) {
      dispatch(setContentType(value as ContentType));
    }
  };

  // Handle typing in search box and set it in context
  const onSearchChange = ({ currentTarget: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearch(value));
  };

  const setButtonClassName = (content: boolean) => (content ? 'navbar-button-item active' : 'navbar-button-item');

  return (
    <div className='navbar-container'>
      <div className='navbar-buttons'>
        <button
          className={setButtonClassName(contentType === CONTENT_TYPE.TV_SHOW)}
          value={CONTENT_TYPE.TV_SHOW}
          onClick={handleContent}
        >
          {`${SHOW_PLACEHOLDER}s`}
        </button>
        <button
          className={setButtonClassName(contentType === CONTENT_TYPE.MOVIE)}
          value={CONTENT_TYPE.MOVIE}
          onClick={handleContent}
        >
          {`${MOVIE_PLACEHOLDER}s`}
        </button>
      </div>
      <input id='search-box' placeholder={`Search for ${searchContent}`} value={search} onChange={onSearchChange} />
    </div>
  );
}

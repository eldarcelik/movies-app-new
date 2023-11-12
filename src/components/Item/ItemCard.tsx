import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import Vote from '@/components/Vote/Vote';
import { IMAGE_PATH, DEFAULT_IMAGE } from '@/constants/constantValues';
import { MoviesShowsContext } from '@/context/Context';
import calculateAverageVote from '@/helpers/calculateAverageVote';
import { ItemType } from '@/types/types';

import './ItemCard.css';

type ItemCardProps = {
  item: ItemType;
  key: number;
};

export default function ItemCard({ item }: ItemCardProps) {
  const { contentType } = useContext(MoviesShowsContext);
  const { id, poster_path, title, name, vote_average } = item;

  return (
    <Link to={`/${contentType}/${item.id}`} className='no-decoration'>
      <div key={id} className='item-container'>
        <img src={poster_path ? `${IMAGE_PATH}${poster_path}` : DEFAULT_IMAGE} alt={name || title} />
        <div className='title-container'>
          <h1 className='title'>{title || name}</h1>
          {vote_average > 0 && <Vote voteValue={calculateAverageVote(vote_average)} />}
        </div>
      </div>
    </Link>
  );
}

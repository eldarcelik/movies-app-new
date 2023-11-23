import React, { useState, useContext, useEffect } from 'react';

import { Link, useParams } from 'react-router-dom';

import { getItem } from '@/apis/getItem';
import Loading from '@/components/Loading/Loading';
import Vote from '@/components/Vote/Vote';
import { IMAGE_PATH, DEFAULT_IMAGE } from '@/constants/constantValues';
import { MoviesShowsContext } from '@/context/Context';
import calculateAverageVote from '@/helpers/calculateAverageVote';
import { ItemType } from '@/types/types';

import './MovieOrShow.css';

export default function MovieOrShow() {
  const { contentType } = useContext(MoviesShowsContext);
  const { id } = useParams();
  const [video, setVideo] = useState<string | number>();
  const [item, setItem] = useState<ItemType>();

  useEffect(() => {
    getItem(contentType, id as string)
      .then((data) => {
        setItem(data);
        // Set video key to use in React Player url
        setVideo(data.videos.results[0].key);
      })
      .catch(() => {
        // TODO: Handle error
      });
  }, []);

  // Display loader if there is no item
  if (!item) {
    return <Loading />;
  }

  // If there is video, display it, otherwise display image
  const displayVideoOrImage =
    item.videos.results.length === 0 ? (
      <img
        className='item-media picture'
        src={item.poster_path ? `${IMAGE_PATH}${item.poster_path}` : DEFAULT_IMAGE}
        alt={item.title || item.name}
      />
    ) : (
      <iframe
        title='video'
        className='item-media video'
        src={`https://www.youtube.com/embed/${video}`}
        allowFullScreen
      ></iframe>
    );

  // Display item details
  const itemDetails = (
    <div>
      <h1 className='item-title'>
        {item.name || item.title}
        {item.vote_average > 0 && <Vote voteValue={calculateAverageVote(item.vote_average)} />}
      </h1>
      <hr />
      <p className='item-release'>
        {item.release_date
          ? `Release Date: ${item.release_date}`
          : `First Air Date: ${item.first_air_date} \nLast Air Date: ${item.last_air_date}`}
      </p>
      <p className='item-overview'>
        {item.overview.length > 0 ? item.overview : 'No additional information available.'}
      </p>
    </div>
  );

  return (
    <div className='content-bcg'>
      <div className='content-container'>
        <div className='button-back-container'>
          <Link to='/'>
            <button className='button-back'>&lt; Back</button>
          </Link>
        </div>
        <div className='item-content'>
          {displayVideoOrImage}
          <div>{itemDetails}</div>
        </div>
      </div>
    </div>
  );
}

import React, { useContext } from 'react';

import ItemCard from 'components/Item/ItemCard';
import Loading from 'components/Loading/Loading';
import Navbar from 'components/Navbar/Navbar';
import { CONTENT_TYPE } from 'constantValues';
import { MoviesShowsContext } from 'Context';
import { IShow, IMovie, ItemType } from 'types';

import './Home.css';

export default function Home() {
  const { movies, shows, contentType, loading } = useContext(MoviesShowsContext);
  const data = contentType === CONTENT_TYPE.TV_SHOW ? (shows as IShow[]) : (movies as IMovie[]);

  // Display movies/tv shows as item cards
  const items = data.map((item) => <ItemCard key={item.id} item={item as ItemType} />);

  return loading ? (
    <Loading />
  ) : (
    <>
      <Navbar />
      <section className='grid-container'>{items}</section>
    </>
  );
}

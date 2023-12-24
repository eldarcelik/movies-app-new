import React from 'react';

import ItemCard from '@/components/Item/ItemCard';
import Loading from '@/components/Loading/Loading';
import Navbar from '@/components/Navbar/Navbar';
import { CONTENT_TYPE } from '@/constants/constantValues';
import useAppSelector from '@/hooks/useAppSelector';
import { selectMovies, selectShows, selectContentType, selectLoading } from '@/redux/rootSlice';
import { IShow, IMovie, IItem } from '@/types/types';

import './Home.css';

export default function Home() {
  const movies = useAppSelector(selectMovies);
  const shows = useAppSelector(selectShows);
  const contentType = useAppSelector(selectContentType);
  const loading = useAppSelector(selectLoading);
  const data = contentType === CONTENT_TYPE.TV_SHOW ? (shows as IShow[]) : (movies as IMovie[]);

  // Display movies/tv shows as item cards
  const items = data.map((item) => <ItemCard key={item.id} item={item as IItem} />);

  return (
    <>
      <Navbar />
      {loading ? <Loading /> : <section className='grid-container'>{items}</section>}
    </>
  );
}

import React from 'react';

import LoadingGif from '@/assets/loading.gif';

import './Loading.css';

export default function Loading() {
  return (
    <div className='loading'>
      <img src={LoadingGif} alt='loading' />
    </div>
  );
}

import React from 'react';

import { VoteProps } from '@/types/types';

import './Vote.css';

export default function Vote({ voteValue }: VoteProps) {
  return (
    <p className='vote-average'>
      <i className='fas fa-star'></i>
      {voteValue}
    </p>
  );
}

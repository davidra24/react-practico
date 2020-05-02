import React from 'react';
import play from '../../assets/play-icon.png';
import plus from '../../assets/plus-icon.png';
import { video } from '../../model/state';

export const CarouselItem = ({
  cover,
  title,
  year,
  contentRating,
  duration,
}: video) => (
  <div className='carousel-item'>
    <img className='carousel-item__img' src={cover} alt={title} />
    <div className='carousel-item__details'>
      <div>
        <img
          className='carousel-item__details--img'
          src={play}
          alt='Play Icon'
        />
        <img
          className='carousel-item__details--img'
          src={plus}
          alt='Plus Icon'
        />
      </div>
      <p className='carousel-item__details--title'>{title}</p>
      <p className='carousel-item__details--subtitle'>{`${year} ${contentRating} ${duration}`}</p>
    </div>
  </div>
);

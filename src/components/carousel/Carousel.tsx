import React from 'react';
import { categories } from './categoriesProps';

export const Carousel = ({ children }: categories) => (
  <div>
    <section className='carousel'>
      <div className='carousel__container'>{children}</div>
    </section>
  </div>
);

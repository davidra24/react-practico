import React from 'react';
import { categories } from './categoriesProps';
import '../../styles/components/Carousel.scss';

export const Categories = ({ children, title }: categories) => (
  <div className='Cateogories'>
    <h3 className='categories__title'>{title}</h3>
    {children}
  </div>
);

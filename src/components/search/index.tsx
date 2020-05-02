import React from 'react';
import '../../styles/components/Search.scss';

export const Search = () => (
  <div>
    <section className='main'>
      <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
      <input type='text' className='input' placeholder='Buscar...' />
    </section>
  </div>
);

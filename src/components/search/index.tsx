import React from 'react';
import classNames from 'classnames';
import '../../styles/components/Search.scss';

export const Search = ({ isHome }: any) => {
  const inputStyle = classNames('input', {
    isHome,
  });

  return (
    <div>
      <section className='main'>
        <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
        <input type='text' className={inputStyle} placeholder='Buscar...' />
      </section>
    </div>
  );
};

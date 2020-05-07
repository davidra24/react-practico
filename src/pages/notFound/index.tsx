import React from 'react';
import notFound from '../../assets/not-found.png';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <>
    <div style={{ textAlign: 'center' }}>
      <img src={notFound} alt='404. not-found' />
      <h1>Contenido no encontrado</h1>
      <Link to='/'>Ir Al inicio</Link>
    </div>
  </>
);

export default NotFound;

import React from 'react';
import '../../styles/components/Header.scss';
import logo from '../../assets/logo-platzi-video-BW2.png';
import user from '../../assets/user-icon.png';

export const Header = () => (
  <div>
    <header className='header'>
      <img className='header__img' src={logo} alt='Platzi Video' />
      <div className='header__menu'>
        <div className='header__menu--profile'>
          <img src={user} alt='' />
          <p>Perfil</p>
        </div>
        <ul>
          <li>
            <a href='/'>Cuenta</a>
          </li>
          <li>
            <a href='/'>Cerrar Sesión</a>
          </li>
        </ul>
      </div>
    </header>
  </div>
);

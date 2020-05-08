import React from 'react';
import '../../styles/components/Header.scss';
import logo from '../../assets/logo-platzi-video-BW2.png';
import userIcon from '../../assets/user-icon.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { gravatar } from '../../util/gravatar';
import { logoutRequest } from '../../actions';

const Head = (props: any) => {
  const { user, logoutRequest } = props;

  const hasUser = Object.keys(user).length != 0;

  const handleLogout = () => {
    logoutRequest({});
  };

  return (
    <div>
      <header className='header'>
        <Link to='/'>
          <img className='header__img' src={logo} alt='Platzi Video' />
        </Link>
        <div className='header__menu'>
          <div className='header__menu--profile'>
            {hasUser ? (
              <img src={gravatar(user.email)} alt={user.email} />
            ) : (
              <img src={userIcon} alt='' />
            )}
            <p>Perfil</p>
          </div>
          <ul>
            {hasUser && (
              <li>
                <Link to='/'>{user.name}</Link>
              </li>
            )}
            {hasUser ? (
              <li>
                <a href='#logout' onClick={handleLogout}>
                  Cerrar Sesión
                </a>
              </li>
            ) : (
              <li>
                <Link to='/login'>Iniciar Sesión</Link>
              </li>
            )}
          </ul>
        </div>
      </header>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  logoutRequest,
};

export const Header = connect(mapStateToProps, mapDispatchToProps)(Head);

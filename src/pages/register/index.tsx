import React, { useState } from 'react';
import '../../styles/pages/Register.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerRequest } from '../../actions';

const Register = (props: any) => {
  const { registerRequest, history } = props;

  const [form, setForm] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleChange = (event: any) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    registerRequest(props);
    history.push('/');
  };

  return (
    <section className='register'>
      <section className='register__container'>
        <h2>Regístrate</h2>
        <form className='register__container--form' onSubmit={handleSubmit}>
          <input
            className='input'
            type='text'
            placeholder='Nombre'
            name='name'
            onChange={handleChange}
          />
          <input
            className='input'
            type='email'
            placeholder='Correo'
            name='email'
            onChange={handleChange}
          />
          <input
            className='input'
            type='password'
            placeholder='Contraseña'
            name='*password'
            onChange={handleChange}
          />
          <button className='button' type='submit'>
            Registrarme
          </button>
        </form>
        <Link to='/login'>Iniciar sesión</Link>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);

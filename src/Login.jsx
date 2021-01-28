import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Form.css';
import Navbar from './Navbar';

const Login = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <>
    <Navbar/>
    <div className='form-container'>
      <div className='form-content-left'>
          <img className='form-img' src='img/main1.png' alt='lungs' />
        </div>
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <h1>
          Welcome back! Enter your details to continue.
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <p>{errors.username}</p>}
        </div>
        
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        
        <a href='/MainPage' className='form-input-btn' type='submit'>
          Login
        </a>
        <span className='form-input-login'>
          Don't have an account? Sign Up! <a href='/register'>here</a>
        </span>
      </form>
    </div>
    </div>
    </>
  );
};

export default Login;

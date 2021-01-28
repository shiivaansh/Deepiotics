import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import Navbar from './Navbar';
import './Form.css';

const FormSignup = ({ submitForm }) => {
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
          Get started with Deepiotics today! Create your account by filling out the
          information below.
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
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
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
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Hospital</label>
          <input
            className='form-input'
            type='text'
            name='hospital'
            placeholder='Hospital'
            value={values.hospital}
            onChange={handleChange}
          />
          {errors.hospital && <p>{errors.hospital}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>City</label>
          <input
            className='form-input'
            type='text'
            name='city'
            placeholder='City'
            value={values.city}
            onChange={handleChange}
          />
          {errors.city && <p>{errors.city}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Phone Number</label>
          <input
            className='form-input'
            type="text" pattern="[789][0-9]{9}"
            name='phone'
            placeholder='Phone Number'
            value={values.phone}
            onChange={handleChange}
          />
          {errors.phone && <p>{errors.phone}</p>}
        </div>
        <a href='/MainPage' className='form-input-btn' type='submit'>
          Sign up
        </a>
        <span className='form-input-login'>
          Already have an account? Login <a href='/login'>here</a>
        </span>
      </form>
    </div>
    </div>
    </>
  );
};

export default FormSignup;

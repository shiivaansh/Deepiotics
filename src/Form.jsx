import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import Reports from "./Reports"
import Navbar from './Navbar';
import MainPage from './MainPage';
import Login from './Login';
import Navbar1 from './Navbar1';
const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      {/* <Navbar></Navbar> */}
      <div className='form-container'>
        
        <div className='form-content-left'>
          <img className='form-img' src='img/main1.png' alt='lungs' />
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          
            
             <Reports/>
            
          
        )}
      </div>
    </>
  );
};

export default Form;

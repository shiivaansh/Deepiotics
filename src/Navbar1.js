import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar1() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  const sayHello= () => {
    alert('Hello!');
  }

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
            <img src="img/logo.png" alt="LOGO" width="220" height="70"></img>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            
            <i class='fab fa-typo3' />
          </Link>
          {/* <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div> */}
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/MainPage' className='nav-links'>
                Add new patient
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Reports'
                className='nav-links'
               
              >
                Reports
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'
               
              >
                Logout
              </Link>
            </li>
            

            
          </ul>
          
          
        </div>
      </nav>
    </>
  );
}

export default Navbar1;
import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function MiniNav() {
//   const [click, setClick] = useState(false);
//   const [button, setButton] = useState(true);

//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);

//   const showButton = () => {
//     if (window.innerWidth <= 960) {
//       setButton(false);
//     } else {
//       setButton(true);
//     }
//   };

//   useEffect(() => {
//     showButton();
//   }, []);
  const sayHello= () => {
    alert('Hello!');
  }

//   window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='miniNav'>
        <div className='miniNav-container'>
            
          
            
            
          
          {/* <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div> */}
          <ul className={'nav-menu active'}>
            <li className='nav-item'>
              <Link to='/Submission' className='nav-links'>
                Submission
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Result'
                className='nav-links'
               
              >
                Result
              </Link>
            </li>
            
            

            
          </ul>
          
          
        </div>
      </nav>
    </>
  );
}

export default MiniNav;
import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './Dropdown';


function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth <960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
     <div className="rectangle">
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          mCallCenter
          </Link>
         

      

     </div>


      <nav className='navbar'>

        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>


           <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Services <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>



          <li className='nav-item'>
            <Link
              to='/callagents'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              CallAgents
            </Link>
           
          </li>

          <li className='nav-item'>
            <Link
              to='/statistics'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Statistics
            </Link>
           
          </li>

          <li className='nav-item'>
            <Link
              to='/calllog'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              CallLog
            </Link>
           
          </li>

          <li className='nav-item'>
            <Link
              to='/agentstatuslog'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              AgentStatusLog
            </Link>
          </li>


         

          <li className='nav-item'>
            <Link
              to='/sms'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Sms
            </Link>
          </li>

          
         


        </ul>
        
      </nav>
    </>
  );
}

export default Navbar;

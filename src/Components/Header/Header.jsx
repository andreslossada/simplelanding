import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../img/onsolutionlogo.png';
export function Header() {
  return (
    <header className='header'>
      <div className='header__logo-box'>
        <img src={logo} alt='Logo' className='header__logo' />
      </div>

      <div className='header__text-box'>
        <h1 className='heading-primary'>
          <span className='heading-primary--main'>On Solution</span>
          <span className='heading-primary--sub'>
            No deje su tranquilidad al azar
          </span>
        </h1>
        <NavLink to='/pricing'>
          <p href='#' className='btn btn--white btn--animated'>
            Descubre nuestros planes
          </p>
        </NavLink>
      </div>
    </header>
  );
}

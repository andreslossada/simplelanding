import React from 'react';
import logo from '../../img/onsolutionlogo.png';
export function Header() {
  return (
    <header class='header'>
      <div class='header__logo-box'>
        <img src={logo} alt='Logo' class='header__logo' />
      </div>

      <div class='header__text-box'>
        <h1 class='heading-primary'>
          <span class='heading-primary--main'>OnSolutions</span>
          <span class='heading-primary--sub'>
            No deje su tranquilidad al azar
          </span>
        </h1>

        <a href='#section-tours' class='btn btn--white btn--animated'>
          Descubre nuestros planes
        </a>
      </div>
    </header>
  );
}

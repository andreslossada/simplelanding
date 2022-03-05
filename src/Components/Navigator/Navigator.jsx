import React from 'react';

function Navigator(props) {
  return (
    <div className='navigation'>
      <a type='checkbox' className='navigation__checkbox' id='navi-toggle' />

      <label for='navi-toggle' className='navigation__button'>
        <span className='navigation__icon'>&nbsp;</span>
      </label>

      <div className='navigation__background'>&nbsp;</div>

      <nav className='navigation__nav'>
        <ul className='navigation__list'>
          <li className='navigation__item'>
            <a href='#' className='navigation__link'>
              <span>01</span>Sobre On Solutions
            </a>
          </li>
          <li className='navigation__item'>
            <a href='#' className='navigation__link'>
              <span>02</span>Your benefits
            </a>
          </li>
          <li className='navigation__item'>
            <a href='#' className='navigation__link'>
              <span>03</span>Popular plans
            </a>
          </li>
          <li className='navigation__item'>
            <a href='#' className='navigation__link'>
              <span>04</span>Stories
            </a>
          </li>
          <li className='navigation__item'>
            <a href='#' className='navigation__link'>
              <span>05</span>Protect yourself
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigator;

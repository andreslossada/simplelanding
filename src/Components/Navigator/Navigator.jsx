import React from 'react';

function Navigator(props) {
  return (
    <div class='navigation'>
      <a type='checkbox' class='navigation__checkbox' id='navi-toggle' />

      <label for='navi-toggle' class='navigation__button'>
        <span class='navigation__icon'>&nbsp;</span>
      </label>

      <div class='navigation__background'>&nbsp;</div>

      <nav class='navigation__nav'>
        <ul class='navigation__list'>
          <li class='navigation__item'>
            <a href='#' class='navigation__link'>
              <span>01</span>Sobre On Solutions
            </a>
          </li>
          <li class='navigation__item'>
            <a href='#' class='navigation__link'>
              <span>02</span>Your benefits
            </a>
          </li>
          <li class='navigation__item'>
            <a href='#' class='navigation__link'>
              <span>03</span>Popular plans
            </a>
          </li>
          <li class='navigation__item'>
            <a href='#' class='navigation__link'>
              <span>04</span>Stories
            </a>
          </li>
          <li class='navigation__item'>
            <a href='#' class='navigation__link'>
              <span>05</span>Protect yourself
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigator;

import React from 'react';
import { NavLink } from 'react-router-dom';

export function Pricing() {
  const redirection = '/form';
  return (
    <section className='section-tours' id='section-tours'>
      <div className='u-center-text u-margin-bottom-big'>
        <h2 className='heading-secondary'>Planes mas populares</h2>
      </div>

      <div className='row'>
        <div className='col-1-of-3'>
          <div className='card'>
            <div className='card__side card__side--front'>
              <div className='card__picture card__picture--1'>&nbsp;</div>
              <h4 className='card__heading'>
                <span className='card__heading-span card__heading-span--1'>
                  Individual
                </span>
              </h4>
              <div className='card__details'>
                <ul>
                  <li>Cuidado de la salud mental</li>
                  <li>Cuidado dental</li>
                  <li>Atención de laboratorio</li>
                  <li>Tratamiento de abuso de sustancias</li>
                </ul>
              </div>
            </div>
            <div className='card__side card__side--back card__side--back-1'>
              <div className='card__cta'>
                <div className='card__price-box'>
                  <p className='card__price-only'>Solo</p>
                  <p className='card__price-value'>$297</p>
                </div>
                <NavLink to={redirection}>
                  <a href='#popup' className='btn btn--white'>
                    Comprar ahora
                  </a>
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className='col-1-of-3'>
          <div className='card'>
            <div className='card__side card__side--front'>
              <div className='card__picture card__picture--2'>&nbsp;</div>
              <h4 className='card__heading'>
                <span className='card__heading-span card__heading-span--2'>
                  Banca Asistencia
                </span>
              </h4>
              <div className='card__details'>
                <ul>
                  <li>Terapia física/ocupacional</li>
                  <li>Soporte nutricional</li>
                  <li>Cuidado farmacéutico</li>
                  <li>Cuidado dental</li>
                  <li>Atención preventiva</li>
                </ul>
              </div>
            </div>
            <div className='card__side card__side--back card__side--back-2'>
              <div className='card__cta'>
                <div className='card__price-box'>
                  <p className='card__price-only'>Solo</p>
                  <p className='card__price-value'>$497</p>
                </div>
                <NavLink exact to={redirection}>
                  <a href='#popup' className='btn btn--white'>
                    Comprar ahora
                  </a>
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className='col-1-of-3'>
          <div className='card'>
            <div className='card__side card__side--front'>
              <div className='card__picture card__picture--3'>&nbsp;</div>
              <h4 className='card__heading'>
                <span className='card__heading-span card__heading-span--3'>
                  Corporativo
                </span>
              </h4>
              <div className='card__details'>
                <ul>
                  <li>Cuidado prenatal</li>
                  <li>Soporte nutricional</li>
                  <li>Cuidado dental</li>
                  <li>Cuidado de la salud mental</li>
                  <li>Transporte</li>
                </ul>
              </div>
            </div>
            <div className='card__side card__side--back card__side--back-3'>
              <div className='card__cta'>
                <div className='card__price-box'>
                  <p className='card__price-only'>Solo</p>
                  <p className='card__price-value'>$897</p>
                </div>
                <NavLink to={redirection}>
                  <a href='#popup' className='btn btn--white'>
                    Comprar ahora
                  </a>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='u-center-text u-margin-top-huge'>
        <NavLink to={redirection}>
          <a href='#' className='btn btn--green'>
            Empieza el proceso
          </a>
        </NavLink>
      </div>
    </section>
  );
}

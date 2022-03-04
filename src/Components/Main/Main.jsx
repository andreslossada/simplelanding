import React from 'react';
import image1 from '../../img/medic.jpeg';
import image2 from '../../img/medic2.jpeg';
import image3 from '../../img/medic3.jpeg';

import portrait1 from '../../img/nat-8.jpg';
import portrait2 from '../../img/nat-9.jpg';
function Main(props) {
  return (
    <main>
      <section class='section-about'>
        <div class='u-center-text u-margin-bottom-big'>
          <h2 class='heading-secondary'>
            MÁS QUE UNA COMPAÑÍA, SOMOS COMPAÑÍA
          </h2>
        </div>

        <div class='row'>
          <div class='col-1-of-2'>
            <h3 class='heading-tertiary u-margin-bottom-small'>
              Compañía efectiva para nuestros clientes
            </h3>
            <p class='paragraph'>
              Somos un equipo multinacional que trabaja para avanzar
              constantemente en el servicio y desarrollar la mejor relación con
              nuestros clientes, distribuidores, proveedores, accionistas y la
              sociedad
            </p>

            <h3 class='heading-tertiary u-margin-bottom-small'>Visión</h3>
            <p class='paragraph'>
              Ser la aseguradora más confiable de Venezuela, por la calidad de
              nuestros servicios.
            </p>

            <a href='#' class='btn-text'>
              Learn more &rarr;
            </a>
          </div>
          <div class='col-1-of-2'>
            <div class='composition'>
              <img
                sizes='(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px'
                alt='Phot 1'
                class='composition__photo composition__photo--p1'
                src={image1}
              />

              <img
                sizes='(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px'
                alt='Phot 2'
                class='composition__photo composition__photo--p2'
                src={image2}
              />

              <img
                sizes='(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px'
                alt='Phot 3'
                class='composition__photo composition__photo--p3'
                src={image3}
              />
            </div>
          </div>
        </div>
      </section>

      <section class='section-features'>
        <div class='row'>
          <div class='col-1-of-4'>
            <div class='feature-box'>
              <i class='feature-box__icon icon-basic-world'></i>
              <h3 class='heading-tertiary u-margin-bottom-small'>
                Vive sin miedo
              </h3>
              <p class='feature-box__text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur.
              </p>
            </div>
          </div>

          <div class='col-1-of-4'>
            <div class='feature-box'>
              <i class='feature-box__icon icon-basic-compass'></i>
              <h3 class='heading-tertiary u-margin-bottom-small'>
                Estamos para ti
              </h3>
              <p class='feature-box__text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur.
              </p>
            </div>
          </div>

          <div class='col-1-of-4'>
            <div class='feature-box'>
              <i class='feature-box__icon icon-basic-map'></i>
              <h3 class='heading-tertiary u-margin-bottom-small'>
                Confia en nosotros
              </h3>
              <p class='feature-box__text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur.
              </p>
            </div>
          </div>

          <div class='col-1-of-4'>
            <div class='feature-box'>
              <i class='feature-box__icon icon-basic-heart'></i>
              <h3 class='heading-tertiary u-margin-bottom-small'>
                Servicio de calidad
              </h3>
              <p class='feature-box__text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class='section-tours' id='section-tours'>
        <div class='u-center-text u-margin-bottom-big'>
          <h2 class='heading-secondary'>Most popular tours</h2>
        </div>

        <div class='row'>
          <div class='col-1-of-3'>
            <div class='card'>
              <div class='card__side card__side--front'>
                <div class='card__picture card__picture--1'>&nbsp;</div>
                <h4 class='card__heading'>
                  <span class='card__heading-span card__heading-span--1'>
                    Plan basico
                  </span>
                </h4>
                <div class='card__details'>
                  <ul>
                    <li>3 day tours</li>
                    <li>Up to 30 people</li>
                    <li>2 tour guides</li>
                    <li>Sleep in cozy hotels</li>
                    <li>Difficulty: easy</li>
                  </ul>
                </div>
              </div>
              <div class='card__side card__side--back card__side--back-1'>
                <div class='card__cta'>
                  <div class='card__price-box'>
                    <p class='card__price-only'>Solo</p>
                    <p class='card__price-value'>$297</p>
                  </div>
                  <a href='#popup' class='btn btn--white'>
                    Comprar ahora
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class='col-1-of-3'>
            <div class='card'>
              <div class='card__side card__side--front'>
                <div class='card__picture card__picture--2'>&nbsp;</div>
                <h4 class='card__heading'>
                  <span class='card__heading-span card__heading-span--2'>
                    Plan Premium
                  </span>
                </h4>
                <div class='card__details'>
                  <ul>
                    <li>7 day tours</li>
                    <li>Up to 40 people</li>
                    <li>6 tour guides</li>
                    <li>Sleep in provided tents</li>
                    <li>Difficulty: medium</li>
                  </ul>
                </div>
              </div>
              <div class='card__side card__side--back card__side--back-2'>
                <div class='card__cta'>
                  <div class='card__price-box'>
                    <p class='card__price-only'>Solo</p>
                    <p class='card__price-value'>$497</p>
                  </div>
                  <a href='#popup' class='btn btn--white'>
                    Comprar ahora
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class='col-1-of-3'>
            <div class='card'>
              <div class='card__side card__side--front'>
                <div class='card__picture card__picture--3'>&nbsp;</div>
                <h4 class='card__heading'>
                  <span class='card__heading-span card__heading-span--3'>
                    Plan Premium Familiar
                  </span>
                </h4>
                <div class='card__details'>
                  <ul>
                    <li>5 day tours</li>
                    <li>Up to 15 people</li>
                    <li>3 tour guides</li>
                    <li>Sleep in provided tents</li>
                    <li>Difficulty: hard</li>
                  </ul>
                </div>
              </div>
              <div class='card__side card__side--back card__side--back-3'>
                <div class='card__cta'>
                  <div class='card__price-box'>
                    <p class='card__price-only'>Solo</p>
                    <p class='card__price-value'>$897</p>
                  </div>
                  <a href='#popup' class='btn btn--white'>
                    Comprar ahora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class='u-center-text u-margin-top-huge'>
          <a href='#' class='btn btn--green'>
            Discover all tours
          </a>
        </div>
      </section>

      <section class='section-stories'>
        <div class='bg-video'>
          <video class='bg-video__content' autoplay muted loop>
            <source src='img/video.mp4' type='video/mp4' />
            <source src='img/video.webm' type='video/webm' />
            Your browser is not supported!
          </video>
        </div>

        <div class='u-center-text u-margin-bottom-big'>
          <h2 class='heading-secondary'>We make people genuinely happy</h2>
        </div>

        <div class='row'>
          <div class='story'>
            <figure class='story__shape'>
              <img src={portrait1} alt='Person on a tour' class='story__img' />
              <figcaption class='story__caption'>Mary Smith</figcaption>
            </figure>
            <div class='story__text'>
              <h3 class='heading-tertiary u-margin-bottom-small'>
                I had the best week ever with my family
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur libero repellat quis
                consequatur ducimus quam nisi exercitationem omnis earum qui.
                Aperiam, ipsum sapiente aspernatur libero repellat quis
                consequatur ducimus quam nisi exercitationem omnis earum qui.
              </p>
            </div>
          </div>
        </div>

        <div class='row'>
          <div class='story'>
            <figure class='story__shape'>
              <img src={portrait2} alt='Person on a tour' class='story__img' />
              <figcaption class='story__caption'>Jack Wilson</figcaption>
            </figure>
            <div class='story__text'>
              <h3 class='heading-tertiary u-margin-bottom-small'>
                WOW! My life is completely different now
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur libero repellat quis
                consequatur ducimus quam nisi exercitationem omnis earum qui.
                Aperiam, ipsum sapiente aspernatur libero repellat quis
                consequatur ducimus quam nisi exercitationem omnis earum qui.
              </p>
            </div>
          </div>
        </div>

        <div class='u-center-text u-margin-top-huge'>
          <a href='#' class='btn-text'>
            Read all stories &rarr;
          </a>
        </div>
      </section>

      <section class='section-book'>
        <div class='row'>
          <div class='book'>
            <div class='book__form'>
              <form action='#' class='form'>
                <div class='u-margin-bottom-medium'>
                  <h2 class='heading-secondary'>Start booking now</h2>
                </div>

                <div class='form__group'>
                  <input
                    type='text'
                    class='form__input'
                    placeholder='Full name'
                    id='name'
                    required
                  />
                  <label for='name' class='form__label'>
                    Full name
                  </label>
                </div>

                <div class='form__group'>
                  <input
                    type='email'
                    class='form__input'
                    placeholder='Email address'
                    id='email'
                    required
                  />
                  <label for='email' class='form__label'>
                    Email address
                  </label>
                </div>

                <div class='form__group u-margin-bottom-medium'>
                  <div class='form__radio-group'>
                    <input
                      type='radio'
                      class='form__radio-input'
                      id='small'
                      name='size'
                    />
                    <label for='small' class='form__radio-label'>
                      <span class='form__radio-button'></span>
                      Small tour group
                    </label>
                  </div>

                  <div class='form__radio-group'>
                    <input
                      type='radio'
                      class='form__radio-input'
                      id='large'
                      name='size'
                    />
                    <label for='large' class='form__radio-label'>
                      <span class='form__radio-button'></span>
                      Large tour group
                    </label>
                  </div>
                </div>

                <div class='form__group'>
                  <button class='btn btn--green'>Next step &rarr;</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;

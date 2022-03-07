import { Form } from './../Form/Form';
import { Pricing } from './../Pricing/pricing';
import React from 'react';
import image1 from '../../img/medic.jpeg';
import image2 from '../../img/medic2.jpeg';
import image3 from '../../img/medic3.jpeg';

import portrait1 from '../../img/nat-8.jpg';
import portrait2 from '../../img/nat-9.jpg';
function Main(props) {
  return (
    <main>
      <section className='section-about'>
        <div className='u-center-text u-margin-bottom-big'>
          <h2 className='heading-secondary'>
            MÁS QUE UNA COMPAÑÍA, SOMOS COMPAÑÍA
          </h2>
        </div>

        <div className='row'>
          <div className='col-1-of-2'>
            <h3 className='heading-tertiary u-margin-bottom-small'>
              Compañía efectiva para nuestros clientes
            </h3>
            <p className='paragraph'>
              Somos un equipo multinacional que trabaja para avanzar
              constantemente en el servicio y desarrollar la mejor relación con
              nuestros clientes, distribuidores, proveedores, accionistas y la
              sociedad
            </p>

            <h3 className='heading-tertiary u-margin-bottom-small'>Visión</h3>
            <p className='paragraph'>
              Ser la aseguradora más confiable de Venezuela, por la calidad de
              nuestros servicios.
            </p>

            <a href='#' className='btn-text'>
              Mas información &rarr;
            </a>
          </div>
          <div className='col-1-of-2'>
            <div className='composition'>
              <img
                sizes='(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px'
                alt='Phot 1'
                className='composition__photo composition__photo--p1'
                src={image1}
              />

              <img
                sizes='(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px'
                alt='Phot 2'
                className='composition__photo composition__photo--p2'
                src={image2}
              />

              <img
                sizes='(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px'
                alt='Phot 3'
                className='composition__photo composition__photo--p3'
                src={image3}
              />
            </div>
          </div>
        </div>
      </section>

      <section className='section-features'>
        <div className='row'>
          <div className='col-1-of-4'>
            <div className='feature-box'>
              <i className='feature-box__icon icon-basic-world'></i>
              <h3 className='heading-tertiary u-margin-bottom-small'>
                Vive sin miedo
              </h3>
              <p className='feature-box__text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur.
              </p>
            </div>
          </div>

          <div className='col-1-of-4'>
            <div className='feature-box'>
              <i className='feature-box__icon icon-basic-compass'></i>
              <h3 className='heading-tertiary u-margin-bottom-small'>
                Estamos para ti
              </h3>
              <p className='feature-box__text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur.
              </p>
            </div>
          </div>

          <div className='col-1-of-4'>
            <div className='feature-box'>
              <i className='feature-box__icon icon-basic-map'></i>
              <h3 className='heading-tertiary u-margin-bottom-small'>
                Confia en nosotros
              </h3>
              <p className='feature-box__text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur.
              </p>
            </div>
          </div>

          <div className='col-1-of-4'>
            <div className='feature-box'>
              <i className='feature-box__icon icon-basic-heart'></i>
              <h3 className='heading-tertiary u-margin-bottom-small'>
                Servicio de calidad
              </h3>
              <p className='feature-box__text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Pricing />

      <section className='section-stories'>
        <div className='u-center-text u-margin-bottom-big'>
          <h2 className='heading-secondary'>
            Traemos felicidad a las personas
          </h2>
        </div>

        <div className='row'>
          <div className='story'>
            <figure className='story__shape'>
              <img
                src={portrait1}
                alt='Person on a tour'
                className='story__img'
              />
              <figcaption className='story__caption'>Carlos Perez</figcaption>
            </figure>
            <div className='story__text'>
              <h3 className='heading-tertiary u-margin-bottom-small'>
                Ahora tengo tranquilidad en mi vida
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

        <div className='row'>
          <div className='story'>
            <figure className='story__shape'>
              <img
                src={portrait2}
                alt='Person on a tour'
                className='story__img'
              />
              <figcaption className='story__caption'>Eddy Perez</figcaption>
            </figure>
            <div className='story__text'>
              <h3 className='heading-tertiary u-margin-bottom-small'>
                WOW! Mi vida cambió instantaneamente
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

        <div className='u-center-text u-margin-top-huge'>
          <a href='#' className='btn-text'>
            Leer todas las historias &rarr;
          </a>
        </div>
      </section>

      <Form />
    </main>
  );
}

export default Main;

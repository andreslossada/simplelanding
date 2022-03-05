import React from 'react';
export function Form({}) {
  return (
    <section className='section-book'>
      <div className='row'>
        <div className='book'>
          <div className='book__form'>
            <form action='#' className='form'>
              <div className='u-margin-bottom-medium'>
                <h2 className='heading-secondary'>Empezar el proceso</h2>
              </div>

              <div className='form__group'>
                <input
                  type='text'
                  className='form__input'
                  placeholder='Nombre completo'
                  id='name'
                  required
                />
                <label for='name' className='form__label'>
                  Full name
                </label>
              </div>

              <div className='form__group'>
                <input
                  type='email'
                  className='form__input'
                  placeholder='Dirección de email'
                  id='email'
                  required
                />
                <label for='email' className='form__label'>
                  Email address
                </label>
              </div>
              <div className='form__group'>
                <input
                  type='number'
                  className='form__input'
                  placeholder='Cedula'
                  id='cedula'
                  required
                />
                <label for='email' className='form__label'>
                  Cedula
                </label>
              </div>
              <div className='form__group'>
                <input
                  type='number'
                  className='form__input'
                  placeholder='Numero de telefono'
                  id='phone'
                  required
                />
                <label for='phone' className='form__label'>
                  Telefono
                </label>
              </div>

              <div className='form__group u-margin-bottom-medium plan-check'>
                <div className='form__radio-group'>
                  <input
                    type='radio'
                    className='form__radio-input'
                    id='small'
                    name='size'
                  />
                  <label for='small' className='form__radio-label'>
                    <span className='form__radio-button'></span>
                    Individual
                  </label>
                </div>

                <div className='form__radio-group'>
                  <input
                    type='radio'
                    className='form__radio-input'
                    id='large'
                    name='size'
                  />
                  <label for='large' className='form__radio-label'>
                    <span className='form__radio-button'></span>
                    Banca Asistencia
                  </label>
                </div>
                <div className='form__radio-group'>
                  <input
                    type='radio'
                    className='form__radio-input'
                    id='large'
                    name='size'
                  />
                  <label for='large' className='form__radio-label'>
                    <span className='form__radio-button'></span>
                    Corporativo
                  </label>
                </div>
              </div>

              <div className='form__group'>
                <button className='btn btn--green'>Enviar &rarr;</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

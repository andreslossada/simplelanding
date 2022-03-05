import React from 'react';
export function LoginForm() {
  return (
    <section className='section-book'>
      <div className='row'>
        <div className='book'>
          <div className='book__form'>
            <form action='#' className='form'>
              <div className='u-margin-bottom-medium'>
                <h2 className='heading-secondary'>Accesa a tu cuenta</h2>
              </div>

              <div className='form__group'>
                <input
                  type='email'
                  className='form__input'
                  placeholder='Correo electronico'
                  id='email'
                  required
                />
                <label for='email' className='form__label'>
                  Direccion de correo
                </label>
              </div>

              <div className='form__group'>
                <input
                  type='password'
                  className='form__input'
                  placeholder='Clave secreta'
                  id='password'
                  required
                />
                <label for='password' className='form__label'>
                  Clave secreta
                </label>
              </div>

              <div className='form__group'>
                <button className='btn btn--green'>Entrar &rarr;</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { NavLink } from 'react-router-dom';
import CustomButton from '../../Components/custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import '../../sass/main.scss';
// import './login.styles.scss';

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
                <label htmlFor='email' className='form__label'>
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
                <label htmlFor='password' className='form__label'>
                  Clave secreta
                </label>
              </div>

              <div className=''>
                <button className='btn btn--green u-margin-bottom-small'>
                  Entrar &rarr;
                </button>
                <div className=' u-margin-bottom-small'>
                  <CustomButton
                    // className='u-margin-bottom-big'
                    type='button'
                    onClick={signInWithGoogle}
                    isGoogleSignIn
                  >
                    Entrar con Google
                  </CustomButton>
                </div>
                <NavLink className='btn btn--green ' to='/signup'>
                  Crear Cuenta &rarr;
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

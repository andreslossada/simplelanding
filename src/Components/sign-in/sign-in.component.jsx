import React, { useState, useEffect } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';
import '../../sass/main.scss';
import useApp from '../../store/Context';

const SignIn = () => {
  // const { currentUser, setCurrentUser } = useApp();

  // const [userCredentials, setCredentials] = useState({email: '', password: ''})

  const handleSubmit = async (event) => {};

  const handleChange = (event) => {};

  return (
    <div className='sign-in'>
      <h2 className='title heading-secondary'>Ya poseo una cuenta</h2>
      <span className='heading-tertiary'>Accesa con tu usuario y clave</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          handleChange={handleChange}
          value=''
          label='Email'
          required
        />
        <FormInput
          name='password'
          type='password'
          value=''
          handleChange={handleChange}
          label='Password'
          required
        />
        <div className='buttons'>
          <CustomButton type='submit'>Entrar</CustomButton>
          <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>
            Entrar con Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;

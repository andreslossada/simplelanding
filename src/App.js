import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Form } from './Components/Form/Form';
import Home from './Pages/Home/Home';
import { Pricing } from './Components/Pricing/pricing';
import ButtonAppBar from './Components/TopBar/TopBar';
// import Contact from './Pages/Contact/Contact.jsx';
import Login from './Pages/Login/Loding';
import { LoginForm } from './Pages/Login/Login2';
import SocialFollow from '../src/Components/Social Media/SocialFollow.jsx';
import { auth } from './firebase/firebase.utils';

import './sass/main.scss';
import SignInAndSignUpPage from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import useApp from './store/Context';
import { useEffect } from 'react';

function App() {
  const { currentUser, setCurrentUser } = useApp();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      // console.log(currentUser);
    });
  }, []);
  console.log(currentUser);
  // <Route path='/contacto' element={<Contact />} />

  return (
    <BrowserRouter>
      <div className='App'>
        <ButtonAppBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='/login'
            element={currentUser ? <Navigate to='/pricing' /> : <LoginForm />}
          />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/form' element={<Form />} />
          <Route
            path='/signup'
            element={
              currentUser ? <Navigate to='/pricing' /> : <SignInAndSignUpPage />
            }
          />
        </Routes>
      </div>
      <SocialFollow />
    </BrowserRouter>
  );
}

export default App;

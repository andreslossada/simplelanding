import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Form } from './Components/Form/Form';
import Home from './Components/Home/Home';
import { Pricing } from './Components/Pricing/pricing';
import ButtonAppBar from './Components/TopBar/TopBar';
// import Contact from './Pages/Contact/Contact.jsx';
import Login from './Pages/Login/Loding';
import { LoginForm } from './Pages/Login/Login2';
import SocialFollow from '../src/Components/Social Media/SocialFollow.jsx';

import './sass/main.scss';

function App() {
  // <Route path='/contacto' element={<Contact />} />
  return (
    <BrowserRouter>
      <div className='App'>
        <ButtonAppBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/form' element={<Form />} />
        </Routes>
      </div>
      <SocialFollow />
    </BrowserRouter>
  );
}

export default App;

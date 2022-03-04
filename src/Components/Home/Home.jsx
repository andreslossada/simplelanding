import React from 'react';
import { Header } from './../Header/Header';

import Navigator from '../Navigator/Navigator';
import Main from '../Main/Main';

function Home(props) {
  return (
    <>
      <Navigator />
      <Header />
      <Main />
    </>
  );
}

export default Home;

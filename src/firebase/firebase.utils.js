import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyC3F5hvFISEVEgfOuMSpj4bAOxSW8z9GdE',
  authDomain: 'onsolution-d6a3c.firebaseapp.com',
  projectId: 'onsolution-d6a3c',
  storageBucket: 'onsolution-d6a3c.appspot.com',
  messagingSenderId: '533933790374',
  appId: '1:533933790374:web:0fab1cfec6e77abd7ad067',
  measurementId: 'G-LSZJE3FTW0',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () =>
  auth.signInWithPopup(provider).catch((err) => {
    console.log(err);
  });

export default firebase;

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyAQ_cMkysBqb6AvTRkE6HQt1OGwiN8WITI',
  authDomain: 'dandelion-fm2226.firebaseapp.com',
  databaseURL: 'https://dandelion-fm2226-default-rtdb.firebaseio.com',
  projectId: 'dandelion-fm2226',
  storageBucket: 'dandelion-fm2226.appspot.com',
  messagingSenderId: '426822046150',
  appId: '1:426822046150:web:53e3c6f74a60dafaf3e2c7',
  measurementId: 'G-TN20P7GL0L',
};

const login = async () => {
  try {
    await firebase.auth().signInAnonymously();
  } catch (err) {
    console.log('err');
  }
};

export function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }
  login();
}

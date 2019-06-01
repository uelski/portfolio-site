import firebase from 'firebase'

const firebaseConfig = {
    apiKey: process.env.fBaseKey,
    authDomain: "uelski-portfolio.firebaseapp.com",
    databaseURL: "https://uelski-portfolio.firebaseio.com",
    projectId: "uelski-portfolio",
    storageBucket: "uelski-portfolio.appspot.com",
    messagingSenderId: "305123831047",
    appId: "1:305123831047:web:2daadc5d129aed89"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;
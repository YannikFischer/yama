// Import the functions you need from the SDKs you need
import firebase from 'firebase'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA74cCY3OQuXwqTzOKna-Eo2kRG3pgdcQk",
  authDomain: "yama-a43cd.firebaseapp.com",
  projectId: "yama-a43cd",
  storageBucket: "yama-a43cd.appspot.com",
  messagingSenderId: "743936237092",
  appId: "1:743936237092:web:b81899f6e520b2d4ba02b1",
  measurementId: "G-R72TWVH8W0"
};

// Initialize Firebase
const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();

export default db;
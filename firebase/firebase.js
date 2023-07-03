// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8l3k5L3me4C_TPx4Lu3EUAdgeracliuk",
  authDomain: "formulario-de-reserva-5010d.firebaseapp.com",
  projectId: "formulario-de-reserva-5010d",
  storageBucket: "formulario-de-reserva-5010d.appspot.com",
  messagingSenderId: "349503059571",
  appId: "1:349503059571:web:cc1b82ac85dd64c563dc06",
};

// Initialize Firebase

const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();

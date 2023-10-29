import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import 'firebase/firestore';  // Si deseas usar Firestore
import 'firebase/auth';  // Si deseas usar autenticación

// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const dotenv = require('dotenv');
dotenv.config();

const firebaseConfig = {
  apiKey: var.env.APIKEY,
  authDomain: var.env.AUTHODOMAIN,
  projectId: var.env.PROJECTID,
  storageBucket: var.env.STOREGEBUCKET,
  messagingSenderId: var.env.MESSAGINGSEDERID,
  appId: var.env.APPID,
};


// Initialize Firebasel

const app = firebase.initializeApp(firebaseConfig);

export const db = app.firestore();

// Inicializa Firebase
//firebase.initializeApp(firebaseConfig);

export default app.firebase;
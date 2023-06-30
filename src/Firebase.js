// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// var dotenv = require("dotenv");
// dotenv.config()
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:'AIzaSyBJvloYDjQLIpmMFbfZkJJP8f86AqKdXRA',
  authDomain: 'finance-tracker-22cd5.firebaseapp.com',
  projectId: 'finance-tracker-22cd5',
  storageBucket: 'finance-tracker-22cd5.appspot.com',
  messagingSenderId: '500976547860',
  appId: '1:500976547860:web:5c91e794f9842689f20f01',
  measurementId: "G-04Y8T44245",
};


// project-500976547860
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// sets up the data base for useage
export const db = getFirestore(app)
//gets the authetification ready 
export const auth = getAuth(app)

// sets up the choosen mode of authetification ready 
export const provider = new GoogleAuthProvider()


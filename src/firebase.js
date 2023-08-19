// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6ytYv8cDaRaan7l_tmzCIWbur1dqv6s0",
  authDomain: "e-commerce-3a85a.firebaseapp.com",
  projectId: "e-commerce-3a85a",
  storageBucket: "e-commerce-3a85a.appspot.com",
  messagingSenderId: "619798344626",
  appId: "1:619798344626:web:976434dec16e88e30deaab",
  measurementId: "G-FSXWB6976N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();
export {auth};
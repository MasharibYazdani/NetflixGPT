// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "netflixgpt-a0e00.firebaseapp.com",
  projectId: "netflixgpt-a0e00",
  storageBucket: "netflixgpt-a0e00.appspot.com",
  messagingSenderId: "257671178550",
  appId: "1:257671178550:web:d9ff934ff38193e0b3eb97",
  measurementId: "G-CKR84W170C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

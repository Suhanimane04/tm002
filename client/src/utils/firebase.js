// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "tm-main-2a7cf.firebaseapp.com",
  projectId: "tm-main-2a7cf",
  storageBucket: "tm-main-2a7cf.firebasestorage.app",
  messagingSenderId: "148965460149",
  appId: "1:148965460149:web:2d9dadb9f27fc69ec3d6fc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


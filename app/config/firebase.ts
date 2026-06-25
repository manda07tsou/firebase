// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrXLgnjQZQV_enN9o_jRXtKK8GDXecB68",
  authDomain: "fir-first-c50d9.firebaseapp.com",
  projectId: "fir-first-c50d9",
  storageBucket: "fir-first-c50d9.firebasestorage.app",
  messagingSenderId: "474609944230",
  appId: "1:474609944230:web:76548ba02d274127f95667"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
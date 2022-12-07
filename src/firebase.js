// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJD9K4g3m3if4XVs3Y_ORVFCgp7pKMTwo",
  authDomain: "maplestory-app.firebaseapp.com",
  projectId: "maplestory-app",
  storageBucket: "maplestory-app.appspot.com",
  messagingSenderId: "181588376907",
  appId: "1:181588376907:web:78b833132cdae25d5d3cce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
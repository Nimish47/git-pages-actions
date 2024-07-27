// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_d6nTKuXKVTV7wwobPdwgNHtUoFtVTD4",
  authDomain: "cloud-note-manager.firebaseapp.com",
  projectId: "cloud-note-manager",
  storageBucket: "cloud-note-manager.appspot.com",
  messagingSenderId: "446470663988",
  appId: "1:446470663988:web:8d96ee8dce489701b3bf61",
  measurementId: "G-YGBZ0NKLQB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
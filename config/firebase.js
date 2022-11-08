// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWqSq-z9M5C4nbWoRydLPWr-TUfWynmMM",
  authDomain: "restaurant-app-8b154.firebaseapp.com",
  projectId: "restaurant-app-8b154",
  storageBucket: "restaurant-app-8b154.appspot.com",
  messagingSenderId: "59914055230",
  appId: "1:59914055230:web:176ddf0acae948e68beb6f",
  measurementId: "G-P2SM7M06P4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
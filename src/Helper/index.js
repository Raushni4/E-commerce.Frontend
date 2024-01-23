// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAK1cAwdlQg_lbs0XGzRD4CGqvJEy8ELMI",
  authDomain: "webecommerce236.firebaseapp.com",
  projectId: "webecommerce236",
  storageBucket: "webecommerce236.appspot.com",
  messagingSenderId: "1047119747631",
  appId: "1:1047119747631:web:0993b19d8636784fc684da",
  measurementId: "G-NWGDNJH5S3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {analytics}
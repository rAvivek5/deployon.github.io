// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAt03M-q9KO9JeI9dw6VOvByt6_XzcQmzc",
  authDomain: "recipeproject-6f8b0.firebaseapp.com",
  projectId: "recipeproject-6f8b0",
  storageBucket: "recipeproject-6f8b0.appspot.com",
  messagingSenderId: "1078624989260",
  appId: "1:1078624989260:web:fb5856fba0d098cd0f04e9",
  measurementId: "G-DMHRW85ZQL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

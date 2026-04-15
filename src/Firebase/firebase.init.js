// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfdIqgM2ZbHAju1X5jG7BzUHHFObcMVq4",
  authDomain: "dragon-news-80569.firebaseapp.com",
  projectId: "dragon-news-80569",
  storageBucket: "dragon-news-80569.firebasestorage.app",
  messagingSenderId: "629241312826",
  appId: "1:629241312826:web:d76ef1923297316c23a703",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJXx9-dbMw8OB411XGDW5_DrVKL2W-jt4",
  authDomain: "typemaster-8b132.firebaseapp.com",
  projectId: "typemaster-8b132",
  storageBucket: "typemaster-8b132.appspot.com",
  messagingSenderId: "47403678196",
  appId: "1:47403678196:web:422dffd1b59ffdd09321a1",
  measurementId: "G-785X54SCXQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);